"use strict";

// grap browser url and save in a variable
let currentURL = window.location.href;

let listInformation = [];
listInformation = currentURL.split("?");

console.log(listInformation);

const subOne = document.getElementById("a");
const subTwo = document.getElementById("b");
const subThree = document.getElementById("c");

document.querySelector(".confirm-button").addEventListener("click", e => {
  if (subOne.checked) {
    window.location.href = `your_basket.html?${listInformation[1]}?sub=${
      subOne.value
    }`;
  } else if (subTwo.checked) {
    window.location.href = `your_basket.html?${listInformation[1]}?sub=${
      subTwo.value
    }`;
  } else {
    window.location.href = `your_basket.html?${listInformation[1]}?sub=${
      subThree.value
    }`;
  }
});
