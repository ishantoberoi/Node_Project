var express = require('express');
var router = express.Router();
var callPostApiModel = require('../models/callPostApiModel.js').callPostApiModel;


router.all('/',function(req,res,next){
	console.log(req.body); // req.body is an object
	var callPostApi = new callPostApiModel({}),
			callPostApiResponse = callPostApi.getData(req.body);
			callPostApiResponse
				.then(function(respData){
					res.json(JSON.parse(respData));
				},function(e){
					throw new Error('Error in CallPostCtrl'+e);
				})
				.done(null,function(e){
					console.log('Error in CallPostCtrl '+e);
				});

});

module.exports = router;