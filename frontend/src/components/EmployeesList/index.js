/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Search from "../ReuseableSearch";
import ReuseTable from "../ReuseableTable";
import "./employeesList.scss";
import { getEmployee, postemployee, deleteemployee, getsingleemployee, updateemployee } from "../../actions/User";
import ReuseModal from "../Modal";
import ReuseView from "../View";

const EmployeesList = (props) => {

  // const deleteLink = "http://localhost:4002/api/deleteemp/";
  // const postLink = "http://localhost:4002/api/postemployee";


  const [data, setData] = useState([]);
  const [onedata, setOneData] = useState([]);
  const [shows, setShows] = useState(false);
  console.log(onedata);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  }
  const closeModal = () => {
    console.log("closeModal")
    setShow(false)
    setShows(false)
  }
  const closeView = () => {
    console.log("closeView")
    setShows(false)
  }

  const loadEmployeeData = async () => {
    const response = await getEmployee()
    console.log(response.data);
    if (response.data) {
      setData(response.data)
    } else {
      setData(null)
    }
  }

  useEffect(() => {
    loadEmployeeData();
  }, []);

  const search = (e) => {
    if (e == null) {
      loadEmployeeData();
    } else {
      const res = data.filter((item) => item.first_name.toUpperCase().includes(e.toUpperCase()) || item.last_name.toUpperCase().includes(e.toUpperCase()));
      setData(res);
    }
    console.log(e)
  }

  const postForm = async (data) => {
    let uploadData = {};
    for (let i of data) {
      uploadData[i[0]] = i[1]
    }
    console.log(updateData, "--");
    const response = await postemployee(uploadData)
    console.log(response.data);
    if (response.data) {
      loadEmployeeData();
      props.history.push("/employees");

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
    console.log(uploadData)
    const response = await updateemployee(id, uploadData)
    console.log(response.data);
    if (response.data) {
      // setData(response.data)
      loadEmployeeData();
      alert("1");
    } else {
      alert("2");
      // setData(null)
    }
  }
  const deleteData = async (id, view) => {
    console.log(id);
    const response = await deleteemployee(id);
    if (response.data) {
      //alert("deleted successfully!! ");
      loadEmployeeData();
      props.history.push("/employees");

    } else {
      alert("2");
      // setData(null)
    }

  }

  const getOneEmployee = async (id) => {
    console.log(id);
    const response = await getsingleemployee(id);
    if (response.data) {
      setOneData(response.data)
      setShow(true);
      console.log(response.data);
    } else {
      alert("2");
      // setData(null)
    }
  }
  const getOneEmployeeDetails = async (id) => {
    console.log(id);
    const response = await getsingleemployee(id);
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
    { header: "First Name", field: "first_name" },
    { header: "Last Name", field: "last_name" },
    { header: "Email", field: "email" },
    { header: "Employee Id", field: "employee_id" },
    { header: "Employee Role", field: "employee_role" },
    { header: "Employee Phone", field: "employee_phone" },
    { header: "Actions", field: "Actions" }
  ];

  const formArr = [
    { label: "First Name", name: "first_name", type: "text" },
    { label: "Last Name", name: "last_name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Employee Role", name: "employee_role", type: "text" },
    { label: "Employee Phone", name: "employee_phone", type: "text" },
    { label: "Employee Dob", name: "employee_dob", type: "date" },
    { label: "Current Org Experience", name: "current_org_experience", type: "text" },
    { label: "Previous Org Experience", name: "previous_org_experience", type: "text" },
    { label: "Current Ctc", name: "current_ctc", type: "text" },
    { label: "Primary Skills", name: "primary_skills", type: "text" },
    { label: "Secondary Skills", name: "secondary_skills", type: "text" },
    { label: "Reporting Manager", name: "reporting_manager", type: "text" }
  ]
  const formViewArr = [
    { label: "First Name", name: "first_name", type: "text" },
    { label: "Last Name", name: "last_name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Employee Id", name: "employee_id", type: "text" },
    { label: "Employee Role", name: "employee_role", type: "text" },
    { label: "Employee Phone", name: "employee_phone", type: "text" },
    { label: "Employee Dob", name: "employee_dob", type: "date" },
    { label: "Current Org Experience", name: "current_org_experience", type: "text" },
    { label: "Previous Org Experience", name: "previous_org_experience", type: "text" },
    { label: "Current Ctc", name: "current_ctc", type: "text" },
    { label: "Primary Skills", name: "primary_skills", type: "text" },
    { label: "Secondary Skills", name: "secondary_skills", type: "text" },
    { label: "Reporting Manager", name: "reporting_manager", type: "text" }
  ]
  return (<>

    <div className="Conatiner">
      <Header name="Employee List" />
      <Search titel="Add Employee"
        formArr={formArr}
        postLink={(data) => { postForm(data) }}
        search={(e) => { search(e) }} /><br />
      <ReuseTable
        Header={tableheaders}
        data={data}
        getOne={(id) => { getOneEmployee(id) }}
        deleteData={(id) => { deleteData(id) }}
        getOneDetails={(id) => { getOneEmployeeDetails(id) }} />

      <ReuseModal titel="Update Employee" show={show} closeModal={closeModal} formArr={formArr} inputvalue={onedata}
        updateData={(data, id) => { updateData(data, id) }} />
      <ReuseView titel="Employee Details" shows={shows} data={onedata} closeView={closeView} formArr={formViewArr} />

    </div>
  </>

  )


};
export default EmployeesList;
