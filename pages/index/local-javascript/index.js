const HEAD_IMAGE = document.querySelector(".profilePicture");
const POPUP = document.createElement("div");
POPUP.className = "popup";

HEAD_IMAGE.addEventListener("click", () => {
  POPUP.innerHTML = `<img src="${HEAD_IMAGE.src}" alt="Profile Picture">`;
  document.body.appendChild(POPUP);
  POPUP.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (e.target !== HEAD_IMAGE && e.target !== POPUP) {
    POPUP.style.display = "none";
  }
});
