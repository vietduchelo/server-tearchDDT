var db = require('./db');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var config = require('./config');

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(allowCrossDomain);
app.use(config.BASE_URL + '/user', require('./routes/user.route')());
app.listen(3000);

console.log("Server is listening on port " + 3000)
