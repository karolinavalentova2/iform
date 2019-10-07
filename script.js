// login
function doLogin(e) {
  e.preventDefault();
  const userInputElement = document.getElementById("entryName");
  const passwordInputElement = document.getElementById("entryPassword");

  if (
    userInputElement.value === "CryBabies" &&
    passwordInputElement.value === "password123"
  ) {
    window.location.href = `${window.location.origin}/index.html`;
  } else alert("Wrong username or password!");
}
// Index
// go to next page
document.querySelector(".button-order-now").addEventListener("click", e => {
  window.location.href = "basket.html";
});

//basket
