
const menu = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".links-mobile");
// HAMBURGER MENU - OPEN NAV
const openNav = () => {
menu.addEventListener('click', () => {
  menuLinks.classList.toggle('links-mobile-active');
});

}
openNav();

