import React from "react";

// charts
import ChartistGraph from "react-chartist";
import dailySalesChart from "variables/charts.js";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Update from "@material-ui/icons/Update";
import PostAdd from "@material-ui/icons/PostAdd";
import Subject from "@material-ui/icons/Subject";
import GroupAdd from "@material-ui/icons/GroupAdd";
import PersonAdd from "@material-ui/icons/PersonAdd";
import EventNote from "@material-ui/icons/EventNote";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Description from "@material-ui/icons/Description";

// components
import Card from "components/Card/Card.js";
import Table from "components/Table/Table.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem.js";
import CardFooter from "components/Card/CardFooter.js";
import Success from "components/Typography/Success.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";

// styles
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Person />
              </CardIcon>
              <p className={classes.cardCategory}>Most active user</p>
              <h3 className={classes.cardTitle}>
                peterpan_12{" "}
                <small>
                  <small>writer</small>
                </small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Success>
                  <PersonAdd />
                </Success>
                <a href="#simpson" onClick={(e) => e.preventDefault()}>
                  User since February, 2020
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PostAdd />
              </CardIcon>
              <p className={classes.cardCategory}>Articles published</p>
              <h3 className={classes.cardTitle}>30</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Subject />
                On December
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Description />
              </CardIcon>
              <p className={classes.cardCategory}>Best article</p>
              <h3 className={classes.cardTitle}>Intro to Assembly</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <EventNote />
                Published on 12 December, 2020
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <GroupAdd />
              </CardIcon>
              <p className={classes.cardCategory}>New users</p>
              <h3 className={classes.cardTitle}>+160</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Since 1 December
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Registration</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in signups today.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Online Users</h4>
              <p className={classes.cardCategoryWhite}>Users on the site right now</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Username", "Role"]}
                tableData={[
                  ["imatheking", "Reader"],
                  ["techguy73", "Writer"],
                  ["curiouscat", "Reader"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
