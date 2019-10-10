"use strict";

// grap browser url and save in a variable
let currentURL = window.location.href;

let listInformation = [];
listInformation = currentURL.split("?");

console.log(listInformation);

const chosenSub = document.querySelector(".product-label-selected");
const chosenSize = document.querySelector(".product-size");
const chosenSaving = document.querySelector(".message-pricelist .highlight");
const chosenCampaingPrice = document.querySelectorAll(".message-pricelist h3");
const chosenPrice = document.querySelector(".price-info-basket h2");

// Check subscription
if (listInformation[2] == "sub=1") {
  chosenSub.textContent = "4 Magazines";
  chosenPrice.textContent = "198,50 DDK";
} else if (listInformation[2] == "sub=2") {
  chosenSub.textContent = "6 Magazines";
  chosenPrice.textContent = "248,50 DDK";
} else {
  chosenSub.textContent = "8 Magazines";
  chosenPrice.textContent = "348,50 DDK";
}

// Check size
if (listInformation[1] == "size=s") {
  chosenSize.textContent = "size: S";
} else if (listInformation[1] == "size=m") {
  chosenSize.textContent = "size: M";
} else if (listInformation[1] == "size=l") {
  chosenSize.textContent = "size: L";
} else {
  chosenSize.textContent = "size: XL";
}

const form = document.querySelector("form").elements;

form.btnComplete.addEventListener("click", e => {
  e.preventDefault();
  console.log("click");
  window.location.href = `complete.html?${listInformation[2]}`;
});
