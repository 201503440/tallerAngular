const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(cors({origin:'http://localhost:4200'}));

//mdiddleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
module.exports = app;