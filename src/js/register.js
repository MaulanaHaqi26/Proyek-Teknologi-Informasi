function redirectToLogin() {
    window.location.href = "login.html"; // Redirects to register.html
}
// Step 2: Add an event listener to the button
document.getElementById("login_button").addEventListener("click", redirectToLogin);

// Step 2: Add an event listener to the button
document.getElementById("btn-Regis").addEventListener("click", redirectToRegister);


