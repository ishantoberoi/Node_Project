var express = require('express');
var router = express.Router();

	var responseJson = {
		resp :{
			'name':'Express',
			'type':'GET'
		}
	}



router.get('/',function(req,res,next){
	res.render('home.ejs',responseJson);
});


router.post('/',function(req,res,next){
	res.json(responseJson);
});

module.exports = router;