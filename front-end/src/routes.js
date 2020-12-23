// views
import Login from "views/Login/Login.js";
import HomePage from "views/Home/Home.js";
import Sections from "views/Sections/Sections.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import CreateArticle from "views/Article/CreateArticle.js";

// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Create from "@material-ui/icons/Create";
import ExitToApp from "@material-ui/icons/ExitToApp";
import PersonAdd from "@material-ui/icons/PersonAdd";

const mainRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: Home,
    component: HomePage,
    layout: "/main",
  },
  {
    path: "/login",
    name: "Login",
    icon: ExitToApp,
    component: Login,
    layout: "/main",
  },
  {
    path: "/register",
    name: "Registration",
    icon: PersonAdd,
    component: Login,
    layout: "/main",
  },
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: UserProfile,
    layout: "/main",
  },
  {
    path: "/sections",
    name: "Sections",
    icon: Dashboard,
    component: Sections,
    layout: "/main",
  },
  {
    path: "/articles/create",
    name: "Create Article",
    icon: Create,
    component: CreateArticle,
    layout: "/main",
  },
];

export default mainRoutes;
