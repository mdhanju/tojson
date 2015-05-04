
#Convert txt, xls,csv etc files to JSON files


#USAGE

var TJ = require('../lib/toJson')

var input = 'input/GeoCityLocations.csv';
var output = 'output/GeoCityLocations.json';

TJ.convertToJson(input, output, function(err){
	if (err) throw err;
})



#To run test 
#cd tojson    npm test