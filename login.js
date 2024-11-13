// Show and hide forms
function showLogin() {
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

function showRegister() {
  document.getElementById('registerForm').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
}

// Register function
function register() {
  const firstName = document.getElementById("registerFirstName").value;
  const lastName = document.getElementById("registerLastName").value;
  const userId = document.getElementById("registerUserId").value;
  const password = document.getElementById("registerPassword").value;

  // Check if any field is empty
  if (!firstName || !lastName || !userId || !password) {
    alert("Please fill in all the fields to register.");
    return; // Stop the registration process
  }

  // Check if the user already exists
  const existingUser = localStorage.getItem(`user_${userId}`);
  
  if (existingUser) {
    // User already exists
    alert("User already exists. Please log in with your credentials.");
    return; // Stop the registration process
  }

  // Save user data to local storage
  const userData = {
    firstName,
    lastName,
    userId,
    password
  };

  localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  alert("Registration successful!");

  // Redirect to dashboard
  window.location.href = 'dashbord.html';
}

// Login function
function login() {
  const userId = document.getElementById("loginUserId").value;
  const password = document.getElementById("loginPassword").value;

  // Check if any field is empty
  if (!userId || !password) {
    document.getElementById("error").textContent = "Please fill in both the fields to log in.";
    return; // Stop the login process
  }

  const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));

  if (storedUser && storedUser.password === password) {
    alert("Login successful!");

    // Redirect to dashboard
    window.location.href = 'dashbord.html';
  } else {
    document.getElementById("error").textContent = "Invalid credentials. Please try again.";
  }
}

const data= localStorage.getItem("task")

console.log(data)
