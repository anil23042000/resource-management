/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../Header";
import Search from "../ReuseableSearch";
import ReuseTable from "../ReuseableTable";
import "./projectsList.scss";
import { deleteproject, getproject, getsingleproject, postproject, updateproject, } from "../../actions/User";
import ReuseModal from "../Modal";
import ReuseView from "../View";
import { Redirect } from "react-router-dom";

const ProjectsList = (props) => {


  const [data, setData] = useState([]);
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

  const search = (e) => {
    if (e == null) {
      loadProjectData();
    } else {
      const res = data.filter((item) => item.project_name.toUpperCase().includes(e.toUpperCase()));
      setData(res);
    }
    console.log(e)
  }


  const loadProjectData = async () => {
    const response = await getproject()
    console.log(response.data);
    if (response.data) {
      setData(response.data)
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
    console.log(uploadData, "--");
    await postproject(uploadData).then((res, err) => {
      if (!err) {
        alert("success")
        loadProjectData();
        props.history.push('/projects')
      } else {
        throw err
      }

    })
   

  }

  const updateData = async (data, id) => {
    console.log(data, "--");
    let uploadData = {};
    for (let i of data) {
      uploadData[i[0]] = i[1]
    }
    const response = await updateproject(onedata._id, uploadData)
    console.log(response.data);
    if (response.data) {
      alert("Updated successfully!! ");
      loadProjectData();
      props.history.push("/projects")
    } else {
      alert("2");
      // setData(null)
    }
  }
  const deleteData = async (id, view) => {
    console.log(id);
    await deleteproject(id).then((res, err) => {
      if (!err) {
        alert("deleted successfully!! ");
        loadProjectData();
        props.history.push("/projects")
      } else {
        throw err
      }
    });

  }

  const getOneProject = async (id) => {
    console.log(id);
    const response = await getsingleproject(id);
    if (response.data) {
      setOneData(response.data)
      setShow(true);
      console.log(response.data);
    } else {
      alert("Error!!!");
      // setData(null)
    }
  }
  const getOneProjectDetails = async (id) => {
    console.log(id);
    const response = await getsingleproject(id);
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
    { header: "project name", field: "project_name" },
    { header: "client name", field: "client_name" },
    { header: "Start Date", field: "projectStartDate" },
    { header: "End Date", field: "projectEndDate" },
    { header: "status", field: "status" },
    { header: "manager", field: "delivery_manager" },
    { header: "Actions", field: "Actions" }
  ];

  const formArr = [
    { label: "Project Name", name: "project_name", type: "text" },
    { label: "Client Name", name: "client_name", type: "text" },
    { label: "Start Date", name: "projectStartDate", type: "date" },
    { label: "End Date", name: "projectEndDate", type: "date" },
    { label: "Delivery Manager", name: "delivery_manager", type: "text" },
    { label: "Engagement Director", name: "engagement_director", type: "text" },
    { label: "Delivery Director", name: "delivery_director", type: "text" },
    { label: "Project Manager", name: "project_manager", type: "text" },
    { label: "Bu", name: "bu", type: "text" },
    { label: "Project Type", name: "project_type", type: "text" },
    { label: "Status", name: "status", type: "text" },
    { label: "Reasonfor Close", name: "reasonfor_close", type: "text" }
  ]
  const formViewArr = [
    { label: "Project Name", name: "project_name", type: "text" },
    { label: "Project Id", name: "project_id", type: "text" },
    { label: "Client Name", name: "client_name", type: "text" },
    { label: "Start Date", name: "projectStartDate", type: "date" },
    { label: "End Date", name: "projectEndDate", type: "date" },
    { label: "Delivery Manager", name: "delivery_manager", type: "text" },
    { label: "Engagement Director", name: "engagement_director", type: "text" },
    { label: "Delivery Director", name: "delivery_director", type: "text" },
    { label: "Project Manager", name: "project_manager", type: "text" },
    { label: "Bu", name: "bu", type: "text" },
    { label: "Project Type", name: "project_type", type: "text" },
    { label: "Status", name: "status", type: "text" },
    { label: "Reasonfor Close", name: "reasonfor_close", type: "text" }
  ]

  return (<>
    <Header name="Projects List" />
    <Search titel="Add Project"
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
      getOne={(id) => { getOneProject(id) }}
      getOneDetails={(id) => { getOneProjectDetails(id) }}
      deleteData={(id) => { deleteData(id) }}
    />

    <ReuseModal
      titel="Update Project"
      show={show}
      data={data}
      closeModal={closeModal}
      formArr={formArr}
      inputvalue={onedata}
      updateData={(data, id) => { updateData(data, id) }} />
    <ReuseView
      titel="project Details"
      shows={shows} data={onedata}
      formArr={formViewArr}
      closeView={closeView}
    />
  </>
  );
};
export default ProjectsList;
