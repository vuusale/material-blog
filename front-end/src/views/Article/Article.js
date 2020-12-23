import clsx from 'clsx';
import React, { useState, useEffect } from 'react';

// components
import Button from "components/CustomButtons/Button.js";

// requests
import { getArticle, getCommentsOfArticle, postComment } from "shared/request";

// @material-ui/icons
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// @material-ui/core
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    width: "100%",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: red[500],
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  author: {
    fontSize: 14,
    color: "steelblue"
  },
  title: {
    fontSize: 16,

  },
  content: {
    marginBottom: 5,
    fontSize: 15,
  },
  textarea: {
    width: "90%",
  },
  button: {
    margin: "10px 0",
    width: "20%",
    fontSize: "1.5vh"
  },
  center: {
    textAlign: "center"
  }
}));

export default function Article(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [articleId, setArticleId] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const article_id = props.location.pathname.split("/")[3];
    setArticleId(article_id);
    getArticle(article_id).then(res => setArticle(res.article))
    getCommentsOfArticle(article_id).then(res => setComments(res.comments))
  }, [props.location.pathname])

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {article.title ? article.title[0] : "A"}
          </Avatar>
        }
        title={article.title}
        subheader={`by ${article.author} | ${new Date(article.published_date).toLocaleString('en-US')}`}
      />
      <img 
        src={article.image}
        alt="articleimage"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {article.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand)}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <small>Comments</small>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {comments.map(comment => (
          <CardContent key={comment.comment_id}>
            <Typography className={classes.author}>{comment.author}</Typography>
            <Typography className={classes.title}>{comment.title}</Typography>
            <Typography className={classes.content}>{comment.content}</Typography>
          </CardContent>
        ))}
        <div className={classes.center}>
          <TextField
            className={classes.textarea}
            id="title"
            name="title"
            label="Title..."
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />  
          <TextField
            className={classes.textarea}
            id="content" 
            name="content"
            label="Your comment..."
            multiline
            onChange={(e) => {
                setContent(e.target.value)
            }}
          />
          <Button
              color="primary" 
              variant="contained"
              className={classes.button}
              onClick={(e) => {
                  postComment(title, content, articleId)
                    .then(res => {
                      !res.success ? alert(res.error) : window.location.reload()});
              }}  
          >Submit</Button>
        </div>
        
      </Collapse>
    </Card>
  );
}