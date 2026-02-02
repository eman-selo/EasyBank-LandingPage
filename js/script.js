const menuBtn = document.getElementsByClassName("menu-icon")[0];
const menuContent = document.getElementsByClassName("nav-links")[0];
const menuImg = menuBtn.querySelector("img");
menuBtn.addEventListener("click", () => {
  menuContent.classList.toggle("active");
  menuBtn.classList.toggle("open");
  if (menuContent.classList.contains("active")) {
    menuImg.src = "./images/icon-close.svg";
  } else {
    menuImg.src = "./images/icon-hamburger.svg";
  }
});
