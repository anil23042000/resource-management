/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { deleteresource, getEmployee, getproject, getresource, getsingleresource, postresource, updateresource } from "../../actions/User";
import Header from "../Header";
import ReuseModal from "../Modal";
import Search from "../ReuseableSearch";
import ReuseTable from "../ReuseableTable";
import ReuseView from "../View";
import "./projectResourceList.scss";

const ProjectResourceList = (props) => {


  const [data, setData] = useState([]);
  const [value, setEmp] = useState([]);
  const [prodata, setPro] = useState([]);
  console.log(value);
  console.log(prodata);

  const [onedata, setOneData] = useState([]);
  console.log(onedata);
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const showModal = () => {
    setShow(true);
  }
  const closeModal = () => {
    console.log("closeModal")
    setShow(false)
  }
  const closeView = () => {
    console.log("closeModal")
    setShows(false)
  }

  const loadResourceData = async () => {
    const response = await getresource()
    console.log(response.data);
    if (response.data) {
      setData(response.data)
    } else {
      setData(null)
    }
  }

  useEffect(() => {
    loadResourceData();
  }, []);

  const search = (e) => {
    if (e == null) {
      loadResourceData();
    } else {
      const res = data.filter((item) => item.projectName.toUpperCase().includes(e.toUpperCase()) || item.employeeName.toUpperCase().includes(e.toUpperCase()));
      setData(res);
    }
    console.log(e)
  }

  const loadEmployeeData = async () => {
    const response = await getEmployee()
    console.log(response.data);
    let data = [];
    for (let i = 0; i < response.data.length; i++) {
      data.push(response.data[i].first_name + " " + response.data[i].last_name)

    };
    console.log(data)
    if (response.data) {
      setEmp(data)
    } else {
      setData(null)
    }
  }

  useEffect(() => {
    loadEmployeeData();
  }, []);

  const loadProjectData = async () => {
    const response = await getproject()
    console.log(response.data[0].project_id);
    //const data = response.data;
    let data = [];
    for (let i = 0; i < response.data.length; i++) {
      data.push(response.data[i].project_name)

    };
    console.log(data)

    console.log(response.data.project_id)
    if (response.data) {
      setPro(data)
    } else {
      setData(null)
    }
  }

  useEffect(() => {
    loadProjectData();
  }, []);

  const postForm = async (data) => {
    let uploadData = {};
    for (let i of data) {
      uploadData[i[0]] = i[1]
    }
    console.log(data, "--");
    const response = await postresource(uploadData)
    console.log(response.data);
    if (response.data) {
      // setData(response.data)
      loadResourceData();
      alert("1");
    } else {
      alert("2");
      // setData(null)
    }

  }

  const updateData = async (data, id) => {
    console.log(data, "--");
    let uploadData = {};
    for (let i of data) {
      uploadData[i[0]] = i[1]
    }
    const response = await updateresource(id, uploadData)
    console.log(response.data);
    if (response.data) {
      // setData(response.data)
      loadResourceData();
      alert("1");
    } else {
      alert("2");
      // setData(null)
    }
  }
  const deleteData = async (id, view) => {
    console.log(id);
    const response = await deleteresource(id);
    if (view) {

    }
    if (response.data) {
      //alert("deleted successfully!! ");
      loadResourceData();
    } else {
      alert("2");
      // setData(null)
    }

  }

  const getOneProject = async (id) => {
    console.log(id);
    const response = await getsingleresource(id);
    if (response.data) {
      setOneData(response.data)
      setShow(true);
      console.log(response.data);
    } else {
      alert("2");
      // setData(null)
    }
  }
  const getOneProjectDetails = async (id) => {
    console.log(id);
    const response = await getsingleresource(id);
    if (response.data) {
      setOneData(response.data)
      setShows(true);
      console.log(response.data);
    } else {
      alert("2");
      // setData(null)
    }
  }


  const tableheaders = [
    { header: "project Name", field: "projectName" },
    { header: "employee Name", field: "employeeName" },
    { header: "Start Date", field: "projectStartDate" },
    { header: "End Date", field: "projectEndDate" },
    { header: "status", field: "status" },
    { header: "billable", field: "billable" },
    { header: "actions", field: "Actions" }
  ];

  const role = [
    "Full Stack",
    "FrontEnd", "BackEnd"
  ]

  const formArr = [
    { label: "Project Name", name: "projectName", data: { value: prodata } },
    { label: "Employee Name", name: "employeeName", data: { value } },
    { label: "Role", name: "role", type: "text", data: { value: role } },
    { label: "Status", name: "status", type: "text" },
    { label: "Start Date", name: "projectStartDate", type: "date" },
    { label: "End Date", name: "projectEndDate", type: "date" },
    { label: "Billable", name: "billable", type: "text" },
  ]



  return (
    <>
      <Header name="Project Resource List" />
      <Search titel="Add Project Resource"
        search={(e) => { search(e) }}
        data={data}
        formArr={formArr}
        postLink={(data) => { postForm(data) }}
      ></Search>
      <br />
      <ReuseTable
        Header={tableheaders}
        data={data}
        getOne={(id) => { getOneProject(id) }}
        getOneDetails={(id) => { getOneProjectDetails(id) }}
        deleteData={(id) => { deleteData(id) }} />
      <ReuseModal
        titel="Update Resource"
        show={show}
        closeModal={closeModal}
        formArr={formArr}
        inputvalue={onedata}
        updateData={(data, id) => { updateData(data, id) }} />

      <ReuseView shows={shows} titel="Project Resource Details " closeView={closeView} formArr={formArr} data={onedata} />
    </>
  )
};
export default ProjectResourceList;
