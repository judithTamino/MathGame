/*=============== VARIABLES ===============*/
const numOne = document.getElementById("number-1"),
  numTwo = document.getElementById("number-2");
const operator = document.querySelector(".math-operator");
const userAnswer = document.getElementById("user-answer");
const inputOperator = document.getElementById("input-operator");
let score = 0, correctAnswer;

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

  displayHistory();
  randomNumbers();
  userAnswer.value = "";
}

// func => display answer history and score
const displayHistory = () => {
  document.querySelector(".game-history").innerHTML += `
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
  operator.innerHTML = inputOperator.value;
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

