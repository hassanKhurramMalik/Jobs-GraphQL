import Home from "../screens/Home";
import Details from "../screens/Details";
import Error from "../screens/Error";

const Routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    exact: true,
    component: Details,
  },
  {
    name: "Error",
    component: Error,
  },
];

export default Routes;
