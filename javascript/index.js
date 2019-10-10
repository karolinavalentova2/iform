"use strict";

// Index
// grap browser url and save in a variable
let location = window.location.href;
console.log(location);

const form = document.querySelector("form").elements;

document.querySelector(".button-order-now").addEventListener("click", e => {
  if (form.size.value) {
    console.log(form.size.value);
    //window.location.href = "subscriptions.html?=" + form.size.value;
    window.location.href = `subscriptions.html?size=${form.size.value}`;
  }
});
