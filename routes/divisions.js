var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Division = require('../models/division');   //backend mongoose model

//routes here appended to /division  from top level app.js

// these are processed in order

router.get('/', function (req, res, next) {
	Division.find()
		.sort('order')
		.populate('format')
		.exec(function(err, divisions) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: divisions
	    	});
		});;
})

router.get('/:season', function (req, res, next) {
	Division.find({season:req.params.season})
		.sort('order')
		.populate('format')
		.exec(function(err, divisions) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: divisions
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

    	var division = new Division({
	    	name: req.body.name,
	    	format: req.body.format,
	    	season: req.body.season,
	    	order: req.body.order
	    });
	    division.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	// user.divisions.push(result);
	    	// user.save();
	    	res.status(201).json({
	    		message: 'Saved Division',
	    		obj: result  /// saved division from db - id etc.
	    	});
	    });

});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Division.findById(req.params.id, function(err, division) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!division) {
			return res.status(500).json({
    			title: 'No division found!',
    			error: {message: 'Division not found'}
    		});
		}
		division.name = req.body.name;
		division.format = req.body.format;
		division.season = req.body.season;
		division.order = req.body.order;
		division.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Division updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Division.findById(req.params.id, function(err, division) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!division) {
			return res.status(500).json({
    			title: 'No division found!',
    			error: {message: 'Division not found'}
    		});
		}
		division.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Division deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
