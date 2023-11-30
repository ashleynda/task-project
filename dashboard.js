document.getElementById("userFullName").innerHTML = localStorage.getItem("userFullName");
let difficultyLevel =" ";
let category = " ";
let routeNumber = 0;
let allQuestions = {};


let startButton = document.querySelector('#start-quiz');

startButton.addEventListener('click', () => {
  category = document.getElementById("category").value;
  difficultyLevel = document.getElementById("level").value;
  console.log(category);
  console.log(difficultyLevel);

  console.log("get Question got called...");
  getRouteNumber();
  getQuestions();
  // displayQuestion(allQuestions);

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

    document.querySelector(".main-section").style.display = 'none';
  
    document.querySelector("#question_and_answertag").style.display = 'flex';
    
    displayQuestion(allQuestions);
  }


}

let index = 0;

function displayQuestion(allQuestions){

  console.log(allQuestions.results)

  while (index !== 20){
    localStorage.setItem(index, JSON.stringify(allQuestions.results[index]))
    
    // currentQuestion = allQuestions.results[index];
    

  }

  
}

document.getElementById('nextButton').addEventListener('click', () => {
  index++;
})