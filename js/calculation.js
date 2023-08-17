document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountStr = depositField.value;
  const newDepositAmount = parseFloat(parseFloat(newDepositAmountStr).toFixed(2));
  depositField.value = "";

  if(isNaN(newDepositAmount)){
    alert('Please provide a valid number');
    return;
  }

  const depositTotalElement = document.getElementById("deposit-total"); 
  const newPreviousTotalStr = depositTotalElement.innerText;
  const newPreviousDepositTotal = parseFloat(newPreviousTotalStr);
  const currentDepositTotal = parseFloat((newDepositAmount + newPreviousDepositTotal).toFixed(2));

  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalStr = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

  const currentBalanceTotal = parseFloat((previousBalanceTotal + newDepositAmount).toFixed(2));
  balanceTotalElement.innerText = currentBalanceTotal;

});
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountStr = withdrawField.value;
  const newWithdrawAmount = parseFloat(parseFloat(newWithdrawAmountStr).toFixed(2));

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

  const currentWithdrawTotal = parseFloat(parseFloat(previousWithdrawTotal + newWithdrawAmount).toFixed(2));
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const currentBalanceTotal = parseFloat(parseFloat(previousBalanceTotal - newWithdrawAmount).toFixed(2));
  balanceTotalElement.innerText = currentBalanceTotal;

});

document.getElementById('btn-logout').addEventListener("click", function (){
  window.location.href = 'index.html';
});
