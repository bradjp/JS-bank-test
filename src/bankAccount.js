var Account = function() {
  this.balance = 0
  this.transactionHistory = []
}

Account.prototype.getBalance = function() {
  return this.balance
}