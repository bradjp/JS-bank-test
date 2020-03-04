function deposit(account, amount){
  if (amount < 0) {
    return account.balance
  }

  return account.balance += amount
}

function withdraw(account, amount) {
  if (amount > account.balance || amount < 0) {
    return account.balance
  }

  return account.balance -= amount
}