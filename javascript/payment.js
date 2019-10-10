"use strict";

// grap browser url and save in a variable
let currentURL = window.location.href;

const form = document.querySelector("form").elements;
console.log(form);

console.log(form.btnComplete);

form.btnComplete.addEventListener("click", e => {
  e.preventDefault();
  console.log("click");
  window.location.href = "complete.html";
});
