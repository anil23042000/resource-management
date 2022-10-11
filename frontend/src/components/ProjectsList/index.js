/* eslint-disable no-unused-vars */
import React from "react";
import Search from "../ReuseableSearch";
import ReuseTable from "../ReuseableTable";
import "./projectsList.scss";

const ProjectsList = (props) => {
  const tableheaders = [
    { header: "Project Name" },
    { header: "clientName" },
    { header: "project Start Date" },
    { header: "project End Date" },
    { header: "status" },
    { header: "delivery_manager" },
    { header: "Actions" }
  ];
  return( <><div>Projects List</div>
  <Search></Search>
  <ReuseTable Header={tableheaders}></ReuseTable>
  </>
  );
};
export default ProjectsList;
