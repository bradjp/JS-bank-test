'use strict';

describe('Bank Account', function() {

  describe('Create new account', function() {
    it('Initializes with a zero balance', function() {
      var ac = new Account;
      expect(ac.getBalance()).toEqual(0);
    });
  });
})
