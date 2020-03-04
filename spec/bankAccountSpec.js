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
      var today = (new Date).toLocaleString().slice(0,10)
      deposit(ac, 10)
      expect(ac.transaction_history.length).toEqual(1);
      expect(ac.transaction_history[0]).toEqual({date: today, deposit: 10, withdrawal: 0, balance: 10});
    })
  })
})
