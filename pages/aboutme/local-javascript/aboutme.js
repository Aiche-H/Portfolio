const THEME = localStorage.getItem("theme");

if (THEME === "dark") {
  document.body.classList.add("bodyDark");
} else {
  document.body.classList.add("bodyLight");
}
