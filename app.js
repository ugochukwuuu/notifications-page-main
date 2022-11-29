const markButton = document.querySelector(".read");
const redDot = document.querySelectorAll(".red-dot");
const unchecked = document.querySelectorAll(".unchecked");
const blueBg = document.querySelector(".bg-blue");

const profileImage = document.querySelector(".main-profile");
// const twitterImage = document.querySelector(".twitter-image");
const socialImage = document.querySelector(".social-image");

markButton.addEventListener("click", () => {
  redDot.forEach((dot) => {
    dot.style.display = "none";
  });
  unchecked.forEach((tab) => {
    tab.style.backgroundColor = "transparent";
  });
  blueBg.style.display = "none";
});

profileImage.addEventListener("click", () => {
  socialImage.classList.toggle("slide-up");
});
