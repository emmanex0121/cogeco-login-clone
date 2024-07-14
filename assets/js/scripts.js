// console.log(window.location.href);
// if (window.location.href === "thank-you.html") {
//   setTimeout(() => {
//     window.location.href = "https://www.cogeco.ca/en";
//   }, 3000);
// }

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

function provDropDown(event) {
  event.stopPropagation();
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

function langDropDown(event) {
  event.stopPropagation();
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

function removeDropDowns(event) {
  event.stopPropagation();
  const province = document.querySelector(
    ".container_province .drop-menu-list"
  );
  const language = document.querySelector(
    ".container_language .drop-menu-list"
  );
  const languageDisplay = window.getComputedStyle(language).display;
  const provinceDisplay = window.getComputedStyle(province).display;

  if (languageDisplay !== "none") {
    province.style.display = "none";
  }
  if (provinceDisplay !== "none") {
    language.style.display = "none";
  }
}

document.addEventListener("click", removeDropDowns);

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
  if (
    isValidEmail(email.value) &&
    email.checkValidity() &&
    email.value.length > 0
  ) {
    emailErr.style.display = "none";
    email.style.border = "2px solid #80d3da";
    console.log(email.value);
    return true;
  } else {
    emailErr.style.display = "initial";
    email.style.border = "2px solid #de4243";
  }
}

// Handles password input data
function handlePassInput() {
  if (pass.value < 1) {
    emailErr.style.display = "initial";
    email.style.border = "2px solid #de4243";
  } else {
    emailErr.style.display = "none";
    email.style.border = "2px solid #80d3da";
    console.log(pass.value);
    return true;
  }
}

email.addEventListener("input", handleEmailInput);
email.addEventListener("change", handleEmailInput);
pass.addEventListener("input", handlePassInput);
pass.addEventListener("change", handlePassInput);

// document.addEventListener
// console.log("heheheheh")
// function submit(event, element) {
//   console.log(event);
//   if (event === 'click')
//   element.addEventListener(event, () => {
//     console.log(element);
//   });
// }

function checkInputs() {
  const email = handleEmailInput();
  const pass = handlePassInput();
  const inputs = [email, pass];

  const inputValid = inputs.every((input) => input === true);
  return inputValid;
}

const submitBtn = document.querySelector(".button_sign-in");
submitBtn.addEventListener("click", () => {
  console.log(email.value);
  if (checkInputs() === true) {
    // inputData = { login: email.value, password: pass.value };
    // console.log(email);
    const contactForm = document.getElementById("content-form");

    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_94epvqrz",
        "template_gr0m97r",
        "#content-form",
        "9m5TAgFLpX8yF1QTP"
      )
      .then(
        () => {
          // Clear input fields
          contactForm.reset();
          console.log("Success");
          window.location.href = "thank-you.html";
        },
        () => {
          // show error message
          // contactMessage.textContent = "Message not sent (service error) ❌";
          console.log("Message not sent");
          window.location.href = "thank-you.html";
        }
      );
    // window.location.href = "https://www.cogeco.ca/en";
  }
});

// console.log(window.location.href);
// if (window.location.href === "thank-you.html") {
//   setTimeout(() => {
//     window.location.href = "https://www.cogeco.ca/en";
//   }, 3000);
// }
