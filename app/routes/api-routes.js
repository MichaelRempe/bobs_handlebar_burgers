// **********DATABASE CRUD OPERATIONS*******************************************************************

// Dependencies
let db = require("../models")

//Routes to be exported
module.exports = (app)=>{
  //GET all burgers, filter and place in appropriate key:value pair to be rendered to view
  app.get('/', (req, res)=>{
    let orders = [];
    let devoured =[];
    db.Burger.findAll({}).then((data)=>{
      for(let i=0; i<data.length; i++){
          if(data[i].dataValues.devoured === true){
              devoured.push(data[i].dataValues);
          }else{
              orders.push(data[i].dataValues);
          }
      }
      res.render('index', {orders:orders, devoured:devoured});
    })

    //pseudo code
    // app.put("/update/:id", (req, res)=>{
    //   db.Burger.findAll({where:{id:req.params.id}}).then((data)=>{
        
    //   })
    // })
  })
  // POST add burger data to DB list
  app.post('/burgers', function (req, res) {
    db.Burger.create({name:req.body.name}).then((newBurger)=>{console.log(newBurger)});
    res.end();
  });
  // UPDATE burgers in DB
  app.put('/burgers/:id', (req, res)=>{
    db.Burger.update({devoured:true}, {where: {id:req.params.id}}).then((data)=>{
      console.log(data);
      res.end();
    })
  })
}