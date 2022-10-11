/* eslint-disable no-unused-vars */
import React from "react";
import Search from "../ReuseableSearch";
import ReuseTable from "../ReuseableTable";
import "./employeesList.scss";

const EmployeesList = (props) => {
  const tableheaders = [
    { header: "first_name" },
    { header: "last_name" },
    { header: "email" },
    { header: "employee_id" },
    { header: "employee_role" },
    { header: "employee_phone" },
    { header: "Actions" }
  ];


  return <>
    <div>Employees List</div>

    <Search></Search>
    <ReuseTable Header={tableheaders} />
  </>;
};
export default EmployeesList;
