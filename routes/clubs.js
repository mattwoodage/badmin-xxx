var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Club = require('../models/club');   //backend mongoose model

//routes here appended to /clubs  from top level app.js

// these are processed in order

router.get('/', function (req, res, next) {
	Club.find()
		.sort({name: 1})
		.exec(function(err, clubs) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: clubs
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

    	var club = new Club({
	    	name: req.body.name,
	    	description: req.body.description,
	    	adults: req.body.adults,
	    	juniors: req.body.juniors,
	    	members: req.body.members,
	    	website: req.body.website
	    });
	    club.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	// user.seasons.push(result);
	    	// user.save();
	    	res.status(201).json({
	    		message: 'Saved Club',
	    		obj: result  /// saved league from db - id etc.
	    	});
	    });

});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Club.findById(req.params.id, function(err, club) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!club) {
			return res.status(500).json({
    			title: 'No club found!',
    			error: {message: 'Club not found'}
    		});
		}
		club.name = req.body.name;
		club.description = req.body.description;
	    club.adults = req.body.adults;
	    club.juniors = req.body.juniors;
	    club.members = req.body.members;
	    club.website = req.body.website;

		club.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Club updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Club.findById(req.params.id, function(err, club) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!club) {
			return res.status(500).json({
    			title: 'No club found!',
    			error: {message: 'Club not found'}
    		});
		}
		club.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Club deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
