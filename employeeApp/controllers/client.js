const express = require('express');
const router = express.Router();
const path = require('path')
// const static_dirname = 'C:/Users/AJIT KUMAR PANIGRAHI/Documents/BizAcuity/training Asssignments/employeeApp/static';
router.get('/home', async (req, res) => {
    try {
        const filepath = path.join(__dirname, '../static/employee.html');
        res.sendFile(filepath);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

router.get('/createEmployee', async (req, res) => {
    try {
        const filepath = path.join(__dirname, '../static/create_employee.html');
        res.sendFile(filepath);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

module.exports = router;