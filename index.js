//write your code here

let form = document.getElementById("form");
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let fullName = firstName + " " + lastName;
  console.log(fullName);
  let userFullName = localStorage.setItem("userFullName", fullName);
  let userPhoneNumber = localStorage.setItem("userPhoneNumber", phoneNumber);
  let userEmail = localStorage.setItem("userEmail", email);
  
  window.location = './dashboard.html'
})

