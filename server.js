//*******DEPENDENCIES*********************************************************************************//
const express = require("express"); //Express Node Package to create back-end server/routes/control-flow
const exphbs = require("express-handlebars");// Handlebars -Templating Engine: deliver data to front-end
const db = require("./app/models");// SQL - Database connection to query in-house data
const path = require("path");

//*******APP-CONFIG***********************************************************************************//
let app = express();//Instance of Express server
let PORT = process.env.PORT || 8080; //Establish local & hosted server PORT express app will listen upon

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

//Establishing view path location in MVC
let viewsPath = path.join(__dirname, "/app", "/views")
app.set('views', viewsPath);

// Allows app to implement handlebars to template data
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: viewsPath + '/layouts' })); 
app.set("view engine", "handlebars");

//Incorporate static directory
app.use(express.static("./app/public"));

//**********ROUTES************************************************************************************//
//Links out to route handler
require("./app/routes/html-routes")(app);
require("./app/routes/api-routes")(app);

//**********SYNC-DB***********************************************************************************//
//wrap app listeners w/ db sync to ensure db is ready
db.sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log("App established on port:", PORT);
    });
});