const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;  // Replace with your desired port

// Replace with your actual MongoDB connection string
const DB_URI = 'mongodb+srv://ajitpanigrahi:MXwsskX5yGqr5nxr@cluster0.ou7jgtm.mongodb.net/Employee_Management?retryWrites=true&w=majority&appName=Cluster0';
const employeeRoutes = require('./controllers/employee');
const clientRoutes = require('./controllers/client');

mongoose.connect(DB_URI)
    .then(() => {
        console.log(`connected to the db`);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });
// Middleware to parse JSON bodies
app.use(express.json());

// Use the employee routes
app.use('/api', employeeRoutes);

app.use('/', clientRoutes);
// app.get('/', async(req,res) => {
//     res.send('hello');
// })
