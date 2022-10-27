const express = require("express");
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const router = express.Router();
const controller = require("../controller/per_controller")
const projectdetails = require('../model/project_resource_schema');

var mammoth = require("mammoth");
var multer = require('multer');
const fs = require('fs');
const path = require('path');
const xlsxFile = require('read-excel-file/node');
const { table } = require("console");

//creating storage
const storageEngin = multer.diskStorage({
    //giving destination for strong file
    destination: function (req, file, callback) {
        callback(null, "./backend/uploads/")
    },

    //giving filename
    filename: function (req, file, callback) { 
        console.log(file.originalname)
        callback(null, file.originalname)
    }
});

const upload = multer({ storage: storageEngin }).single('file');



router.get("/", controller.getData);

//rendering for inserting employee page
router.get("/employee", (req, res) => {
    res.render("addemployee")
});
//rendering for inserting for project 
router.get("/project", (req, res) => {
    res.render("addproject")
    //res.render("addproject");
});
//rendering for uploading new file
//router.get("/addbill", controller.file) 
//rendering for inserting for resource
router.get("/resource", controller.projectsreso);

//colleteting inputs for inserting in all 3 sheets
router.post("/postemployee", controller.uploadEmployee);
router.post("/postproject", controller.uploadProject);
router.post("/postresource", controller.uploadResource);
router.post("/postfile", upload, controller.uploadBill);

//list all data from each table from database
router.get("/listproject", controller.listProjects)
router.get("/listemployee", controller.listEmployee)
router.get("/listresource", controller.listResource);
router.get("/listfile", controller.listFile);

//finding single data for updating 
router.get("/getproject/:id", controller.getProject)
router.get("/getemployee/:id", controller.getEmployee);
router.get("/getresource/:id", controller.getResource)

//collecting data for updating from post method
router.put("/updateproject/:id", controller.updateProject);
router.put("/updateemployee/:id", controller.updateEmployee);
router.put("/updateresource/:id", controller.updateResource);
router.put("/updatefile/:id", upload, controller.updateOneFile);


//deleting  
router.delete("/deletepro/:id", controller.deleteoneProject);
router.delete("/deleteemp/:id", controller.deleteoneEmployee);
router.delete("/deletereso/:id", controller.deleteoneResource);
//routing get method for deleting single fileinfo
router.delete("/filedelete/:id", controller.deletesingle);

//routing get method for reading one file 
router.get("/fileread/:id", controller.readData);

//giving more details
router.get("/details/:id", controller.moreDetails);


//routing get method for getting one file for updateing
router.get("/fileupdate/:id", controller.updateFile);





module.exports = router;