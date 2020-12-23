import React, { Component } from 'react';
import { Link } from "react-router-dom";

// @material-ui/core
import { withStyles } from "@material-ui/core";
import GridList from '@material-ui/core/GridList';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/ArrowForwardIos';
import GridListTile from '@material-ui/core/GridListTile';
import { withSnackbar } from 'material-ui-snackbar-provider'
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// requests
import { getArticles } from "shared/request";

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
};

class Section extends Component {
  constructor() {;
    super()
    this.state = {
      section: "",
      articles: [],
    }
  }

  componentDidMount() {
    const section_id = this.props.location.pathname.split("/")[3];
    getArticles(section_id)
      .then(({ articles }) => {
        this.setState({
          articles: articles,
        });
        if (articles.length) this.setState({
          section: articles[0].section,
        });
      })
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Articles: {this.state.articles.length ? this.state.section : "There is nothing to show"}</ListSubheader>
          </GridListTile>
          {this.state.articles.length ? this.state.articles.map(article => (
            <GridListTile key={article.article_id}>
              <img src={article.image} alt={article.title} />
              <Link to={`/main/articles/${article.article_id}`}>
                <GridListTileBar 
                title={article.title}
                subtitle={<span>by {article.author}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${article.title}`} className={classes.icon}>
                    <small><small>Read more</small></small>
                    <InfoIcon />
                  </IconButton>
                }
              />
              </Link>
            </GridListTile>
          )) : ""}
        </GridList>
      </div>
    )
  }
}

export default withSnackbar()(withStyles(styles)(Section))
