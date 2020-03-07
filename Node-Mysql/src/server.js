const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

//mdiddleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
module.exports = app;