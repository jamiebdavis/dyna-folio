// Select DOM ITEMS

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".nav-item");

//Set Initial state of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("open");
    menuBranding.classList.add("close");
    menuNav.classList.add("close");

    navItems.forEach(item => item.classList.add("show"));

    //reset the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("open");
    menuBranding.classList.remove("close");
    menuNav.classList.remove("close");

    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}
