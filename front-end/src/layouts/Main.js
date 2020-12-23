import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core
import Footer from "components/Footer/Footer.js";
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { makeStyles } from "@material-ui/core/styles";

// views
import Login from "views/Login/Login.js";
import HomePage from "views/Home/Home.js";
import Section from "views/Sections/Section";
import Sections from "views/Sections/Sections";
import Article from "views/Article/Article.js";
import Register from "views/Register/Register.js";
import CreateArticle from "views/Article/CreateArticle";
import UserProfile from "views/UserProfile/UserProfile.js";

// routes
import mainRoutes from "routes.js";

// styles
import "perfect-scrollbar/css/perfect-scrollbar.css";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

// images
import logo from "assets/img/logo.png";
import bgImage from "assets/img/sidebar.jpg";

let ps;

const switchRoutes = (
  <Switch>
    <Route
      path="/main/home"
      component={HomePage}
    />
    <Route
      path="/main/user"
      component={UserProfile}
    />
    <Route
      exact path="/main/sections"
      component={Sections}
    />
    <Route
      path="/main/sections/:section_id"
      component={Section}
    />
    <Route
      exact path="/main/articles/create"
      component={CreateArticle}
    />
    <Route
      path="/main/articles/:article_id"
      component={Article}
    />
    <Route
      exact path="/main/login"
      component={Login}
    />
    <Route
      exact path="/main/register"
      component={Register}
    />
    <Redirect from="/main" to="/main/home" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  const classes = useStyles();
  const mainPanel = React.createRef();
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoute = () => {
    return window.location.pathname !== "/main/maps";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={mainRoutes}
        logoText={"Tech Blog"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={mainRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
      </div>
    </div>
  );
}
