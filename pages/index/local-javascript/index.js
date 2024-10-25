const HEAD_IMAGE = document.querySelector(".profilePicture");
const POPUP = document.createElement("div");
POPUP.className = "popup";

const textToType = "Click the image to close.";
let typingIndex = 0;

HEAD_IMAGE.addEventListener("click", () => {
  // reset typingIndex
  typingIndex = 0;

  POPUP.innerHTML = `
    <img src="${HEAD_IMAGE.src}" alt="Profile Picture">
    <p id="typingParagraph"></p>
  `;
  document.body.appendChild(POPUP);
  POPUP.style.display = "block";

  const typingParagraph = document.getElementById("typingParagraph");
  const typingInterval = setInterval(() => {
    if (typingIndex < textToType.length) {
      typingParagraph.textContent += textToType[typingIndex];
      typingIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
});

document.addEventListener("click", (e) => {
  if (e.target !== HEAD_IMAGE && e.target !== POPUP) {
    POPUP.style.display = "none";
  }
});
