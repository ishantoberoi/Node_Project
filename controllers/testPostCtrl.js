var express = require('express');
var router = express.Router();

router.all('/',function(req,res,next){
	//console.log(req.body);
	res.render('testPost',{});
});

module.exports = router;