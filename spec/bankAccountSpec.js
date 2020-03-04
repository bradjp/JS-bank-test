'use strict';

describe('Bank Account', function() {

  var ac;

  beforeEach(function(){
    ac = new Account();
  })

  describe('Create new account', function() {
    it('Initializes with a zero balance', function() {
      expect(ac.getBalance()).toEqual(0);
    });
  });
  describe('Transaction history', function(){
    it('Records a deposit', function(){
      deposit(ac, 10)
      expect(ac.transaction_history.length).toEqual(1);
    })
  })
})
