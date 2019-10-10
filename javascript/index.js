"use strict";

// Index
// grap browser url and save in a variable
let location = window.location.href;

const form = document.querySelector("form").elements;
console.log(form);
// check

// go to next page
const selection = document.querySelectorAll('input[name="size"');

console.log(selection);

document.querySelector(".button-order-now").addEventListener("click", e => {
  /*selection.forEach(element => {
    if (element.checked) {
      alert("checked");
      return none;
    } else {
      alert("None checked");
    }
  });*/
  window.location.href = "subscriptions.html?size=s";
});
