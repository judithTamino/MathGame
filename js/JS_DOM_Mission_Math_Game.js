/*=============== VARIABLES ===============*/
const numOne = document.getElementById("number-1"),
  numTwo = document.getElementById("number-2");
const operator = document.getElementById("math-operator");
const userAnswer = document.getElementById("user-answer");
const inputOperator = document.getElementById("input-operator");
let score = 0, correctAnswer, totalScore = 0;


// func => generate random numbers between 1-10
const randomNumbers = () => {
  const range = parseInt(document.getElementById("input-range").value);

  numOne.innerText = Math.floor(Math.random() * range + 1);
  numTwo.innerText = Math.floor(Math.random() * range + 1);
}

// func => check if the user answer is correct
const check = () => {
  correctAnswer = calculateAnswer();

  if (userAnswer.value == correctAnswer)
    score = 10;
  else score = 0;

  // show table score and history
  document.querySelector(".game-history").classList.add("show-table");

  displayHistory();
  randomNumbers();
  userAnswer.value = "";
}

// func => display answer history and score
const displayHistory = () => {
  document.querySelector("#tbody").innerHTML += `
    <tr>
      <td>${parseInt(numOne.innerText)} ${inputOperator.value} ${parseInt(numTwo.innerText)}</td>
      <td>${correctAnswer}</td>
      <td>${userAnswer.value}</td>
      <td>${score}</td>
    </tr>
  `;
}

// func => change operator on screen
const changeOperator = () => {
  const mathGame = document.querySelector(".math-game");
  operator.innerHTML = inputOperator.value;

  switch (inputOperator.value) {
    case "+":
      mathGame.classList.remove("subtraction", "multi", "division");
      mathGame.classList.add("addition");
      break;

    case "-":
      mathGame.classList.remove("addition", "multi", "division");
      mathGame.classList.toggle("subtraction");
     break;

    case "*":
      mathGame.classList.remove("addition", "subtraction", "division");
      mathGame.classList.toggle("multi");
     break;

    case "/":
      mathGame.classList.remove("addition", "multi", "subtraction");
      mathGame.classList.toggle("division");
      break;
  }
}

// func => calculate the answer dependent on the choosen operator
const calculateAnswer = () => {
  switch (inputOperator.value) {
    case "+":
      return parseInt(numOne.innerText) + parseInt(numTwo.innerText);

    case "-":
      return parseInt(numOne.innerText) - parseInt(numTwo.innerText);

    case "*":
      return parseInt(numOne.innerText) * parseInt(numTwo.innerText);

    case "/":
      return parseInt(numOne.innerText) / parseInt(numTwo.innerText);
  }
}

randomNumbers();

