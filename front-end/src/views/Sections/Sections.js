import { Link }  from "react-router-dom";
import React, { useState, useEffect } from "react";

// @material-ui/core
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";

// components
import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";

// requests
import { getSections } from "shared/request";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Sections(props) {
  const classes = useStyles();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (!sections.length) {
      getSections()
        .then(( { sections }) => setSections(sections), []);
    }
  });
  const sectionsComponent = sections.map(section => (
    <Link style={{"color": "black"}} to={`/main/sections/${section.section_id}`} key={section.section_id}>
      <ListItem button>
        <ListItemText primary={section.title} />
      </ListItem>
      <Divider />
    </Link>
  ))

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sections</h4>
            <p className={classes.cardCategoryWhite}>
              Here is the list of sections where you can find related articles
            </p>
          </CardHeader>
          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
          >
            {sectionsComponent}
          </List>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
