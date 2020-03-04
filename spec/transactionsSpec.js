'use strict';

describe('Transactions', function() {

  var ac;

  beforeEach(function() {
    ac = new Account();
  })

  describe('Make a deposit', function() {
    it('Can receive a deposit', function() {
      deposit(ac, 10);
      expect(ac.getBalance()).toEqual(10);
    });
    it('Cannot receive a negative deposit', function() {
      deposit(ac, -10);
      expect(ac.getBalance()).toEqual(0);
    });
  });
})
