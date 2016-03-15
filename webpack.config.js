const path = require('path');
const dir = path.resolve(__dirname);

module.exports = {
  context: dir + '/public',
  entry: './scripts/app.js',
  output: {
    path: dir + '/public',
    filename: 'bundle.js'
  }
};
