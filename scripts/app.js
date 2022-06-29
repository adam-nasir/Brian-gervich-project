/*===================*/
/*---- Variables ----*/
/*===================*/

const mainHeader = document.querySelector("header");

const navBarMenu = document.querySelector("navbar__list");

const hamburgerMenu = document.querySelector(".mobile-menu");

const body = document.querySelector("body");

const navbarList = document.querySelector(".navbar__list");

const navbarMenu = document.querySelector(".navbar__menu");

console.log(navbarMenu);
/*============================*/
/*---- Callback functions ----*/
/*============================*/

// adds and removes margin of the header element
const headerScroll = () => {
  this.scrollY >= 30
    ? mainHeader.classList.add("active", "background-change")
    : mainHeader.classList.remove("active", "background-change");
};

const openCloseMobileMenu = () => {
  hamburgerMenu.classList.toggle("open");
  body.classList.toggle("no-scroll");
  navbarMenu.classList.toggle("appearTwo");
  navbarList.classList.toggle("appear");
};

/*========================*/
/*---- Event Listener ----*/
/*========================*/

window.addEventListener("scroll", headerScroll);
hamburgerMenu.addEventListener("click", openCloseMobileMenu);

// window.addEventListener("scroll", () => {
//   console.log(this.scrollY);
//   if
// });
