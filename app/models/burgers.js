// Create Burgers table for DB
module.exports = (sequelize, Datatypes)=>{
    let Burger = sequelize.define("Burger",
    {
        name:Datatypes.STRING,
        devoured:Datatypes.BOOLEAN
    });
    return Burger;
}