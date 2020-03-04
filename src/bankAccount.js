var Account = function() {
  this.balance = 0
  this.transaction_history = []
}

Account.prototype.getBalance = function() {
  return this.balance
}