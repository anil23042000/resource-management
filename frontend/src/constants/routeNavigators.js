import LoginComponent from "../containers/Login";
import ProjectsComponent from "../containers/Projects";
import ProjectResourceComponent from "../containers/ProjectResource";
import EmployeesComponent from "../containers/Employees";
import MonthlybillComponent from "../containers/Monthlybill";


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
  },
  {
    name: "Projects",
    path: "/projects",
    component: ProjectsComponent,
    isPublic: false,
  },
  {
    name: "ProjectResource",
    path: "/projectResource",
    component: ProjectResourceComponent,
    isPublic: false,
  },
  {
    name: "Employees",
    path: "/employees",
    component: EmployeesComponent,
    isPublic: false,
  },
  {
    name: "Monthlybill",
    path: "/monthlybill",
    component: MonthlybillComponent,
    isPublic: false,
  }

];

export default routeNavigators;
