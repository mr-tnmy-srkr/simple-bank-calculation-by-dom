document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountStr = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountStr);

  depositField.value = "";

  if(isNaN(newDepositAmount)){
    alert('Please provide a valid number');
    return;
  }

  const depositTotalElement = document.getElementById("deposit-total");
  const newPreviousTotalStr = depositTotalElement.innerText;
  const newPreviousDepositTotal = parseFloat(newPreviousTotalStr);
  const currentDepositTotal = newDepositAmount + newPreviousDepositTotal;

  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalStr = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

});
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountStr = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountStr);

  withdrawField.value = '';

  if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid number');
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalStr = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);


  
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalStr = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

  if(newWithdrawAmount > previousBalanceTotal){
    alert("sorry!! your current balance is less than you withdraw amount!");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

});
