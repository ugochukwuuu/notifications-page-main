const markButton = document.querySelector(".read");
const redDot = document.querySelectorAll(".red-dot");
const unchecked = document.querySelectorAll(".unchecked");

markButton.addEventListener("click", () => {
  redDot.forEach((dot) => {
    dot.style.display = "none";
  });
  unchecked.forEach((tab) => {
    tab.style.backgroundColor = "transparent";
  });
});
