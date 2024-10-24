const MENU_BUTTON = document.getElementById("menuButton");
const THEME_BUTTON = document.getElementById("themeButton");
const HEADER = document.querySelector("header");
const BUTTONS = document.querySelectorAll("button");

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

window.addEventListener("load", () => {
  if (window.innerWidth < 500) {
    HEADER.classList.toggle("hidden");
    HEADER.style.display = "none";
    MENU_BUTTON.style.position = "static";
  }
});

BUTTONS.forEach((button) => {
  const buttonTextToType = button.textContent;
  let typingIndex = 0;
  let typingIntervalId = null;

  button.addEventListener("mouseover", () => {
    typingIndex = 0;
    button.textContent = "";

    typingIntervalId = setInterval(() => {
      if (typingIndex < buttonTextToType.length) {
        button.textContent += buttonTextToType[typingIndex];
        typingIndex++;
      } else {
        clearInterval(typingIntervalId);
      }
    }, 50);
  });

  button.addEventListener("mouseout", () => {
    clearInterval(typingIntervalId);
    button.textContent = buttonTextToType;
  });
});
