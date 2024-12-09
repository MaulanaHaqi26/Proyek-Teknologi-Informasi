const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click',
    function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
    });

function validateRegisterForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    // Validate first name
    if (firstName.trim() === "") {
        document.getElementById("firstNameError").textContent = "First name is required.";
        isValid = false;
    } else {
        document.getElementById("firstNameError").textContent = "";
    }

    // Validate last name
    if (lastName.trim() === "") {
        document.getElementById("lastNameError").textContent = "Last name is required.";
        isValid = false;
    } else {
        document.getElementById("lastNameError").textContent = "";
    }

    // Validate email
    if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Validate password
    if (password.trim() === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    } else if (!isValidPassword(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    return isValid;

}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function redirectToLogin() {
    window.location.href = "login.html";
}
document.getElementById("login_button").addEventListener("click", redirectToLogin);

