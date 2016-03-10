'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const sample = require('../../services/sample');

describe('sample', () => {

  let resp;

  beforeEach(() => {
    resp = {
      send: sinon.spy()
    };
  });

  it('defined a function', () => {
    expect(sample.who).to.be.a('function');
  });

  it('should call resp.send with status 200', () => {
    const context = {
      'user': {
        'uuid': 'aaa'
      }
    };
    sample.who(context, null, null, resp);
    expect(resp.send.calledWith(200)).to.be.ok;
  });
});
