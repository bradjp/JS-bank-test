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

  describe('Make a withdrawal', function() {
    it('Can handle a withdrawal', function() {
      deposit(ac, 100);
      withdraw(ac, 50);
      expect(ac.getBalance()).toEqual(50);
    });
    it('Cannot receive a negative withdrawal', function() {
      withdraw(ac, -10);
      expect(ac.getBalance()).toEqual(0);
    });
    it('Cannot receive a withdrawal if balance will be below zero', function() {
      withdraw(ac, 10);
      expect(ac.getBalance()).toEqual(0);
    });
  });
})
