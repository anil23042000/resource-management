const express = require("express");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const path = require("path");
const routes = require("./src/backend/routes/per_route");
require("./src/backend/config/per_db");

const cors = require('cors');

//const exphbs1 = require('express-handlebars');
const app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());


app.use(cors({
  origin: "*"
}))

app.use("/api", routes);
app.listen(3002, () => {
  console.log("Express server started at port : 3002");
});
