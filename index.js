//write your code here

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let phoneNumber = document.getElementById("phone-number");
let email = document.getElementById("email");
let password = document.getElementById("password");

let userFullName = sessionStorage.setItem("userFullName", firstName + lastName);
let userPhoneNumber = sessionStorage.setItem("userPhoneNumber", phoneNumber);
let userEmail = sessionStorage.setItem("userEmail", email);


let category = document.getElementById("category");
let difficultyLevel = document.getElementById("difficultyLevel");
let url = 'https://the-trivia-api.com/v2/quizzes';
let apiKey = 'ApiKeyAuth';
let allQuestions = " ";

function getQuestions(){

  let caller = new XMLHttpRequest();
  caller.open("GET", url);
  caller.setRequestHeader("Authorization", `Bearer ${apiKey}`);
  caller.setRequestHeader('Content-Type', 'application/json')

  caller.send();

  caller.onload = function(){
    allQuestions = JSON.parse(caller.response)
    console.log(allQuestions);

    console.log(allQuestions.questions)
    
  }


}



