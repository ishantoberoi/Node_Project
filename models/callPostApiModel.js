var oojs = require('../utils/oojs.js');
var baseApiModel = require('./apimodel.js').BaseApi;
var libFunctions = require('../utils/libFunctions.js');
var options = {
	'path':'/node_project/profile.json',
	'port':80,
	'method':'POST',
	'hostname':'127.0.0.1',
	'headers' : {
		'Content-type':'application/x-www-form-urlencoded'
	}
}

function callPostApiModel(reqOptions){
	reqOptions = libFunctions.extend(options,reqOptions);
	baseApiModel.call(this,reqOptions);
}

// nheriting from API model for getData function
oojs.inherit(baseApiModel,callPostApiModel);

exports.callPostApiModel = callPostApiModel;