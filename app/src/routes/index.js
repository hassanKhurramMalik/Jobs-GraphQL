import Home from "../screens/Home";
import Details from "../screens/Details";
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
];

export default Routes;
