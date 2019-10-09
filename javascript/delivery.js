"use strict";

// grap browser url and save in a variable
let location = window.location.href;
console.log(location);

document.querySelector("#btnPayment").addEventListener("click", e => {
  alert("You would go to payment here, but Simon is sooooo slow!");
  confirm("Don't you agree?");
  //window.location.href = "payment.html";
});
