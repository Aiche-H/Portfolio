const THEME_BUTTON = document.getElementById("themeButton");

const PERFERS_DARK_THEME = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true;

const STORED_THEME = localStorage.getItem("theme");

if (STORED_THEME) {
  if (STORED_THEME === "dark") {
    document.body.classList.add("bodyDark");
  } else {
    document.body.classList.add("bodyLight");
  }
} else {
  if (PERFERS_DARK_THEME()) {
    document.body.classList.add("bodyDark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("bodyLight");
    localStorage.setItem("theme", "light");
  }
}

THEME_BUTTON.addEventListener("click", () => {
  if (document.body.classList.contains("bodyDark")) {
    document.body.classList.remove("bodyDark");
    document.body.classList.add("bodyLight");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("bodyLight");
    document.body.classList.add("bodyDark");
    localStorage.setItem("theme", "dark");
  }
});