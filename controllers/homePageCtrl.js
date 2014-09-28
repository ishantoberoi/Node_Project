var express = require('express');
var router = express.Router();
var callPostCtrl = require('./callPostCtrl');



router.get('/',function(req,res,next){
	res.render('home',{});
});

router.use('/callpost',callPostCtrl);

module.exports = router;