'use strict';

describe('Bank Account', function() {

  var ac;
  var today;

  beforeEach(function(){
    ac = new Account();
    today = (new Date).toLocaleString().slice(0,10);
  })

  describe('Create new account', function() {
    it('Initializes with a zero balance', function() {
      expect(ac.getBalance()).toEqual(0);
    });
  });
  describe('Account history', function(){
    it('Records a deposit', function(){
      deposit(ac, 10)
      expect(ac.transaction_history.length).toEqual(1);
      expect(ac.transaction_history[0]).toEqual({date: today, deposit: 10, withdrawal: 0, balance: 10});
    })
    it('Records a withdrawal', function(){
      deposit(ac, 10)
      withdraw(ac, 10)
      expect(ac.transaction_history.length).toEqual(2);
      expect(ac.transaction_history[1]).toEqual({date: today, deposit: 0, withdrawal: 10, balance: 0});
    })
  })
})
