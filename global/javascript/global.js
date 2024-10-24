const MENU_BUTTON = document.getElementById("menuButton");
const HEADER = document.querySelector("header");

MENU_BUTTON.addEventListener("click", () => {
  HEADER.classList.toggle("hidden");
});

MENU_BUTTON.addEventListener("click", () => {
  if (HEADER.style.display === "none") {
    HEADER.style.display = "";
    MENU_BUTTON.style.position = "";
  } else {
    HEADER.style.display = "none";
    MENU_BUTTON.style.position = "static";
  }
});

window.addEventListener("load", () => {
  if (window.innerWidth < 500) {
    HEADER.classList.toggle("hidden");
    HEADER.style.display = "none";
    MENU_BUTTON.style.position = "static";
  }
});
