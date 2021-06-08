const expect = require('chai').expect;
const utilities = require('./utilities')

describe('utilities', () => {
  describe('getArgument', () => {
    it('should return the second word when asked for firts parameter', () => {
      let firstArg =  utilities.getArgument("apple banana mango", 1);
      expect(firstArg).to.eq("banana")
    })

    it('should return undefined when asked for parameter does not exist', () => {
      let secondArg =  utilities.getArgument("apple banana mango", 3);
      expect(secondArg).to.be.undefined
    })

    it('should return undefined when asked for parameter from a string with only 1 word', () => {
      let secondArg =  utilities.getArgument("applegit", 3);
      expect(secondArg).to.be.undefined
    })
  })
})
