const fs = require('fs');
const path = require('path');

module.exports = function(filepath)
{
    let sortsDir = path.join(__dirname, filepath);
    let algos = [];
    fs.readdirSync(sortsDir).forEach(file=>algos.push(require(sortsDir+'/'+file)));
}