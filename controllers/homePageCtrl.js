var express = require('express');
var router = express.Router();
var callPostCtrl = require('./callPostCtrl');
var testPostCtrl = require('./testPostCtrl');



router.get('/',function(req,res,next){
	res.render('home',{});
});

router.use('/callpost',callPostCtrl);
router.use('/testPost',testPostCtrl);

module.exports = router;