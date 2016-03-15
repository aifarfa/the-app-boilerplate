'use strict';

const expect = require('chai').expect;
const Sample = require('../../../public/scripts/sample/sample-controller').controller;

describe('sample spec', () => {

  let ctrl;
  let $timeout;

  beforeEach(() => {
    angular.mock.module('myApp');
    angular.mock.inject(($injector) => {
      let $q = $injector.get('$q');
      $timeout = $injector.get('$timeout');
      ctrl = new Sample($q, $timeout);
    });
  });

  it('should do async', () => {
    expect(ctrl.doAsync()).to.be.ok;
  });

  it('should return promise', (done) => {
    ctrl.doAsync(1000).then((result) => {
      expect(result).to.be.ok;
      done();
    });
    $timeout.flush(1000);
  });
});
