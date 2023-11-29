document.getElementById("userFullName").innerHTML = localStorage.getItem("userFullName");
let difficultyLevel =" ";
let category = " ";


let url = "https://opentdb.com/api.php?amount=50";
let apiKey = 'ApiKeyAuth';
let allQuestions = " ";


let startButton = document.querySelector('#start-quiz');

startButton.addEventListener('click', () => {
  category = document.getElementById("category").value;
  difficultyLevel = document.getElementById("level").value;
  console.log(category);
  console.log(difficultyLevel);


  console.log("get Question got called...");
  getQuestions();
  console.log("call completed...");

})


function getQuestions(){

  let caller = new XMLHttpRequest();
  caller.open("GET", url);

  caller.send();

  caller.onload = function(){
    allQuestions = JSON.parse(caller.response);
    console.log(allQuestions);

    console.log(allQuestions.questions);
    
  }


}