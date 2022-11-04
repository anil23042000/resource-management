import LoginComponent from "../containers/Login";
import ProjectsComponent from "../containers/Projects";
import ProjectResourceComponent from "../containers/ProjectResource";
import EmployeesComponent from "../containers/Employees";
import MonthlybillComponent from "../containers/Monthlybill";
import adminPage from "../components/adminpage";
import Admin from "../containers/Admin";
import roles from "./roles";


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
    name: "Admin",
    path: "/admin",
    component: Admin,
    isPublic: false,
    permission: [
      roles.SUPER_ADMIN,
      roles.ADMIN,
      roles.DeliveryDirector,
      roles.DeliveryManager,
      roles.MANAGER
    ],
  },

  {
    name: "Projects",
    path: "/projects",
    component: ProjectsComponent,
    isPublic: false,
    permission: [
      roles.ADMIN,
      roles.SUPER_ADMIN,
      roles.DeliveryDirector,
      roles.DeliveryManager,
      roles.MANAGER
    ]
  },
  {
    name: "ProjectResource",
    path: "/projectResource",
    component: ProjectResourceComponent,
    isPublic: false,
    permission: [
      roles.ADMIN,
      roles.SUPER_ADMIN,
      roles.DeliveryDirector,
      roles.DeliveryManager,
      roles.MANAGER
    ]
  },
  {
    name: "Employees",
    path: "/employees",
    component: EmployeesComponent,
    isPublic: false,
    permission: [
      roles.ADMIN,
      roles.SUPER_ADMIN,
      roles.User,
      roles.DeliveryDirector,
      roles.DeliveryManager,
      roles.MANAGER
    ]
  },
  {
    name: "Monthlybill",
    path: "/monthlybill",
    component: MonthlybillComponent,
    isPublic: false,
    permission: [
      roles.ADMIN,
      roles.SUPER_ADMIN,
      roles.User,
      roles.DeliveryDirector,
      roles.DeliveryManager,
      roles.MANAGER,
      roles.AccountsTeam
    ]
  }

];
export default routeNavigators;
