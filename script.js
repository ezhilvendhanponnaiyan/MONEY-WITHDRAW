function withdraw() {
  var withdrawAmount = parseFloat(
    document.getElementById('withdrawAmount').value
  );
  var currentBalance = parseFloat(
    document.getElementById('balance').textContent
  );

  if (isNaN(withdrawAmount)) {
    alert('Please enter a valid amount!');
    return;
  }

  if (withdrawAmount <= 0) {
    alert('Withdraw amount must be greater than zero!');
    return;
  }

  if (withdrawAmount <= currentBalance) {
    currentBalance -= withdrawAmount;
  } else {
    alert('Insufficient funds!');

    return;
  }

  document.getElementById('withdrawedamount').textContent =
    currentBalance - 2000;

  document.getElementById('balance').textContent = currentBalance.toFixed(2);

  document.getElementById('withdrawAmount').value = '';
}
