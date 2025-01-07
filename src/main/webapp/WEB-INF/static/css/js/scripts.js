// Script for client-side form validation
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Validate login form before submission
    loginForm.addEventListener("submit", (e) => {
        let valid = true;
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "") {
            showError(usernameInput, "Username is required");
            valid = false;
        } else {
            clearError(usernameInput);
        }

        if (password === "") {
            showError(passwordInput, "Password is required");
            valid = false;
        } else {
            clearError(passwordInput);
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission if invalid
        }
    });

    // Function to show error
    function showError(input, message) {
        const formGroup = input.closest(".mb-3");
        let error = formGroup.querySelector(".error-message");
        if (!error) {
            error = document.createElement("div");
            error.className = "error-message text-danger mt-1";
            formGroup.appendChild(error);
        }
        error.textContent = message;
        input.classList.add("is-invalid");
    }

    // Function to clear error
    function clearError(input) {
        const formGroup = input.closest(".mb-3");
        const error = formGroup.querySelector(".error-message");
        if (error) {
            formGroup.removeChild(error);
        }
        input.classList.remove("is-invalid");
    }
});
