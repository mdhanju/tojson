var fs = require('fs');

var util = require('util');

module.exports = {
    convertToJson: function(input, output, callback) {
        fs.readFile(input, function(err, data) {
            if (err) throw err;
            var index = [];
            var str = '';
            var array = data.toString().split("\n");
            for (i in array) {
                var eachLine = array[i].split(",");
                var keyName = array[0].split(",");
                var obj = {};
                var key;
                var value;
                for (j in eachLine) {
                    key = keyName[j];
                    value = eachLine[j];
                    obj[key] = value;
                }
                index.push(obj);
            }
            try {
                str = JSON.stringify(index, null, 2) + '\n';
            } catch (err) {
                if (callback) return callback(err, null)
            }

            fs.writeFile(output, str, callback)
        });
    }
}
