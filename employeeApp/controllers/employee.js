const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');

// Define a route to create a new employee
router.post('/employee', async (req, res) => {
  try {
    // console.log(req.body);
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Define a route to get all employees
router.get('/employee', async (req, res) => {
  try {
    const department = req.query.dept;
    const order = req.query.sort ? req.query.sort : "asc";
    if(!department){
      const employees = await Employee.find().sort({name: order});
      res.status(200).send(employees);
    }
    else{
      const employees = await Employee.find({department : department}).sort({name: order});
      res.status(200).send(employees);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define a route to get an employee by ID
router.get('/employee/getone', async (req, res) => {
  try {
    const id = req.query.id;
    const name = req.query.name;
    if(id || name){
      if(!id){
        const employee = await Employee.findOne({name : name});
        if (!employee) {
          return res.status(404).send({message: "employee not found"});
        }
        res.status(200).send(employee);
      }
      else{
        const employee = await Employee.findOne({employeeId : id});
        if (!employee) {
          return res.status(404).send({message: "employee not found"});
        }
        res.status(200).send(employee);
      }
    }
    else{
      return res.status(404).send({message: "employee not found"});
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define a route to update an employee by ID
router.patch('/employee/:id', async (req, res) => {
  try {
    if(!req.body.employeeId || req.params.id == req.body.employeeId ){
      const employee = await Employee.findOneAndUpdate({employeeId : req.params.id}, req.body, { new: true, runValidators: true });
      if (!employee) {
        return res.status(404).send({message: "employee not found"});
      }
      res.status(200).send(employee);
    }
    else{
      res.status(404).send({message:"Can't update the employeeId"});
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// Define a route to delete an employee by ID
router.delete('/employee/:id', async (req, res) => {
  try {
    const employee = await Employee.findOne({employeeId : req.params.id});
    if(employee && !(employee.isActive)){
      const response = await Employee.findOneAndDelete({employeeId : req.params.id});
      
      res.status(200).send(response);
    }
    else{
      if (!employee) {
        return res.status(404).send({message: "employee not found"});
      }
      res.status(404).send({message: "employee is active now, can't delete."})
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
