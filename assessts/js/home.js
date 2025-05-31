function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector(".theme-toggle i");
  body.classList.toggle("dark");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}

function navigateTo(page) {
  window.location.href = page;
}


// Contact-Page // 

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return false;
  }
  return true;
}
