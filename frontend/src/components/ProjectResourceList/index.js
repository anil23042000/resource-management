/* eslint-disable no-unused-vars */
import React from "react";
import Search from "../ReuseableSearch";
import ReuseTable from "../ReuseableTable";
import "./projectResourceList.scss";

const ProjectResourceList = (props) => {
  const tableheaders = [
    { header: "Project Name" },
    { header: "Employee Name" },
    { header: "project Start Date" },
    { header: "project End Date" },
    { header: "status" },
    { header: "billable" },
    { header: "Actions" }
  ];
  return (
    <>
      <div>Project Resource List</div>
      <Search></Search>
      <ReuseTable Header={tableheaders}></ReuseTable>
    </>
  )
};
export default ProjectResourceList;
