document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;

    // get user password

    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value;

    if (emailValue == 'rahul@gmail.com' && passwordValue == 'rahulpaul007') {

        window.location.href = 'banking-site.html';
    }
})
