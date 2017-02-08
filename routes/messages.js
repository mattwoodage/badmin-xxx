var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Message = require('../models/message');   //backend mongoose model
var User = require('../models/user');

//routes here appended to /message  from top level app.js

// these are processed in order 

router.get('/', function (req, res, next) {
	Message.find()
		.populate('user', 'firstName')
		.exec(function(err, messages) {
			if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	res.status(201).json({
	    		message: 'Success',
	    		obj: messages
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
	User.findById(decoded.user._id, function(err, user) {
		if (err) {
    		return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
    	}
    	var message = new Message({
	    	content: req.body.content,
	    	user: user
	    });
	    message.save(function(err, result) {
	    	if (err) {
	    		return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
	    	user.messages.push(result);
	    	user.save();
	    	res.status(201).json({
	    		message: 'Saved message',
	    		obj: result  /// saved message from db - id etc.
	    	});
	    });
	});
});

router.patch('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Message.findById(req.params.id, function(err, message) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!message) {
			return res.status(500).json({
    			title: 'No message found!',
    			error: {message: 'Message not found'}
    		});
		}
		if (message.user != decoded.user._id) {
			return res.status(401).json({
    			title: 'Not authenticated',
    			error: {message: 'Users do not match'}
    		});
		}
		message.content = req.body.content;
		message.save(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Message updated',
    			error: result
    		});
		})
	})
})

router.delete('/:id', function (req, res, next) {

	var decoded = jwt.decode(req.query.token);

	Message.findById(req.params.id, function(err, message) {
		if (err) {
			return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});
		}
		if (!message) {
			return res.status(500).json({
    			title: 'No message found!',
    			error: {message: 'Message not found'}
    		});
		}
		if (message.user != decoded.user._id) {
			return res.status(401).json({
    			title: 'Not authenticated',
    			error: {message: 'Users do not match'}
    		});
		}
		message.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
	    			title: 'An error occurred',
	    			error: err
	    		});
	    	}
			res.status(200).json({
    			title: 'Message deleted',
    			error: result
    		});
		})
	})
});


module.exports = router;
