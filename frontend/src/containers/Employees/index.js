import Sidebar from "../../components/sidebar";
import EmployeesList from "../../components/EmployeesList";
import "./employees.scss";

const Employees = () => {
  return (
    <div className="employeesContainer">
      <div className="leftConatiner">
        <Sidebar tabActive={"employees"} />
      </div>
      <div className="rigthConatiner">
        <EmployeesList />
      </div>
    </div>
  );
};

export default Employees;
