document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Initialize message
    let message = '';

    // Validate username (minimum 3 characters)
    if (username.length < 3) {
        message += 'Username must be at least 3 characters long.<br>';
    }

    // Validate email format using a regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message += 'Please enter a valid email address.<br>';
    }

    // Validate password (minimum 6 characters)
    if (password.length < 6) {
        message += 'Password must be at least 6 characters long.<br>';
    }

    // Display message or success
    const messageDiv = document.getElementById('message');
    if (message) {
        messageDiv.innerHTML = message; // Show validation errors
    } else {
        messageDiv.innerHTML = 'Signup successful!'; // Success message
        // You can also add code here to submit the form data to a server
       document.getElementById('username').value = "";
    document.getElementById('email').value ="";
    document.getElementById('password').value = "";
    }
});
