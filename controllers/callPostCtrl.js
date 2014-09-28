var express = require('express');
var router = express.Router();


var responseJson = {
		resp :{
			'name':'Express',
			'type':'GET'
		}
	}

router.all('/',function(req,res,next){
	res.json(responseJson);
});

module.exports = router;