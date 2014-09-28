module.exports = {

	extend : function(objOne,objTwo){
		var keysOfTwo = Object.keys(objTwo);
		var length = keysOfTwo.length;
		for(var i = 0 ; i<length; i++){
			if(typeof keysOfTwo[i] === 'function') {
					console.log('cannot extend functions');
					throw new Error('Cannot extend functions');
				}

				objOne[keysOfTwo[i]] = typeof objTwo[keysOfTwo[i]] === 'object' ? JSON.parse(JSON.stringify(objTwo[keysOfTwo[i]])) : objTwo[keysOfTwo[i]];

			}
		return objOne;
	}
}

