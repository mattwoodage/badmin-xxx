var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Format = require('../models/format');   //backend mongoose model

//routes here appended to /format  from top level app.js

// these are processed in order

router.get('/', function (req, res, next) {
	Format.find()
		.exec(function(err, formats) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: formats
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

    	var format = new Format({
	    	name: req.body.name,
	    	type: req.body.type,
	    	orderOfPlay: req.body.orderOfPlay,
	    	numRubbers: req.body.numRubbers,
	    	numGames: req.body.numGames
	    });
	    format.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	// user.leagues.push(result);
	    	// user.save();
	    	res.status(201).json({
	    		message: 'Saved Format',
	    		obj: result  /// saved league from db - id etc.
	    	});
	    });

});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Format.findById(req.params.id, function(err, format) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!format) {
			return res.status(500).json({
    			title: 'No format found!',
    			error: {message: 'Format not found'}
    		});
		}
		format.name = req.body.name;
		format.url = req.body.type;
		format.orderOfPlay = req.body.orderOfPlay;
		format.numRubbers = req.body.numRubbers;
		format.numGames = req.body.numGames;
		format.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Format updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Format.findById(req.params.id, function(err, format) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!format) {
			return res.status(500).json({
    			title: 'No format found!',
    			error: {message: 'Format not found'}
    		});
		}
		format.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Format deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
