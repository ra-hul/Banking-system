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


    depositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('clicked');
})