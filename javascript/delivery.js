"use strict";

// grap browser url and save in a variable
let currentURL = window.location.href;

let listInformation = [];
listInformation = currentURL.split("?");

console.log(listInformation);

const form = document.querySelector("form").elements;
console.log(form);

form.btnPayment.addEventListener("click", e => {
  e.preventDefault();
  if (form.firstname.value == "") {
    alert("You are missing your first name");
    form.firstname.focus();
  } else if (form.lastname.value == "") {
    alert("You are missing your last name");
    form.lastname.focus();
  } else if (form.adress.value == "") {
    alert("You are missing your adress");
    form.adress.focus();
  } else if (form.zip.value == "") {
    alert("You are missing your ZIP code");
    form.zip.focus();
  } else if (form.city.value == "") {
    alert("You are missing the city");
    form.city.focus();
  } else if (form.email.value == "") {
    alert("You are missing your email");
    form.email.focus();
  } else if (form.phone.value == "") {
    alert("You are missing a phone number");
    form.phone.focus();
  } else {
    window.location.href = `payment.html?${listInformation[1]}?${
      listInformation[2]
    }?firstname=${form.firstname.value}?lastname=${
      form.lastname.value
    }?adress=${form.adress.value}?zip=${form.zip.value}?city=${
      form.city.value
    }?email=${form.email.value}?phone=${form.phone.value}`;
  }
});
