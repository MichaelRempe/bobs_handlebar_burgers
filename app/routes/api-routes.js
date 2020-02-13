// **********DATABASE CRUD OPERATIONS*******************************************************************

// Dependencies
let db = require("../models")

//Routes to be exported
module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.render("index",{message:"hello world"});
    })


    app.get("api/burgers/", (req, res)=>{
        db.Burger.findAll({}).then((burgers)=>{
            // res.json(burgers);
            console.log(burgers);
        })
    })
    
}