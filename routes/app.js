var express = require('express');
var session = require('express-session');
var router = express.Router();
var jwt = require('jsonwebtoken');

var app = express();
var League = require('../models/league');
var Season = require('../models/season');

router.get('/', function (req, res, next) {

	var leagueDomain = '';
    var seasonYear = '';

    var host = req.headers.host;
    var path = req.baseUrl;

	if (host.indexOf('localhost')!=-1) {
		leagueDomain = host.split('.')[0]
	}
	else {
		leagueDomain = host.split('.')[1]  //check this
	}
	seasonYear = path.split('/')[1]

	var season;
	var league;
	var seasons;

	app.set('matt', 'MATTHEW WOODAGE')

	console.log('[[['+app.get('matt')+']]]')

	jwt.verify('token', 'secret', function(err, decoded) {
		if (err) {
    		console.log('***** NOT AUTHENTICATED ******')
    	}
    })

	League.findOne({domain: leagueDomain.toLowerCase()}, function(err, _league) {
		if (err) console.log("error matching league")
		if (!_league) {
			console.log("league not found: ", leagueDomain)
			render();
		}
		else {
			league = _league;
			season = Season.findOne({league: league.id, name: seasonYear}, function(err, _season) {
				if (err) console.log("error matching season")
				if (!_season) console.log("season not found: ", seasonYear)
				season = _season;
				seasons = Season.find({league: league.id}, function(err, _seasons) {
					seasons = _seasons;
					render();
				})
			})
		}
	})

	function render() {
		res.render('index', {
			currentLeague: JSON.stringify(league),
			currentSeason: JSON.stringify(season),
			seasons: JSON.stringify(seasons)
		});
	}
});

module.exports = router;
