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
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     console.log('clicked');
// })