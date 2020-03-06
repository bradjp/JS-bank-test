'use strict';

describe('Statement Printer', function() {

  var ac;
  var today;

  beforeEach(function(){
    ac = new Account();
    today = (new Date).toLocaleString().slice(0,10)
  })

  describe('Print statement', function() {
    it('Prints an account statement', function() {
      deposit(ac, 1000)
      deposit(ac, 2000)
      withdraw(ac, 500)
      expect(printStatement(ac)).toEqual(
        `date || credit || debit || balance\n${today} || || 500.00 || 2500.00\n${today} || 2000.00 || || 3000.00\n${today} || 1000.00 || || 1000.00`
        )
    });
  });
})
