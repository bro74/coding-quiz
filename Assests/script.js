// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardEl = document.querySelector(".card");
// var endQuiz = document.querySelector(".end-btn");
var wrapper = document.querySelector(".wrapper");
var formContainer = document.querySelector(".form-container");
// VAR local storage HELP
// var initialInput = document.querySelector("#userInitial-text");
// var bucketListForm = document.querySelector("#bucketList-form");
// var scoreList = document.querySelector("#userScore-list");
// var scoreCountSpan = document.querySelector("#userScore-text");

// var bucklistList = [];
// Content code
var contentContainer = document.querySelector(".content")
console.log(contentContainer)

// Quiz question array
var questionsArray = [
    {
        question:"What is my bucket list concert",
        answersArray:["Grimes", "Bikini Kill", "Ultra Miami", "Sevedaliza"],
        answerValue: "Bikini Kill"

    },
    {
        question:"What is my bucket list country",
        answersArray:["China", "India", "Australia", "Italy"],
        answerValue: "China"

    },
    {
        question:"What is my bucket list adventure",
        answersArray:["Climb Mt. Everest basecamp", "Sail around Anartica", "Skydive", "Thru hike the Appalachain Trail"],
        answerValue: "Thru hike the Appalachain Trail"

    },
    {
        question:"What is my bucket list marathon",
        answersArray:["Berlin Marathon", "Tokyo Marathon", "Boston Marathon", "Chicago Marathon"],
        answerValue: "Boston Marathon"

    }
]

var currentIndex = 0


function gradeUserSelection(event){
    console.log("button-clicked");
    if(event.target.matches('li')){
        var buttonText = event.target.textContent;
        console.log(buttonText);
        // compare the text of the answer choice selected with the current question's answerValue property
        buttonText == questionsArray[currentIndex].answerValue ? selectedCorrect() : selectedWrong();
    }
}

function selectedCorrect() {
    contentResultDiv = document.getElementById("content-result");
    contentResultDiv.innerText="";
    displayResult("Correct!")
    console.log('Correct answer selected');  
   
    const contentResultString = "Correct!"
    // if (displayResult = selectedCorrect) {
        setTimeout(function(){
            contentResultDiv.innerText = "";
        }, 900); 
    // }
    // add points and stuff
    // ...
    // proceed to the next question, afterhaving incremented the currIndex value
    currentIndex++;
    // for(let i = 0; i < questionsArray.length; i++) {
    console.log(currentIndex)
    if (currentIndex === questionsArray.length) {
        endQuiz()
    }
    else { 
        createAndDisplayQuestionAndChoices();
    }
    // // }
}

function selectedWrong() {
    const contentResultDiv = document.getElementById("content-result");
    contentResultDiv.innerText="";
    displayResult("WRONG!");
    console.log('Selected wrong answer');
   
    const contentResultString = "WRONG!"
    setTimeout(function(){
        contentResultDiv.innerText = "";
    }, 900); 
    // subtract time and stuff
    // ...
    // proceed to next question
    timeLeft -= 10;
    //update the countdown display
    document.getElementById("timer").textContent = timeLeft
    currentIndex++;
   
    //forloop on questionsArray
    // for(let i = 0; i < questionsArray.length; i++) {
    console.log(currentIndex)
    if (currentIndex === questionsArray.length) {
        endQuiz()   
    }
    else { 
        createAndDisplayQuestionAndChoices();
    }
    // // }
}

function displayResult(label){
    var displayResultEl = document.querySelector('#content-result')
    var resultH1El = document.createElement("H1")
    resultH1El.textContent = label
    displayResultEl.appendChild(resultH1El)
}

function createAndDisplayQuestionAndChoices(){
    contentContainer.replaceChildren();
    cardEl.classList.add("hide")
    var favoriteEl = document.createElement("div");
    // Create ordered list element
    favoriteEl.textContent = questionsArray[currentIndex].question;
    var listEl = document.createElement("ol");
    for (var i=0; i<4; i++){
        var li = document.createElement("li");
        li.textContent = questionsArray[currentIndex].answersArray[i];
        li.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
        listEl.appendChild(li);
    }
    contentContainer.append(favoriteEl, listEl);
    listEl.addEventListener("click", gradeUserSelection)
}

function endQuiz() {
    wrapper.classList.add("hide");
    formContainer.classList.remove("hide");
}


generateBtn.addEventListener("click", function(){
    createAndDisplayQuestionAndChoices()  
})

// Countdown code using setInterval () function
let timeLeft = 40; 
let countdown = 60;

function startTimer() {
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft + " seconds left";
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Time's up!";
      endQuiz();
    }
  }, 1000);
}

// Code to get countdown timer to countdown if wrong answer
function wrongAnswer() {
    if (timeLeft > 10) {
      timeLeft -= 10; // subtract 10 seconds for each wrong answer
    } else {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Time's up!";
    }
}

var bucketlistForm = document.querySelector("#bucketlist-form")
bucketlistForm.addEventListener("submit", function(event){
    event.preventDefault ()
    console.log("hello")
    var initials = document.querySelector("#userName").value
    console.log(initials)
    var score = document.querySelector("#userScore").value
    console.log(score)
    var storage = JSON.parse(localStorage.getItem("highScores"))||[]
    storage.push({initials, score})
    localStorage.setItem("highScores", JSON.stringify(storage))

//display highscores
var storage = JSON.parse(localStorage.getItem("highScores"))||[]
//forloop //create element & append to html & add storage [i] as text-content
//before forloop highScoreEl.innerHTML=""
})



// Local storage 
// localStorage.setItem("Correct!", "WRONG!")
// localStorage.getItem("Correct!", "WRONG!")



//"Submit" Button for local storage






// // ```
// // GIVEN I am taking a code quiz
// // WHEN I click the start button
// // THEN a timer starts and I am presented with a question
// // WHEN I answer a question
// // THEN I am presented with another question
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and my score
// // ``