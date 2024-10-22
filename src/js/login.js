function redirectToRegister() {
    window.location.href = "register.html"; // Redirects to register.html
}

// Step 2: Add an event listener to the button
document.getElementById("btn-ToRegis").addEventListener("click", redirectToRegister);

// function redirectToMain() {
//     window.location.href = "main.html"; // Redirects to register.html
// }

// // Step 2: Add an event listener to the button
// document.getElementById("login_button").addEventListener("click", redirectToMain);

document.getElementById("login_button").addEventListener("click", function () {
    const username = document.getElementById("username").value; 

    const password = document.getElementById("password").value;

    if (username === 'admin' && password === 'succes123') {
        window.location.href = "main.html";
    } else {
        // Handle incorrect login (e.g., display error message)
        alert("Invalid username or password.");
    }
});