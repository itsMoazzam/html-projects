const passwordInput = document.getElementById("password");
const errorMessagesDiv = document.getElementById("error-messages");
const successMessageDiv = document.getElementById("success-message");
const email = document.getElementById('email')

const validationOfInput = [
    {
    regex: /[A-Z]/,
    message: "Password must contain at least 1 uppercase letter."
  },
  {
    regex: /[A-Z]/,
    message: "Password must contain at least 1 uppercase letter."
  },
  {
    regex: /[a-z]/,
    message: "Password must contain at least 1 lowercase letter."
  },
  {
    regex: /[0-9]/,
    message: "Password must contain at least 1 digit."
  },
  {
    regex: /[!@#$%^&*(),.?":{}|<>]/,
    message:
      "Password must contain at least 1 special character (e.g., !@#$%^&*)."
  }
];

function validatePassword(password) {
  return validationOfInput
    .filter((validationOfInput) => !validationOfInput.regex.test(password)) 
    .map((validationOfInput) => validationOfInput.message); 
}

function handleSignUp() {
  const password = passwordInput.value;
  const errorMessages = validatePassword(password);

  errorMessagesDiv.innerHTML = "";
  successMessageDiv.innerHTML = "";

  if (errorMessages.length > 0) {
    errorMessages.forEach((error) => {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.textContent = error;
      errorMessagesDiv.appendChild(errorDiv);
    });
  } else {
    successMessageDiv.textContent = "Password is strong! Sign up successful.";
    successMessageDiv.className = "success";
    email.value ="";
    passwordInput.value = "";

  }
}
