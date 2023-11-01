const City = require('./City');
const Continent = require('./Continent');
const Country = require('./Country');
const User = require('./User');

Country.hasMany(User);
User.belongsTo(Country);


Country.hasMany(City);
City.belongsTo(Country);


Continent.hasMany(Country);
Country.belongsTo(Continent);
