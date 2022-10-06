import LoginComponent from "../containers/Login";

const routeNavigators = [
  {
    name: "Login",
    path: "/",
    component: LoginComponent,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginComponent,
    isPublic: true,
  }
];

export default routeNavigators;
