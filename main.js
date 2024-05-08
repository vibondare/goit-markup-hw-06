const mobileMenu = document.querySelector(".mobile-burger-menu");
const openMobileMenuButton = document.querySelector(
  ".header-burger-menu-button"
);
const closeMobileMenuButton = document.querySelector(
  ".mobile-burger-menu-button.close-mobile-menu-button"
);
const mobileMenuList = document.querySelector(".mobile-burger-menu-list");

const makeOrderForm = document.querySelector(".modal-form");
const openOrderFormButton = document.querySelector(".hero-button");
const closeOrderFormButton = document.querySelector(".modal-close-button");
const makeOrderFormBackdrop = document.querySelector(".backdrop");

const footerForm = document.querySelector(".footer-form");
const footerFormSubmitButton = document.querySelector(".footer-form-button");

const successfulOrderModal = document.querySelector(".backdrop-order-success");
const successfulSubscribeModal = document.querySelector(
  ".backdrop-footer-success"
);

openMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

mobileMenuList.addEventListener("click", (event) => {
  if (event.target.nodeName === "LI") {
    return;
  }
  mobileMenu.classList.remove("is-open");
});

openOrderFormButton.addEventListener("click", () => {
  makeOrderFormBackdrop.classList.add("is-open");
});

closeOrderFormButton.addEventListener("click", () => {
  makeOrderFormBackdrop.classList.remove("is-open");
});

makeOrderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  successfulOrderModal.classList.add("is-open");
  makeOrderForm.reset();
});

footerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  successfulSubscribeModal.classList.add("is-open");
  footerForm.reset();
});

document.addEventListener("keydown", (event) => {
  if (
    !successfulOrderModal.classList.contains("is-open") &&
    !successfulSubscribeModal.classList.contains("is-open")
  ) {
    return;
  }

  if (event.key === "Escape") {
    if (successfulOrderModal.classList.contains("is-open")) {
      successfulOrderModal.classList.remove("is-open");
      makeOrderFormBackdrop.classList.remove("is-open");
    }

    if (successfulSubscribeModal.classList.contains("is-open")) {
      successfulSubscribeModal.classList.remove("is-open");
    }
  }
});

document.addEventListener("click", (event) => {
  if (
    event.target !== successfulOrderModal &&
    event.target !== successfulSubscribeModal
  ) {
    return;
  }

  if (successfulOrderModal.classList.contains("is-open")) {
    successfulOrderModal.classList.remove("is-open");
    makeOrderFormBackdrop.classList.remove("is-open");
  }

  if (successfulSubscribeModal.classList.contains("is-open")) {
    successfulSubscribeModal.classList.remove("is-open");
  }
});
