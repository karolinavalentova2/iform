"use strict";

// grap browser url and save in a variable
let currentURL = window.location.href;

let listInformation = [];
listInformation = currentURL.split(".html?");

console.log(listInformation);

document.querySelector(".confirm-button").addEventListener("click", e => {
  window.location.href = "your_basket.html?size=s?sub=1";
});
