'use strict';

var SampleController = function ($q, $timeout) {

  this.doAsync = function (time) {
    var deferred = $q.defer();

    $timeout(function () {
      deferred.resolve(true);
    }, time);

    return deferred.promise;
  };
};

module.exports.controller = SampleController;
module.exports.default = ['$q', '$timeout', SampleController];
