// ARTICLES //
const form = document.getElementById("articleForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value.trim();
  const date = new Date().toISOString();

  const article = { title, content, category, image, date };

  // Save to localStorage for now
  let articles = JSON.parse(localStorage.getItem("articles") || "[]");
  articles.push(article);
  localStorage.setItem("articles", JSON.stringify(articles));

  form.reset();
  successMsg.textContent = "Article uploaded successfully!";

  setTimeout(() => {
    successMsg.textContent = "";
  }, 3000);
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
