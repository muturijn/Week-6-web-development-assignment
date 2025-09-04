// ========== FORM VALIDATION ==========
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("formMessage");

    // Custom validation rules
    if (username.length < 3) {
        message.textContent = "Username must be at least 3 characters long.";
        message.style.color = "red";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // If all validations pass
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
});

// ========== COUNTER FEATURE ==========
let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", function() {
    counter++;
    counterDisplay.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
    counter--;
    counterDisplay.textContent = counter;
});

// ========== DARK MODE TOGGLE ==========
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Switch to Dark Mode";
    }
});
