const express = require('express');
const cors = require('cors');
const app = express();






app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', require('./routes/contactRoutes'));

// Serve generated certificate PDF files
const path = require('path');






module.exports = app;
