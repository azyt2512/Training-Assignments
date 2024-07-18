const mongoose = require('mongoose');

// Define the schema
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  DOB: {
    type: Date,
    required: true
  },
  department: {
    type: String,
    required: true,
    enum: ['Software Engineer', 'Data Analytics Engineer', 'Manager', 'SDE']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  employmentType: {
    type: String,
    required: true,
    enum: ['fulltime', 'parttime', 'contract']
  }
});

// Create the model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;