var express = require('express');
var router = express.Router();
var path = require('path');
var cors = require('cors');
var passport = require('passport');
var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var db = require('./config/database');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());

mongoose.connection.on('connected',() => {
    console.log('connected to database' + db.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('database err '+err);
});

app.use('/', routes);
app.use('/users',users);

var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port);
});

module.exports = router;