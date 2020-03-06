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

function recordDeposit(account, amount, new_balance) {
  var today = (new Date).toLocaleDateString()
  var amount = transactionToString(amount)
  var new_balance = transactionToString(new_balance)

  var transaction = {date: today, deposit: amount, withdrawal: '', balance: new_balance }
  recordTransaction(account, transaction)
}

function recordWithdrawal(amount, new_balance, account) {
  var today = (new Date).toLocaleDateString();
  var amount = transactionToString(amount)
  var new_balance = transactionToString(new_balance)
  var transaction = { date: today, deposit: '', withdrawal: amount, balance: new_balance };
  recordTransaction(account, transaction)
}

function recordTransaction(account, transaction) {
  account.transactionHistory.push(transaction);
}

function transactionToString(amount) {
  if (amount % 1 === 0) {
    return amount.toString() + '.00'
  } else if ((amount*10) % 1 === 0) {
    return amount.toString() + '0'
  } else {
    return amount.toString()
  }
}