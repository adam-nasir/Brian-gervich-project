/*===================*/
/*---- Variables ----*/
/*===================*/

const mainHeader = document.querySelector("header");

const navBarMenu = document.querySelector("navbar__list");

const hamburgerMenu = document.querySelector(".mobile-menu");

const body = document.querySelector("body");

const navbarList = document.querySelector(".navbar__list");

const navbarMenu = document.querySelector(".navbar__menu");

const navbarListItems = navbarList.children;

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

Array.from(navbarListItems).forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerMenu.classList.remove("open");
    body.classList.remove("no-scroll");
    navbarMenu.classList.remove("appearTwo");
    navbarList.classList.remove("appear");
  });
});

/*========================*/
/*---- Event Listener ----*/
/*========================*/

window.addEventListener("scroll", headerScroll);
hamburgerMenu.addEventListener("click", openCloseMobileMenu);

/*==============*/
/*---- GSAP ----*/
/*==============*/

// Header Section

let headerHerotl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-header",
    toggleAction: "play complete none none",
  },
  ease: "power4.inOut",
});

headerHerotl
  .fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 0.2 })
  .fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 0.8 })
  .fromTo(
    ".hero__content",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 0.9 }
  );

// Story Section

let storytl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "60vh center",
  },
  ease: "power4.inOut",
});

storytl
  .fromTo(
    ".about__img-content",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1 }
  )
  .fromTo(
    ".about__text-content",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1.2 }
  );

// Inspiration Section

let inspirationtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".inspiration",
    markers: true,
    start: "90vh center",
  },
  ease: "power4.inOut",
});

inspirationtl
  .fromTo(
    ".my-inspiration__text-content",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1 }
  )
  .fromTo(
    ".inspiration__img-content",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1.5 }
  );

// Service Section

let servicestl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",

    start: "60px 200px",
  },
  ease: "power4.inOut",
});

servicestl.from(".card", { stagger: 0.3, opacity: 0, y: -100 });

// Testimonies Section

let testimoniestl = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonies",

    start: "60px 200px",
  },
  ease: "power4.inOut",
});

testimoniestl
  .from(".testimonies .section-title", { opacity: 0, duration: 0.5 })
  .from(".testimonies__content", { opacity: 0 }, "+=0.2");

// Contact Section

let contacttl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "60px 200px",
  },
  ease: "power4.inOut",
});

contacttl.from(".form", { opacity: 0, y: 40, duration: 1.2 });
