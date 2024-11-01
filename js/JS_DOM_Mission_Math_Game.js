const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const answer = document.getElementById("answer");
const operator = document.getElementById("input-operator");
let correctAnswer, exercise, score = 0, inputRange;
const defaultRange = 10;

const math = {
  "+": (x,y) => x + y,
  "-": (x,y) => x - y,
  "*": (x,y) => x * y,
  "/": (x,y) => x / y,
};

// func -> initialize the game
function initializeGame() {
  if (inputRange === undefined)
    drawRandomNumbers(defaultRange);
  else
    drawRandomNumbers(inputRange);
  answer.value = "";
}

// func -> randomized 2 numbers
function drawRandomNumbers(range) {
  inputRange = range;
  firstNumber.textContent = Math.round(Math.random() * inputRange);
  secondNumber.textContent = Math.round(Math.random() * inputRange);
}

// func -> check if user answer is correct
function checkAnswer() {
  let userAnswer = parseInt(answer.value);
  calculateAnswer();

  if (userAnswer === correctAnswer)
    score = 10;

  showResults();
  initializeGame();
}

// func -> calculate answer
function calculateAnswer() {
  let num = parseInt(firstNumber.textContent),
    num2 = parseInt(secondNumber.textContent);

  correctAnswer = math[operator.value](num, num2);
  exercise = `${num} ${operator.value} ${num2} = ${correctAnswer}`;
}

// func -> change card`s operator
function changeOperator() {
  document.getElementById("operator").textContent = operator.value;
}

// func -> show results
function showResults() {
  document.querySelector(".results").classList.remove('hide-section');
  document.querySelector(".result-accordion").innerHTML += `
    <div class="accordion-item">
      <header class="accordion-header">
        <div>
          <h3 class="accordion-title">exercise</h3>
          <div class="accordion-description">${exercise}</div>
        </div>
        <div>
          <h3 class="accordion-title">score</h3>
          <div class="accordion-description">${score}</div>
        </div>
        <div class="accordion-arrow" onclick="openAccordion(this)">
          <i class='bx bxs-down-arrow'></i>
        </div>
      </header>
      <div class="accordion-content">
        <div>
          <h3 class="accordion-title">correct answer</h3>
          <div class="accordion-description">${correctAnswer}</div>
        </div>
        <div>
          <h3 class="accordion-title">your answer</h3>
          <div class="accordion-description">${answer.value}</div>
        </div>
      </div>
    </div>
  `;
}

function openAccordion(icon) {
  const accordionHeader = icon.closest(".accordion-header");
  const item = accordionHeader.parentNode;
  const openItem = document.querySelector('.accordion-open');

  toggleItem(item);
  if (openItem && openItem !== item)
    toggleItem(openItem);
}

function toggleItem(item) {
  if (item.classList.contains('accordion-open'))
    item.classList.remove('accordion-open');
  else
    item.classList.add('accordion-open');
}

initializeGame();













/*=============== VARIABLES ===============*/
// func => generate random numbers between 1-10
// const randomNumbers = () => {
//   const range = parseInt(document.getElementById("input-range").value);

//   numOne.innerText = Math.floor(Math.random() * range + 1);
//   numTwo.innerText = Math.floor(Math.random() * range + 1);
// }

// func => check if the user answer is correct
// const check = () => {
//   correctAnswer = calculateAnswer();

//   if (userAnswer.value == correctAnswer)
//     score = 10;
//   else score = 0;

//   // show table score and history
//   document.querySelector(".game-history").classList.add("show-table");

//   displayHistory();
//   randomNumbers();
//   userAnswer.value = "";
// }

// // func => display answer history and score
// const displayHistory = () => {
//   document.querySelector("#tbody").innerHTML += `
//     <tr>
//       <td>${parseInt(numOne.innerText)} ${inputOperator.value} ${parseInt(numTwo.innerText)}</td>
//       <td>${correctAnswer}</td>
//       <td>${userAnswer.value}</td>
//       <td>${score}</td>
//     </tr>
//   `;
// }

// // func => change operator on screen
// const changeOperator = () => {
//   const mathGame = document.querySelector(".math-game");
//   operator.innerHTML = inputOperator.value;

//   switch (inputOperator.value) {
//     case "+":
//       mathGame.classList.remove("subtraction", "multi", "division");
//       mathGame.classList.add("addition");
//       break;

//     case "-":
//       mathGame.classList.remove("addition", "multi", "division");
//       mathGame.classList.toggle("subtraction");
//      break;

//     case "*":
//       mathGame.classList.remove("addition", "subtraction", "division");
//       mathGame.classList.toggle("multi");
//      break;

//     case "/":
//       mathGame.classList.remove("addition", "multi", "subtraction");
//       mathGame.classList.toggle("division");
//       break;
//   }
// }

// // func => calculate the answer dependent on the choosen operator
// const calculateAnswer = () => {
//   switch (inputOperator.value) {
//     case "+":
//       return parseInt(numOne.innerText) + parseInt(numTwo.innerText);

//     case "-":
//       return parseInt(numOne.innerText) - parseInt(numTwo.innerText);

//     case "*":
//       return parseInt(numOne.innerText) * parseInt(numTwo.innerText);

//     case "/":
//       return parseInt(numOne.innerText) / parseInt(numTwo.innerText);
//   }
// }

// randomNumbers();

