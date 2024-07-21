const bgAnimation = document.getElementById("bgAnimation");

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("colorBox");
  bgAnimation.append(colorBox);
}

// /* <!-- NAVBAR START --> */

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// /* <!-- NAVBAR END --> */


// <!-- EXPANDABLE SLIDER START-->

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActivePanel();
    panel.classList.add("active");
  });
});

function removeActivePanel() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// <!-- EXPANDABLE SLIDER END-->

// <!-- SMOOTH SCROLL START -->

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

var bcopy = document.querySelector(".blogos-slide").cloneNode(true);
document.querySelector(".blogos").appendChild(bcopy);

// <!-- SMOOTH SCROLL END -->



// F A Q's section START




const faqItems = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < faqItems.length; i++) {
    faqItems[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
faqItems.forEach((item) => item.addEventListener('click', toggleAccordion));


// F A Q's section END



// <!-- MEDIUM SLIDER START-->

let mdNext = document.querySelector(".mdNext");
let mdPrev = document.querySelector(".mdPrev");

mdNext.addEventListener("click", function () {
  let mdItems = document.querySelectorAll(".mdItem");
  document.querySelector(".mdSlide").appendChild(mdItems[0]);
});

mdPrev.addEventListener("click", function () {
  let mdItems = document.querySelectorAll(".mdItem");
  document.querySelector(".mdSlide").prepend(mdItems[mdItems.length - 1]); // here the length of items = 6
});

// <!-- MEDIUM SLIDER END-->





const form_creat_one_btn = document.getElementById("form-creat_one-btn");
const form_sign_in_btn = document.getElementById("form-sign_in-btn");
const sign_up_form = document.getElementById("sign_up-form");
const sign_in_form = document.getElementById("sign_in-form");

form_creat_one_btn.addEventListener('click', function() {
    sign_up_form.style.display = "flex";
    sign_in_form.style.display = "none";
});

form_sign_in_btn.addEventListener('click', function() {
    sign_up_form.style.display = "none";
    sign_in_form.style.display = "flex";
});

const form = document.getElementById('signup');
const usernameEl = document.querySelector('#username');
const contactEl = document.querySelector('#contact');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#password_confirmation');

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
};

const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkContact = () => {
    let valid = false;
    const contact = contactEl.value.trim();
    if (!isRequired(contact)) {
        showError(contactEl, 'Contact cannot be blank.');
    } else if (!/^\d{10}$/.test(contact)) {
        showError(contactEl, 'Contact must be a 10-digit number.');
    } else {
        showSuccess(contactEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must be at least 8 characters long and include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character.');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again.');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Confirm password does not match.');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isUsernameValid = checkUsername(),
        isContactValid = checkContact(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();
    let isFormValid = isUsernameValid &&
        isContactValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {
        form.submit();
    }
});