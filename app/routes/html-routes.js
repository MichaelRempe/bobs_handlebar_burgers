// **********HTML PATHS*********************************************************************************

//Routes to be exported
module.exports = (app)=>{
    app.get("/", (req, res)=>{
        res.render("index");
    })
}