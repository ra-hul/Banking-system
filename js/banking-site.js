document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmoutText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmoutText);

    // console.log(depositAmout);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepoitAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepoitAmount + newDepositAmount;



    depositTotal.innerText = newDepositTotal;


    // update acount balance

    const balanceTotal = document.getElementById('balance-total');


    const PreviousBalanceText = balanceTotal.innerText;
    const PreviousBalanceAmount = parseFloat(PreviousBalanceText);

    const TotalBalance = PreviousBalanceAmount + newDepositAmount;

    balanceTotal.innerText = TotalBalance;



    depositInput.value = '';
})

//  handle withdraw event handler
const withdrawTotal = document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;


    withdrawInput.value = '';

})