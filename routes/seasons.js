var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Season = require('../models/season');   //backend mongoose model

//routes here appended to /seanso  from top level app.js

// these are processed in order

router.get('/', function (req, res, next) {
	Season.find()
		.sort({name: -1})
		.exec(function(err, seasons) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: seasons
	    	});
		});;
})

// this route will check if the user is authenticated.
// if they are not - it will give 401.
// otherwise it will call NEXT anad go on to process the next route.

router.use('/', function (req, res, next) {
	jwt.verify(req.query.token, 'secret', function(err, decoded) {
		if (err) {
    		return res.status(401).json({
    			title: 'Not authenticated',
    			error: err
    		});
    	}
    	next();
	})
});

router.post('/', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

    	var season = new Season({
	    	name: req.body.name,
	    	status: req.body.status,
	    	league: req.body.league
	    });
	    season.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	// user.seasons.push(result);
	    	// user.save();
	    	res.status(201).json({
	    		message: 'Saved Season',
	    		obj: result  /// saved league from db - id etc.
	    	});
	    });

});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Season.findById(req.params.id, function(err, season) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!season) {
			return res.status(500).json({
    			title: 'No season found!',
    			error: {message: 'Season not found'}
    		});
		}
		season.name = req.body.name;
		season.status = req.body.status;
		season.league = req.body.league;
		season.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Season updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Season.findById(req.params.id, function(err, season) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!season) {
			return res.status(500).json({
    			title: 'No season found!',
    			error: {message: 'Season not found'}
    		});
		}
		season.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Season deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
