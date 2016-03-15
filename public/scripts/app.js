var angular = require('angular');
var sample = require('./sample/sample-controller').default;

angular.module('myApp', []);
angular.module('myApp').controller(sample);
