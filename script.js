// Assignment Code
var generateBtn = document.querySelector("#generate");

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
    console.log('Correct answer selected');     
    // add points and stuff
    // ...
    // proceed to the next question, afterhaving incremented the currIndex value
    currentIndex++;
    createAndDisplayQuestionAndChoices();
}

function selectedWrong() {
    console.log('Selected wrong answer');
    // subtract time and stuff
    // ...
    // proceed to next question
    timeLeft -= 10;
    //update the countdown display
    document.getElementById("timer").textContent = timeLeft
    currentIndex++;
    createAndDisplayQuestionAndChoices();
}

function createAndDisplayQuestionAndChoices(){
    contentContainer.replaceChildren();
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


// // Create ordered list items

// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");


// // Add text for list items

// li2.textContent = "Bikini Kill";
// li3.textContent = "Ultra Miami";
// li4.textContent = "Sevdaliza";

// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);

// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 

// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// favoriteEl.setAttribute("style", "font-size:20px;");
// // Add styling to list element
// listEl.setAttribute("style", "background: black; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");


generateBtn.addEventListener("click", function(){
    createAndDisplayQuestionAndChoices()  
})


// // QUIZ QUESTION 1
// var body = document.body;
// var favoriteEl = document.createElement("div");
// // Create ordered list element
// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// favoriteEl.textContent = "My bucket list concert is:";
// // Add text for list items
// li1.textContent = "Grimes";
// li2.textContent = "Bikini Kill";
// li3.textContent = "Ultra Miami";
// li4.textContent = "Sevdaliza";

// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);

// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// favoriteEl.setAttribute("style", "font-size:20px;");
// // Add styling to list element
// listEl.setAttribute("style", "background: black; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");

// // QUIZ QUESTION 2
// var body = document.body;
// var favoriteEl = document.createElement("div");
// // Create ordered list element
// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// favoriteEl.textContent = "My bucket list country to visit is:";
// // Add text for list items
// li1.textContent = "China";
// li2.textContent = "India";
// li3.textContent = "Australia";
// li4.textContent = "Italy";

// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);

// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// favoriteEl.setAttribute("style", "font-size:20px;");
// // Add styling to list element
// listEl.setAttribute("style", "background: black; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); hover: white; border: 1px solid black; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");

// // QUIZ QUESTION 3
// var body = document.body;
// var favoriteEl = document.createElement("div");
// // Create ordered list element
// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// favoriteEl.textContent = "My bucket list adventure is:";
// // Add text for list items
// li1.textContent = "Climb Mt. Everest basecamp";
// li2.textContent = "Sail around Anartica";
// li3.textContent = "Thru hike the Appalichain Trail";
// li4.textContent = "Skydive";

// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);

// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// favoriteEl.setAttribute("style", "font-size:20px;");
// // Add styling to list element
// listEl.setAttribute("style", "background: black; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");

// // QUIZ QUESTION 4
// var body = document.body;
// var favoriteEl = document.createElement("div");
// // Create ordered list element
// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// favoriteEl.textContent = "My bucket list world marathon is";
// // Add text for list items
// li1.textContent = "Boston Marathon";
// li2.textContent = "Berlin Marathon";
// li3.textContent = "New York Marathon";
// li4.textContent = "Tokyo Marathon";

// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);

// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// favoriteEl.setAttribute("style", "font-size:20px;");
// // Add styling to list element
// listEl.setAttribute("style", "background: black; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");

// // QUIZ QUESTION 5
// var body = document.body;
// var favoriteEl = document.createElement("div");
// // Create ordered list element
// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// favoriteEl.textContent = "My bucket list dog is:";
// // Add text for list items
// li1.textContent = "A boxer";
// li2.textContent = "A rotweiler";
// li3.textContent = "A Weimerheimer";
// li4.textContent = "A poodle";

// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);

// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);

// favoriteEl.setAttribute("style", "font-size:20px;");
// // Add styling to list element
// listEl.setAttribute("style", "background: black; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background:linear-gradient(319deg, #7fd82b 0%, #ef4063 37%, #e557c6 100%); border: 1px solid black; padding: 5px; margin-left: 35px;");

// Countdown code using setInterval () function
let timeLeft = 60; 
let countdown = 60;

function startTimer() {
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft + " seconds left";
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Time's up!";
    }
  }, 1000);
}

// Code to get countdown timer to countdown if wrong answer
function wrongAnswer() {
    if (timeLeft > 10) {
      timeLeft -= 10; // subtract 5 seconds for each wrong answer
    } else {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Time's up!";
    }
}



// // Code for form 
// const myForm = document.getElementById('myForm');

// myForm.addEventListener('submit', (event) => {
//   // code to handle form submission goes here
//   event.preventDefault(); // prevent default form submission behavior
// });




// //  Code Array for question containers 
// var questions = [
//     {
//       question: "My bucket list concert is:",
//       answers: [
//         { text: "Grimes", correct: false },
//         { text: "Bikini Kill", correct: true },
//         { text: "Ultra Miami", correct: false },
//         { text: "Sevdaliza", correct: false }
//       ]
//     },
//     {
//       question: "My bucket list country to visit is",
//       answers: [
//         { text: "China", correct: true },
//         { text: "India", correct: false },
//         { text: "Australia", correct: false },
//         { text: "Italy", correct: false }
//       ]
//     }
//     {
//         question: "My bucket list andventure is",
//         answers: [
//           { text: "Climb Mt. Everest basecamp", correct: false },
//           { text: "Sail around Anartica", correct: false},
//           { text: "Thru Hike the Appalichain Trail", correct: true },
//           { text: "Skydive", correct: false }
//         ]
//       }
//       {
//         question: "My bucket list world marathon is",
//         answers: [
//           { text: "Boston Marathon", correct: true },
//           { text: "Berlin Marathon", correct: false},
//           { text: "New York Marathon", correct: false },
//           { text: "Tokyo Marathon", correct: false }
//         ]
//       }
//       {
//         question: "My bucket list dog is",
//         answers: [
//           { text: "A boxer", correct: true },
//           { text: "A rotweiler", correct: false},
//           { text: "A weimerheimer", correct: false},
//           { text: "A poodle", correct: false }
//         ]
//       }
//   ];
 
// Creating forloops 
 


 
   
// Create an element NOTES
// var h1Tag = document.createElement("h1");
// // Add some content
// h1Tag.textContent = "What month is Pride Month?"
// // Add some attr or styles
// h1Tag.setAttribute("style", "font-size: 40px; color: orange; background-color: pink");
// // Append to the page
// document.body.append(h1Tag)


// // Stores user response in variable
// var tagName = prompt("When is xmas month?", "select from the choices below");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   // Creates element based on tag entered by user
//   var tag = document.createElement(tagName);

//   // Adds text content to created tag
//   tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
//   // Appends tag as child of document body
//   document.body.appendChild(tag);
// }

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