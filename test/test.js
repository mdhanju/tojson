var TJ = require('../lib/toJson')

var input = 'test/input/input.txt';
var output = 'test/output/output.json';

TJ.convertToJson(input, output, function(err){
	if (err) throw err;
})

