document.getElementById("user-full-name").innerHTML = localStorage.getItem("userFullName");
let difficultyLevel ="easy";
let category = " ";
let routeNumber = 9;
let allQuestions = {};
let index = 0;
let question = "";
let eachResult = "";
let userAnswers = 0;
let allAnsweredQuestion = 0;



let startButton = document.querySelector('#start-quiz');

startButton.addEventListener('click', () => {
  category = document.getElementById("category").value;
  difficultyLevel = document.getElementById("level").value;
  console.log(category);
  console.log(difficultyLevel);

  console.log("get Question got called...");
  getRouteNumber();
  getQuestions();

})


function getRouteNumber(){
  switch (category){
    case "General Knowledge":
      routeNumber = 9;
      break;
    case "Entertainment: Books":
      routeNumber = 10;
      break;
    case "Entertainment: Film":
      routeNumber = 11;
      break;
    case " Entertainment: Music":
      routeNumber = 12;
      break;
    case "Entertainment: Musicals & Theatres":
      routeNumber = 13;
      break;
    case "Entertainment: Television":
      routeNumber = 14;
      break;
    case "Entertainment: Video Games":
      routeNumber = 15;
      break;
    case "Entertainment: Board Games":
      routeNumber = 16;
      break;
    case "Science & Natures":
      routeNumber = 17;
      break;
    case "Science: Computers":
      routeNumber = 18;
      break;
    case "Science: Mathematics":
      routeNumber = 19;
      break;
    case "Mythology":
      routeNumber = 20;
      break;
    case "Sports":
      routeNumber = 21;
      break;
    case "Geography":
      routeNumber = 22;
      break;
    case "History":
      routeNumber = 23;
      break;
    case "Politics":
      routeNumber = 24;
      break;
    case "Arts":
      routeNumber = 25;
      break;
    case "Celebrities":
      routeNumber = 26;
      break;
    case "Animals":
      routeNumber = 27;
      break;
    case "Vehicles":
      routeNumber = 28;
      break;
    case "Entertainment: Comics":
      routeNumber = 29;
      break;
    case "Science: Gadgets":
      routeNumber = 30;
      break;
    case "Entertainment: Japanese Anime & Manga":
      routeNumber = 31;
      break;
    case "Entertainment: Cartoons & Animation":
      routeNumber = 32;
      break;
    
  }

}


 let getQuestions = function(){

  console.log(routeNumber);
  console.log(difficultyLevel.toLowerCase());
  let url = `https://opentdb.com/api.php?amount=20&category=${routeNumber}&difficulty=${difficultyLevel.toLowerCase()}&type=multiple`;

  let caller = new XMLHttpRequest();
  caller.open("GET", url);
  caller.send();

  caller.onload = function(){
    allQuestions = JSON.parse(caller.response);


    console.log(allQuestions);
    localStorage.setItem("AllQuestion", JSON.stringify(allQuestions));
    console.log("Done saving");

    document.querySelector("#main-section").style.display = 'none';
    document.querySelector("#question_and_answertag").style.display = 'flex'; 

    displayQuestion();
  }

}


function displayQuestion(){

  question = localStorage.getItem("AllQuestion");
  questionOptions();

}
document.getElementById("nextButton").addEventListener('click', () => {

  event.preventDefault();

  displayCorrectAnswer();

  index++;
  setTimeout(questionOptions, 2000);

})


function questionOptions(){
  getAnswer();
  uncheckRadio();
  shuffleOptions();
  

  document.getElementById('correct-answer').innerHTML = "";
  eachResult =JSON.parse(question).results[index];

  document.getElementById('question').innerHTML = eachResult.question;

  let optionA = eachResult.correct_answer;
  let optionB = eachResult.incorrect_answers[0];
  let optionC = eachResult.incorrect_answers[1];
  let optionD = eachResult.incorrect_answers[2];


  document.getElementById('optionA').innerHTML = optionA;
  document.getElementById('optionB').innerHTML = optionB;
  document.getElementById('optionC').innerHTML = optionC;
  document.getElementById('optionD').innerHTML = optionD;
}

function displayCorrectAnswer(){
  document.getElementById('correct-answer').innerHTML = `Correct Answer is ${eachResult.correct_answer}`;
}


function shuffleOptions(){
  let ul = document.querySelector('ul');
  for (let option = ul.children.length; option >= 0; option--) {
      ul.appendChild(ul.children[Math.random() * option | 0]);
  }
}

function uncheckRadio(){
  document.getElementById("radio-input1").checked = false;
  document.getElementById("radio-input2").checked = false;
  document.getElementById("radio-input3").checked = false;
  document.getElementById("radio-input4").checked = false;
}

function getAnswer(){
  allAnsweredQuestion++;

  if(allAnsweredQuestion === 20){
    displayResult();
  }
  if(document.getElementById("radio-input1").checked === true){
    console.log("correct");
    userAnswers++;
  }
}


let displayResult = function() {

  document.querySelector("#question_and_answertag").style.display = 'none';

  document.querySelector("#user-result").style.display = 'flex';
  let userResult = `You Scored ${userAnswers}`;
  document.querySelector("#user-answers").innerHTML= userResult;

  let percentage = (userAnswers/20) * 100;
  let percentageTag = document.querySelector("#percentage");
  percentageTag.innerHTML= percentage.toPrecision(2) + "%";

  if(percentage < 50){
    percentageTag.style.color = 'red';
  }

}

document.querySelector('#try-again').addEventListener('click', () => {
  location.reload();
})