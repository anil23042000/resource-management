const express = require("express");
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const fs = require('fs');
const path = require('path');
var mammoth = require("mammoth");
var multer = require('multer');
const xlsxFile = require('read-excel-file/node');
const projectSchema = require('../model/project_schema');
const employeeschema = require('../model/employee_schema');
const projectdetails = require('../model/project_resource_schema');
const fileSchema = require('../model/file_schema');


const mongoose = require('mongoose');
const { Duplex } = require("stream");
const { projectsreso } = require("../controller/per_controller");
const { json } = require("body-parser");
const { stringify } = require("querystring");
const Projects = mongoose.model('Project');
const Employee = mongoose.model('Employee');
const ProjectResource = mongoose.model('Project_Resource');
const File = mongoose.model('File');

function randomEmpString() {
    //define a variable consisting alphabets in small and capital letter
    var number = "123456789";
    //specify the length for the new string
    var lenString = 5;
    var randomstring = '';

    //loop to select a new character in each iteration
    for (var i = 0; i < lenString; i++) {
        var rnum = Math.floor(Math.random() * number.length);
        randomstring += number.substring(rnum, rnum + 1);
    }

    return "EMP" + randomstring;
}

function randomProString() {
    //define a variable consisting alphabets in small and capital letter
    var number = "123456789";
    //specify the length for the new string
    var lenString = 5;
    var randomstring = '';

    //loop to select a new character in each iteration
    for (var i = 0; i < lenString; i++) {
        var rnum = Math.floor(Math.random() * number.length);
        randomstring += number.substring(rnum, rnum + 1);
    }

    return "PRO" + randomstring;
}

// inserting Employee details
async function insertEmployee(req, res) {
    console.log(req.body)
    const employee = new Employee();
    employee.first_name = req.body.first_name;
    employee.last_name = req.body.last_name;
    employee.email = req.body.email
    employee.employee_id = randomEmpString();
    employee.employee_role = req.body.employee_role
    employee.employee_phone = req.body.employee_phone
    employee.employee_dob = req.body.employee_dob
    employee.current_org_experience = req.body.current_org_experience
    employee.previous_org_experience = req.body.previous_org_experience
    employee.current_ctc = req.body.current_ctc
    employee.primary_skills = req.body.primary_skills
    employee.secondary_skills = req.body.secondary_skills
    employee.status = req.body.status
    employee.reporting_manager = req.body.reporting_manager
    employee.save((err, data) => {
        if (err) throw err
        console.log(data);
    });
}
//inserting Project details
async function insertProject(req, res) {
    const project = new Projects();
    console.log(req.body)
    project.project_name = req.body.project_name
    project.project_id = randomProString();
    project.client_name = req.body.client_name
    project.projectStartDate = req.body.projectStartDate
    project.projectEndDate = req.body.projectEndDate
    project.status = req.body.status
    project.delivery_manager = req.body.delivery_manager
    project.engagement_director = req.body.engagement_director
    project.delivery_director = req.body.delivery_director
    project.project_manager = req.body.project_manager
    project.bu = req.body.bu
    project.reasonfor_close = req.body.reasonfor_close
    project.project_type = req.body.project_type
    project.project_budget = req.body.project_budget
    project.save((err, data) => {
        if (err) throw err
        console.log(data);
    })
}

//inserting Resource details
async function insertResource(req, res) {
    // console.log(req.body.project_id);
    console.log(req.body)
    const name = req.body.employeeName;
    const first_name = name.split(" ");
    const projectreso = new ProjectResource();
    const project = await Projects.findOne({ "project_name": req.body.projectName }).lean();
    console.log(project)
    console.log(project.project_name);
    const employee = await Employee.findOne({ "first_name": first_name }).lean();
    projectreso.projectName = req.body.projectName;
    projectreso.employeeName = req.body.employeeName;
    projectreso.projectID = project.project_id;
    projectreso.employeeId = employee.employee_id;
    projectreso.status = req.body.status
    projectreso.projectStartDate = req.body.projectStartDate;
    projectreso.projectEndDate = req.body.projectEndDate;
    projectreso.role = req.body.role;
    if (req.body.billable == "yes") {
        projectreso.billable = true
    } else {
        projectreso.billable = false
    }

    projectreso.save((err, data) => {
        if (err) throw err
        console.log(data)
    })
}

//inserting file 
async function insertFile(req, res) {
    const name = req.body.employeeName;
    const first_name = name.split(" ");

    const file = new File();
    console.log(req.file)
    const employee = await Employee.findOne({ "first_name": first_name }).lean();
    console.log(employee)
    file.employeeName = req.body.employeeName;
    file.filePath = req.file.path;
    file.fileName = req.file.filename;
    file.employeeId = employee.employee_id;
    file.save((err, data) => {
        if (err) throw err
        console.log(data);
    })

}



//finding all projects and displaying
async function listallProjects(req, res) {
    const docs = await Projects.find().lean();
    res.json(docs);
}

//finding all Employees and displaying
async function listallEmployee(req, res) {
    const docs = await Employee.find().lean();
    res.json(docs)
    //res.render("listemployees", { list: docs })
}

//finding all Resources and displaying
async function listallResource(req, res) {
    const resource = await ProjectResource.find().lean();
    res.json(resource);
}


//finding all file and displaying
async function listallFile(req, res) {
    const file = await File.find().lean();
    res.json(file)
}



