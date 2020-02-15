// Create Burgers table for DB
module.exports = (sequelize, Datatypes) => {
    let Burger = sequelize.define("Burger",
        {
            id: {
                type: Datatypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Datatypes.STRING,
                allowNull: false,
            },
            devoured: {
                type: Datatypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
                //sequelizeDefault: false 
            }

        },{timestamps:false});
    return Burger;
}