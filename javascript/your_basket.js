"use strict";

// grap browser url and save in a variable
let location = window.location.href;
console.log(location);

document.querySelector(".confirm-button").addEventListener("click", e => {
  window.location.href = "delivery.html";
});
