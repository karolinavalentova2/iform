"use strict";

// grap browser url and save in a variable
let currentURL = window.location.href;

let listInformation = [];
listInformation = currentURL.split("?");

console.log(listInformation);

const chosenPrice = document.querySelector(".price-info-basket h2");

// Check subscription
if (listInformation[1] == "sub=1") {
  chosenPrice.textContent = "198,50 DDK";
} else if (listInformation[1] == "sub=2") {
  chosenPrice.textContent = "248,50 DDK";
} else {
  chosenPrice.textContent = "348,50 DDK";
}
