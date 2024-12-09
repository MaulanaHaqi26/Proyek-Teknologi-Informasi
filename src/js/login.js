const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-main");
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click',
    function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });

loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const isValidEmail = validateEmail(emailInput.value);
    const isValidPassword = validatePassword(passwordInput.value);

    if (isValidEmail && isValidPassword) {
        // Login successful, redirect to main.html
        window.location.href = "main.html";
    } else {
        if (!isValidEmail) {
            emailInput.classList.add("error");
        } else {
            emailInput.classList.remove("error");
        }
        if (!isValidPassword) {
            passwordInput.classList.add("error");
        } else {
            passwordInput.classList.remove("error");
        }
    }
});

function redirectToRegister() {
    window.location.href = "register.html"; 
}
document.getElementById("btn-ToRegis").addEventListener("click", redirectToRegister);


function validateEmail(email) {
    return email.trim() !== "" && email.includes("@");
}

function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~-]).{8,}$/;
    return regex.test(password);
}