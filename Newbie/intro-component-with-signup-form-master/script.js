let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name Cannot be empty");
  } else {
    setSuccesFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "last Name Cannot be empty");
  } else {
    setSuccesFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Looks like this is not an email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccesFor(password);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccesFor(password);
  }
}

function setErrorFor(input, message) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccesFor(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control";
}

function isEmail(email) {
  return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
    email
  );
}
