var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Team = require('../models/team');   //backend mongoose model

//routes here appended to /seanso  from top level app.js

// these are processed in order

router.get('/', function (req, res, next) {
	Team.find()
		.exec(function(err, teams) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: teams
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

    	var team = new Team({
	    	suffix: req.body.suffix,
	    	club: req.body.club,
	    	division: req.body.division
	    });
	    team.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	// user.seasons.push(result);
	    	// user.save();
	    	res.status(201).json({
	    		message: 'Saved Team',
	    		obj: result  /// saved league from db - id etc.
	    	});
	    });

});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Team.findById(req.params.id, function(err, team) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!team) {
			return res.status(500).json({
    			title: 'No team found!',
    			error: {message: 'Team not found'}
    		});
		}
		team.suffix =req.body.suffix;
	    team.club = req.body.club;
	    team.division = req.body.division;
		team.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Team updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Team.findById(req.params.id, function(err, team) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!team) {
			return res.status(500).json({
    			title: 'No team found!',
    			error: {message: 'Team not found'}
    		});
		}
		team.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Team deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
