const City = require('./City');
const Continent = require('./Continent');
const Country = require('./Country');
const Professor = require('./Professor');
const Student = require('./Student');
const User = require('./User');
const Course = require('./Course');

Country.hasMany(User);
User.belongsTo(Country);


Country.hasMany(City);
City.belongsTo(Country);


Continent.hasMany(Country);
Country.belongsTo(Continent);


Professor.belongsToMany(Student, { through: "ProfessorsStudents" });
Student.belongsToMany(Professor, { through: "ProfessorsStudents" });


Course.belongsToMany(Student, { through: "CoursesStudents" });
Student.belongsToMany(Course, { through: "CoursesStudents" });
