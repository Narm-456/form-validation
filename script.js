function validateForm() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let valid = true;

    
    nameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    if (name === "" || name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long";
        nameError.style.display = "block";
        valid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
        valid = false;
    }

    
    if (password === "" || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        passwordError.style.display = "block";
        valid = false;
    }

    
    return valid;
}