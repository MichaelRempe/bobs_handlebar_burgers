// **********HTML PATHS*********************************************************************************

// Dependencies
let db = require("../models")

//Routes to be exported
module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.render("index");
    })
}