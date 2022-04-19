const { expect } = require('chai');
const formatFullname = require('../formatFullname');

describe('FormatFullname', () => {

  it('should return an error if there is no arg', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('should return an error if arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if data format is incorrect', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });

  it('should return correctly formatted text', () => {
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
  });

});