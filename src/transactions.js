function deposit(account, amount){
  if (amount < 0) {
    return account.balance
  }

  var new_balance = account.balance += amount

  var today = (new Date).toLocaleDateString()
  var transaction = {date: today, deposit: amount, withdrawal: 0, balance: new_balance }
  account.transaction_history.push(transaction)
  new_balance
}

function withdraw(account, amount) {
  if (amount > account.balance || amount < 0) {
    return account.balance
  }
  account.balance -= amount
}