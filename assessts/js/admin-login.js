// LOGIN //

const form = document.getElementById("loginForm");
const errorDiv = document.getElementById("error");

const correctEmail = "test123@gmail.com";
const correctPassword = "test123";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === correctEmail && password === correctPassword) {
    window.location.href = "/admin-page.html";
  } else {
    errorDiv.textContent = "Invalid email or password.";
  }
});

// THEME DARK | LIGHT //

function setDarkTheme() {
  document.body.classList.add("dark-theme");
  document.body.classList.remove("light-theme");
}

function setLightTheme() {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
}

