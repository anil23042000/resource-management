/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getEmployee, deletefile, getfiles, getsinglefile, postfile, updatefile, readsinglefile } from "../../actions/User";
import Header from "../Header";
import ReuseModal from "../Modal";
import ReadFile from "../ReadFile";
import Search from "../ReuseableSearch";
import ReuseTable from "../ReuseableTable";
import ReuseView from "../View";
import "./monthlybillList.scss";

const MonthlybillList = (props) => {
  const [value, setEmp] = useState("")
  const [data, setData] = useState([]);
  const [onedata, setOneData] = useState([]);
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  console.log(show)
  console.log(data);
  const showView = () => {
    setShow(true)
  }
  const closeView = () => {
    setShow(false)
  }
  const closeModal = () => {
    setShows(false)
  }


  useEffect(() => {
    loadFiles()
  }, []);
  const loadFiles = async () => {
    const response = await getfiles();
    console.log(response.data);
    if (response.data) {
      setData(response.data)
    } else {
      setData(null)
    }
  }


  const search = (e) => {
    if (e == null) {
      loadFiles();
      props.history.push("/monthlybill");
    } else {
      console.log(data)
      const res = data.filter((item) => item.project_name.toUpperCase().includes(e.toUpperCase()));
      setData(res);
    }
    console.log(e)
  }



  const postForm = async (data) => {
    console.log(data, "--hi");
    const response = await postfile(data)
    console.log(response.data);
    if (response.data) {
      console.log("hi")
      loadFiles();
      props.history.push("/monthlybill");

    } else {
      alert("2");
      // setData(null)
    }

  }

  const updateFile = async (data, id) => {
    console.log(data, "--hi");
    console.log(id," ho")
    const response = await updatefile(id, data)
    console.log(response.data);
    if (response) {
      // setData(response.data)
      loadFiles();
      props.history.push("/monthlybill");
    } else {
      alert("2");
      // setData(null)
    }
  }
  const deleteFile = async (id, view) => {
    console.log(id);
    const response = await deletefile(id);
    if (response.data) {
      loadFiles();
      props.history.push("/monthlybill");

    } else {
      loadFiles()
      // setData(null)
    }

  }

  const getOneFile = async (id) => {
    console.log(id);
    const con = window.confirm("Are you want to Replace File!!")
    if (con) {
      const response = await getsinglefile(id);
      if (response.data) {
        setOneData(response.data)
        setShows(true)
        console.log(response.data);
      } else {
        alert("2");
        // setData(null)
      }
    }

  }
  const readOne = async (id) => {
    console.log("hello" + id);
    const response = await readsinglefile(id);
    if (response.data) {
      setOneData(response.data)
      setShow(true)
      console.log(response.data);
    } else {
      alert("2");
      // setData(null)
    }
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
      setEmp(null)
    }
  }

  useEffect(() => {
    loadEmployeeData();
  }, []);
  const tableheaders = [
    { header: "Employee Name", field: "employeeName" },
    { header: "File path", field: "filePath" },
    { header: "File Name", field: "fileName" },
    { header: "Date", field: "dateAndTime" },
    { header: "Actions", field: "Actions" }
  ];
  const formArr = [
    { label: "Employee Name", name: "employeeName", type: "text", data: { value } },
    { label: "Please Upload Monthly Bill", name: "file", type: "file" },
  ]
  return (<>
    <Header name="Monthly bill List" />
    <Search titel="Add Bill"
      data={data}
      formArr={formArr}
      Header={tableheaders}
      search={(e) => { search(e) }}
      postLink={(data) => { postForm(data) }}
    />
    <br />
    <ReuseTable
      Header={tableheaders}
      data={data}
      getOne={(id) => { getOneFile(id) }}
      getOneDetails={(id) => { readOne(id) }}
      deleteData={(id) => { deleteFile(id) }}
    />
    <ReuseModal
      titel="Update Bill"
      show={shows}
      data={data}
      closeModal={closeModal}
      formArr={formArr}
      inputvalue={onedata}
      updateData={(data, id) => { updateFile(data, id) }}
    />
    {show && <ReadFile
      show={show}
      data={onedata}
      closeView={closeView}
    />}
  </>);
};
export default MonthlybillList;