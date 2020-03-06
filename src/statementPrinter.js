function printStatement(account) {

  const statementHeader = "date || credit || debit || balance\n"
  const statementBody = getStatementBody(account)
  return statementHeader + statementBody
}

function getStatementBody(account) {
  var pad = ' || '
  var reverseTransactions = account.transactionHistory.reverse()
  var stringArray = reverseTransactions.map( entry => 
    (entry['date'] + pad + entry['deposit'] + pad + entry['withdrawal'] + pad + entry['balance']).replace('  ', ' '))
  return stringArray.join("\n")
}