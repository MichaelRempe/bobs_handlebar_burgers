// **********DATABASE CRUD OPERATIONS*******************************************************************

// Dependencies
let db = require("../models")

//Routes to be exported
module.exports = (app)=>{
  //GET all burgers, filter and place in appropriate key:value pair
  app.post('/burgers', function (req, res) {
    db.Burger.create({name:req.body.name}).then((newBurger)=>{console.log(newBurger)});
    let _orders = [];
    let _devoured =[];
    db.Burger.findAll({}).then((data)=>{
      for(let i=0; i<data.length; i++){
          if(data[i].dataValues.devoured === true){
              _devoured.push(data[i].dataValues);
          }else{
              _orders.push(data[i].dataValues);
          }
      }
      res.render('index', {orders:_orders});
    })
  });
}