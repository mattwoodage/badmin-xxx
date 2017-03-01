var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Venue = require('../models/venue');   //backend mongoose model

//routes here appended to /seanso  from top level app.js

// these are processed in order

router.get('/', function (req, res, next) {
	Venue.find()
		.sort({name: -1})
		.exec(function(err, venues) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: venues
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

    	var venue = new Venue({
	    	name: req.body.name,
	    	type: req.body.type,
	    	address_1: req.body.address_1,
	    	address_2: req.body.address_2,
	    	address_3: req.body.address_3,
	    	town: req.body.town,
	    	county: req.body.county,
	    	postcode: req.body.postcode,
	    	coodinates: req.body.coordinates
	    });
	    venue.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	// user.seasons.push(result);
	    	// user.save();
	    	res.status(201).json({
	    		message: 'Saved Venue',
	    		obj: result  /// saved league from db - id etc.
	    	});
	    });

});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Venue.findById(req.params.id, function(err, venue) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!venue) {
			return res.status(500).json({
    			title: 'No venue found!',
    			error: {message: 'Venue not found'}
    		});
		}
		venue.name = req.body.name;
    	venue.type = req.body.type;
    	venue.address_1 = req.body.address_1;
    	venue.address_2 = req.body.address_2;
    	venue.address_3 = req.body.address_3;
    	venue.town = req.body.town;
    	venue.county = req.body.county;
    	venue.postcode = req.body.postcode;
    	venue.coodinates = req.body.coordinates;

		venue.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Venue updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Venue.findById(req.params.id, function(err, venue) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!venue) {
			return res.status(500).json({
    			title: 'No venue found!',
    			error: {message: 'Venue not found'}
    		});
		}
		venue.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Venue deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
