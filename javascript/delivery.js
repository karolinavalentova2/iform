"use strict";

// grap browser url and save in a variable
let location = window.location.href;
console.log(location);

const form = document.querySelector("form").elements;

form.btnPayment.addEventListener("click", e => {
  e.preventDefault();
  window.location.href =
    "payment.html" +
    "?size=s" +
    "?sub=1" +
    "?firstname=Jon" +
    "?lastname=Snow" +
    "?adress=Castle%20Black" +
    "?zip=0001" +
    "?city=Westeros" +
    "?email=IknowNothing@nWatch.com" +
    "?phone=11223344";
});
