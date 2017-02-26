var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var League = require('../models/league');   //backend mongoose model

//routes here appended to /league  from top level app.js

// these are processed in order

router.get('/', function (req, res, next) {
	League.find()
		.exec(function(err, leagues) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		league: 'Success',
	    		obj: leagues
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

    	var league = new League({
	    	name: req.body.name,
	    	url: req.body.url,
	    	status: req.body.status
	    });
	    league.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	// user.leagues.push(result);
	    	// user.save();
	    	res.status(201).json({
	    		league: 'Saved League',
	    		obj: result  /// saved league from db - id etc.
	    	});
	    });

});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	League.findById(req.params.id, function(err, league) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!league) {
			return res.status(500).json({
    			title: 'No league found!',
    			error: {league: 'League not found'}
    		});
		}
		league.name = req.body.name;
		league.url = req.body.url;
		league.status = req.body.status;
		league.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'League updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	League.findById(req.params.id, function(err, league) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!league) {
			return res.status(500).json({
    			title: 'No league found!',
    			error: {league: 'League not found'}
    		});
		}
		league.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'League deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
