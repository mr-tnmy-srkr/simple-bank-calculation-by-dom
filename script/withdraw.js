document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountStr = withdrawField.value;

  if (isNaN(newWithdrawAmountStr) || newWithdrawAmountStr === "") {
    alert("Please provide a valid number");
    withdrawField.value = "";
    return;
  }
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousBalanceTotal = getTextElementValueById("balance-total");

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("sorry!! your current balance is less than your withdraw amount!");
    return;
  }

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = parseFloat(
    (previousWithdrawTotal + newWithdrawAmount).toFixed(2)
  ).toFixed(2);
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const newBalanceTotal = parseFloat(
    (previousBalanceTotal - newWithdrawAmount).toFixed(2)
  ).toFixed(2);
  setTextElementValueById("balance-total", newBalanceTotal);
});
