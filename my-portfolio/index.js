import Router from "./scripts/router.js";

(function router() {
  window.location.hash = "home";
  Router.init();
})();

// Side Navigation

const sideNavMobile = document.querySelector(".header__sidenav--mobile");
const openButton = sideNavMobile.querySelector(".open__btn--mobile");

const sideNavMobilePanel = sideNavMobile.querySelector(
  ".sidenav__panel--mobile"
);

const closeButton = sideNavMobile.querySelector(".close__btn--mobile");

const allLinksMobile = sideNavMobilePanel.querySelectorAll(
  ".header__link--mobile"
);

openButton.addEventListener("click", openPanel);
closeButton.addEventListener("click", closePanel);

for (const iterator of allLinksMobile) {
  iterator.addEventListener("click", closePanel);
}

function openPanel() {
  sideNavMobilePanel.style.width = "340px";
}

function closePanel() {
  sideNavMobilePanel.style.width = "0px";
}
