const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;



const mysql = require('mysql');
const cors = require('cors')
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
var routes = require('./routes/routes.js'); //importing route
routes(app); //register the route