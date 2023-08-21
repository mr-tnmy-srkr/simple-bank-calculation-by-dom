document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountStr = depositField.value;

  if (isNaN(newDepositAmountStr) || newDepositAmountStr === "") {
    alert("Please provide a valid number");
    depositField.value = "";
    return;
  }
  const newDepositAmount = getInputFieldValueById("deposit-field");
  const previousDepositTotal = getTextElementValueById("deposit-total");
  const newDepositTotal = parseFloat(
    (previousDepositTotal + newDepositAmount).toFixed(2)
  ).toFixed(2);
  setTextElementValueById("deposit-total", newDepositTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = parseFloat(
    (previousBalanceTotal + newDepositAmount).toFixed(2)
  ).toFixed(2);
  setTextElementValueById("balance-total", newBalanceTotal);
});
