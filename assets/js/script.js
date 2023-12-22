'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const paymentBtns = document.querySelectorAll("#click-toggle")
const formWrapper = document.querySelector(".payment__form__wrapper")
const navElemArr = [navOpenBtn, navCloseBtn, overlay];

function handleActivatePaymentModal(e) {
  
  formWrapper.classList.toggle("active")
}


formWrapper.addEventListener("click", (e) => {
  e.stopPropagation();

  e.target.classList.toggle("active")
})


paymentBtns.forEach((el) => {
  el.onclick = handleActivatePaymentModal
})

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});