//updating existing Employe
async function updateByempId(req, res) {
    console.log("updateByEmpid")
    console.log(req.body)
    console.log(req.body._id);
    Employee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
        console.log(doc)
        if (!err) { console.log("Updated Successfully") }
        else {
            console.log("err" + err)
        }
    });
}

//updating existing Projecy
async function updateByproId(req, res) {
    console.log("updateByproid")
    console.log(req.body)
    console.log(req.body._id)
    Projects.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            console.log(doc)
        }
        else {
            console.log("err" + err)
        }
    });
}
//updating existing Resource
async function updateByresId(req, res) {
    console.log("updated Reso")
    console.log(req.body)
    console.log(req.params.id)
    ProjectResource.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            console.log(doc)
        }
        else {
            throw err
        }
    });
}

//finding single Employee and rendering for update
async function getOneEmp(req, res) {
    console.log(req.params.id)
    const employee = await Employee.findById(req.params.id).lean();
    res.json(employee)

}

//finding single Project and rendering for update
async function getOnePro(req, res) {
    console.log(req.body)
    console.log(req.params.id)
    const project = await Projects.findById(req.params.id).lean();
    res.json(project)

}

//finding single Resource and rendering for update
async function getOneReso(req, res) {
    const project = await ProjectResource.findById(req.params.id).lean();
    res.json(project)

}


//deleting single project
async function deleteByproId(req, res) {
    console.log(req.params.id)
    //here deleting 
    try {
        const project = await Projects.findByIdAndRemove(req.params.id);
        if (project) console.log("Deleted!!")
    } catch (err) {
        console.log(err);
    }
}
//deleting single Employee
async function deleteByEmpId(req, res) {
    console.log(req.params.id)
    console.log(req.body)
    //here deleting 
    try {
        const project = await Employee.findByIdAndRemove(req.params.id);
        if (project) {
            console.log("deleted!!")
        }
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}
//deleting single Resource
async function deleteByresoId(req, res) {
    //here deleting 
    try {
        const project = await ProjectResource.findByIdAndRemove(req.params.id);
        if (project) console.log("deleted!!")
    } catch (err) {
        console.log(err);
    }
}


//here finding employees id and project id and passing ID's  for inserting resource
async function addtoproject(req, res) {
    const project = await Projects.find().lean();
    const employee = await Employee.find().lean();
    res.render("resource", {
        project: project,
        employee: employee
    })
}


//here finding employees id and  passing ID's  for inserting resource
async function addfile(req, res) {
    const employee = await Employee.find().lean();
    res.render("addbill", {
        employee: employee
    })
}


//reading single file from read-excel-file/node
async function readOneFile(req, res) {

    //finding data in mongoodb 
    console.log(req.params.id)
    const file = await File.findOne({ "_id": req.params.id }).lean();
    // console.log(projects.fileName);
    // console.log(projects.filePath);

    console.log(file)
    //here reading data after find out 
    xlsxFile(file.filePath).then((file) => {
        console.log(file)


        res.json(file);
        // res.render('readfile', { list: file });
    })
}

async function giveMoreInfo(req, res) {
    console.log(req.params.id);
    const details = await ProjectResource.find({ "projectID": req.params.id }).lean();
    console.log(details)

    res.json(details)
}



//Deleting project info from database
async function deleteByid(req, res) {

    //this function will delete file in repo 
    unlinkFile(req.params.id);

    //here deleting 
    try {
        const file = await File.findByIdAndRemove(req.params.id);
        if (file) res.redirect("/api/listfile");
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


//this function will unlike the file from folder using unlink function
async function unlinkFile(id) {
    console.log(id);
    //finding file details for getting file __dir
    const file = await File.findOne({ "_id": id });

    // const projects = await Projects.findOne({ "_id": fileId }).exec();
    console.log(file)
    //unlinking
    fs.unlink(file.filePath, (err) => {
        if (err) throw err
        console.log("Success")
    })
}

// here finding data and rendered for updating 
async function getOneFile(req, res) {
    const fileinfo = await File.findById(req.params.id).lean();
    console.log(fileinfo.employeeId)
    res.json(fileinfo);
    //here unlinking the file bcoz we will upload new updated file 
    unlinkFile(req.params.id);
}


// here updating or replacing the project info and file
async function replaceFile(req, res) {
    //collecting info for updating 
    console.log(req.body);
    console.log(req.params.id)
    const name = req.body.employeeName;
    const first_name = name.split(" ");

    const employee = await Employee.findOne({ "first_name": first_name }).lean();
    console.log(employee)
    const fileInfo = {
        filePath: req.file.path,
        fileName: req.file.filename,
        employeeId: employee.employee_id
    }
    console.log(fileInfo)

    //updating old file and info to new info and file
    File.findOneAndUpdate({ _id: req.params.id }, fileInfo, { new: true }, (err, doc) => {
        if (!err) { console.log(doc) }
        else {
            console.log("hi " + err);
        }
    });
}


// exporting all functions
module.exports = {
    getOneReso, updateByempId, deleteByresoId, insertResource, listallResource, insertFile, listallFile, addfile, readOneFile,
    addtoproject, giveMoreInfo, deleteByid, getOneFile, replaceFile,
    insertEmployee,
    getOnePro,
    getOneEmp,
    updateByproId,
    updateByresId,
    insertProject,
    listallProjects,
    listallEmployee,
    deleteByproId,
    deleteByEmpId
}