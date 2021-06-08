const expect = require('chai').expect;
const should = require('chai').should();
const assert = require('chai').assert;

describe('Some tests', () => {
  it('is true', () => {
    let result = true;

    // expect(result).to.be.true;
    // result.should.to.be.true
    assert.isTrue(result);
  })
})