document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;

    // get user password

    const passwordField = document.getElementById("user-password");
    const passwodValue = passwordField.value;

    if (emailValue == "rahul@gmail.com" && passwodValue == "rahulpaul007") {

        window.location.href = 'banking-site.html'
    }
})
