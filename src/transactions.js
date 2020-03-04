function deposit(account, amount){
  if (amount < 0) {
    return account.balance
  }
  
  return account.balance += amount
}