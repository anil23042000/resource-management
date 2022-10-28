const express = require("express");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const path = require("path");
const routes = require("./backend/routes/per_route");
require("./backend/config/per_db");

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
app.set("views", path.join(__dirname, "/frontend/"));
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: __dirname + "/frontend/",
  })
);
app.set("view engine", "hbs");

app.use(cors({
  origin: "*"
}))

app.use("/api", routes);
app.listen(3002, () => {
  console.log("Express server started at port : 3002");
});
