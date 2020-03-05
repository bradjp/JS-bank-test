function deposit(account, amount){
  if (amount < 0) {
    console.log('Please enter a positive number.');
    return account.balance;
  }
  var new_balance = account.balance += amount
  recordDeposit(account, amount, new_balance)
}

function withdraw(account, amount) {
  if (amount > account.balance || amount < 0) {
    
    return account.balance
  }
  var new_balance = account.balance -= amount
  recordWithdrawal(amount, new_balance, account);
}

function recordWithdrawal(amount, new_balance, account) {
  var today = (new Date).toLocaleDateString();
  var transaction = { date: today, deposit: 0, withdrawal: amount, balance: new_balance };
  recordTransaction(account, transaction)
}

function recordDeposit(account, amount, new_balance) {
  var today = (new Date).toLocaleDateString()
  var transaction = {date: today, deposit: amount, withdrawal: 0, balance: new_balance }
  recordTransaction(account, transaction)
}

function recordTransaction(account, transaction) {
  account.transaction_history.push(transaction);
}