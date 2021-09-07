document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmout = depositInput.value;
    // console.log(depositAmout);

    const depositTotal = document.getElementById('deposit-total');

    depositTotal.innerText = depositAmout;

    depositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('clicked');
})