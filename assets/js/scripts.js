console.log("Hell");

function isActive() {
  const menuIcon = document.querySelector("#menu-icon");
  const closeIcon = document.querySelector("#close-icon");
  const menuNav = document.querySelector(".menu-nav");
  const toggleSection = document.querySelectorAll(".toggle_display");

  if (menuIcon.style.display === "none") {
    menuIcon.style.display = "initial";
    closeIcon.style.display = "none";
    menuNav.style.display = "none";

    toggleSection.forEach((section) => {
      section.style.display = "";
    });
  } else {
    closeIcon.style.display = "initial";
    menuIcon.style.display = "none";
    menuNav.style.display = "initial";

    toggleSection.forEach((section) => {
      section.style.display = "none";
    });
  }
}

function provDropDown() {
  const province = document.querySelector(
    ".container_province .drop-menu-list"
  );
  const language = document.querySelector(
    ".container_language .drop-menu-list"
  );
  const provinceDisplay = window.getComputedStyle(province).display;

  if (provinceDisplay === "none") {
    province.style.display = "block";
    language.style.display = "none";
  } else {
    province.style.display = "none";
    // language.style.display = "none";
  }
}

function langDropDown() {
  const province = document.querySelector(
    ".container_province .drop-menu-list"
  );
  const language = document.querySelector(
    ".container_language .drop-menu-list"
  );
  const languageDisplay = window.getComputedStyle(language).display;

  if (languageDisplay === "none") {
    language.style.display = "block";
    province.style.display = "none";
  } else {
    language.style.display = "none";
    // province.style.display = "none";
  }
}

function arrowUp(element) {
  const arrow = element.querySelector(".drop_down-arrow");
  const toggleLegal = document.querySelector(".container_legal-texts");
  arrow.classList.toggle("arrow-up");

  if (toggleLegal.style.display === "none") {
    toggleLegal.style.display = "flex";
  } else {
    toggleLegal.style.display = "none";
  }
}

function isValidEmail(inputValue) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(inputValue);
}

const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const emailErr = document.querySelector(".email_section p");
const passErr = document.querySelector(".password_section p");

// Handles email input data
function handleEmailInput() {
  if (isValidEmail(email.value) && email.checkValidity() && email.value > 0) {
    emailErr.style.display = "none";
    email.style.border = "2px solid #80d3da";
    console.log(email.value);
  } else {
    emailErr.style.display = "initial";
    email.style.border = "2px solid #de4243";
  }
}

// Handles password input data
function handlePassInput() {
  console.log(object);
  if (pass.value < 1) {
    emailErr.style.display = "initial";
    email.style.border = "2px solid #de4243";
  } else {
    emailErr.style.display = "none";
    email.style.border = "2px solid #80d3da";
    console.log(pass.value);
  }
}

email.addEventListener("input", handleEmailInput);
email.addEventListener("chnage", handleEmailInput);
pass.addEventListener("input", handlePassInput);
pass.addEventListener("change", handlePassInput);
