var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;