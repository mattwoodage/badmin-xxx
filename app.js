
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');
var leagueRoutes = require('./routes/leagues');
var seasonRoutes = require('./routes/seasons');
var divisionRoutes = require('./routes/divisions');
var formatRoutes = require('./routes/formats');
var venueRoutes = require('./routes/venues');
var clubRoutes = require('./routes/clubs');
var teamRoutes = require('./routes/teams');
var matchRoutes = require('./routes/matches');
var playerRoutes = require('./routes/players');
var userRoutes = require('./routes/user');

var League = require('./models/league');

var app = express();
mongoose.connect('localhost:27017/badmin');
//mongoose.connect('test-user:test-pw@ds145009.mlab.com:45009/badmin')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//CORS fix
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//the order of these is important.  more specific FIRST
app.use('/message', messageRoutes);
app.use('/league', leagueRoutes);
app.use('/season', seasonRoutes);
app.use('/division', divisionRoutes);
app.use('/format', formatRoutes);
app.use('/venue', venueRoutes);
app.use('/club', clubRoutes);
app.use('/team', teamRoutes);
app.use('/match', matchRoutes);
app.use('/player', playerRoutes);

app.use('/user', userRoutes);
app.use('/2016-17/home', appRoutes);
app.use('/2015-16/home', appRoutes);
app.use('/2014-15/home', appRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.redirect('/2016-17/home');
});

module.exports = app;
