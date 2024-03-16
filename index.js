let menu = document.querySelector(".menu-mobile");
let navMenu = document.querySelector(".main-nav");
let mainBody = document.querySelector("main");
let hero = document.querySelector(".hero");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let testimonials = document.querySelector(".testimonials");
let pricing = document.querySelector(".pricing");
let meals = document.querySelector(".meals-section");
let howitworks = document.querySelector(".howitworks");
let signup = document.querySelector(".signup");
let headerLogo = document.querySelector(".logo");
let menuIcon = document.querySelector(".menu-icon");
const mobileNavListItem = menu.querySelectorAll("li");
const navListItem = navMenu.querySelectorAll("li");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const heroHeight = hero.clientHeight;
  if (scrollPosition > heroHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const onToogleMenu = (showMenu, hideMenu) => {
  menu.style.display = showMenu;
  mainBody.style.display = hideMenu;
  headerLogo.style.display = hideMenu;
  if (showMenu == "flex") {
    menuIcon.style.position = "absolute";
    menuIcon.style.opacity = 0;
    header.style.padding = 0;
    return;
  } else {
    menuIcon.style.position = "relative";
    menuIcon.style.opacity = 1;
    header.style.padding = 0;
    header.style.padding = `3rem 2rem`;
  }
};

// Loop through each <li> element and add a click event listener
mobileNavListItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent.trim() === "Testimonials") {
      scrollToItem(testimonials, true);
      return;
    }
    if (item.textContent.trim() === "How it works") {
      scrollToItem(howitworks, true);
      return;
    }
    if (item.textContent.trim() === "Meals") {
      scrollToItem(meals, true);
      return;
    }
    if (item.textContent.trim() === "Pricing") {
      scrollToItem(pricing, true);
      return;
    }
    if (item.textContent.trim() === "Try for free") {
      scrollToItem(signup, true);
      return;
    }
  });
});
navListItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent.trim() === "Testimonials") {
      scrollToItem(testimonials, false);
      return;
    }
    if (item.textContent.trim() === "How it works") {
      scrollToItem(howitworks, false);
      return;
    }
    if (item.textContent.trim() === "Meals") {
      scrollToItem(meals, false);
      return;
    }
    if (item.textContent.trim() === "Pricing") {
      scrollToItem(pricing, false);
      return;
    }
    if (item.textContent.trim() === "Try for free") {
      scrollToItem(signup, false);
      return;
    }
  });
});

const scrollToItem = (item, isShowToogle) => {
  if (isShowToogle) {
    onToogleMenu("none", "block");
  }
  setTimeout(() => {
    item.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};

menuIcon.addEventListener("click", () => onToogleMenu("flex", "none"));
