document.getElementById("btn-withdraw").addEventListener("click", function () {
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    const previousWithdrawTotal = getTextElementValueById("withdraw-total");
    const newWithdrawTotal = parseFloat( (previousWithdrawTotal + newWithdrawAmount).toFixed(2));
    setTextElementValueById("withdraw-total",newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = parseFloat( (previousBalanceTotal - newWithdrawAmount).toFixed(2))
    setTextElementValueById("balance-total",newBalanceTotal);
  
});