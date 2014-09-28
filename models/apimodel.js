var http = require('./httpRequestApi.js');
var libFunctions = require('../utils/libFunctions');
var Q = require('q');
var options = {
	'path':'/node_project/profile.json',
	'port':80,
	'method':'POST',
	'hostname':'127.0.0.1',
	'headers' : {
		'Content-type':'application/x-www-form-urlencoded'
	}
}


function BaseApi(reqOptions){
	this.options = libFunctions.extend(options,reqOptions);
}

BaseApi.prototype.getData = function(data,fn){
	var def = Q.defer(),
			obj = this;

	var retPromise = http.makeRequest(null,data,fn);
		retPromise
			.then(function(respData){
				var formatDataResp = obj.formatViewData(respData);
				def.resolve(formatDataResp);
			},function(e){
				def.reject(e);
			})
			.done(null,function(e){
				def.reject(e);
			});
			
	return def.promise;
}


BaseApi.prototype.formatViewData = function(data){
	var obj = {};
	try{
		obj = JSON.parse(data);
	}
	catch(e){
		console.log('Unable to parse data to JSON');
		throw new Error('Unable to parse data to JSON');
	}
	return data;
}

exports.BaseApi = BaseApi;