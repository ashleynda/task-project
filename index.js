//write your code here

let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let phoneNumber = document.getElementById("phone-number");
let email = document.getElementById("email");
let password = document.getElementById("password");

let fullName = firstName.value + lastName.value;
console.log(fullName);
let userFullName = localStorage.setItem("userFullName", );
let userPhoneNumber = sessionStorage.setItem("userPhoneNumber", phoneNumber);
let userEmail = sessionStorage.setItem("userEmail", email);



let form = document.getElementById("form");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location = './dashboard.html'
})





