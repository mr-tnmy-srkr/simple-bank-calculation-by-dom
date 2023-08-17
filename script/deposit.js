document.getElementById("btn-deposit").addEventListener("click", function () {
    const newDepositAmount = getInputFieldValueById("deposit-field");
    const previousDepositTotal = getTextElementValueById("deposit-total");
    const newDepositTotal = parseFloat( (previousDepositTotal + newDepositAmount).toFixed(2));
    setTextElementValueById("deposit-total",newDepositTotal);

    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = parseFloat( (previousBalanceTotal + newDepositAmount).toFixed(2))
    setTextElementValueById("balance-total",newBalanceTotal);
  
});