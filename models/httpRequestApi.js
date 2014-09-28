var http = require('http');
var querystring = require('querystring');
var Q = require('q');
var options = {
	'method':'POST',
	'hostname':'127.0.0.1',
	'path':'/node_project/profile.json',
	'port':80,
	'headers':{
		'Content-type':'application/x-www-form-urlencoded'
	}

}


module.exports = {
	makeRequest : function(op,data,fn){
		var op = op || options,
				chk = '',
				def = Q.defer();

		var req = http.request(op,function(res){
			res.on('data',function(chunk){
				chk += chunk;
			});

			res.on('end',function(){
				def.resolve(chk);
			});

			res.on('error',function(e){
				def.reject(e);
			});

		});

		req.on('error',function(e){
			def.reject(e);
		});

		req.end(querystring.stringify(data));
		return def.promise;
	}
}


