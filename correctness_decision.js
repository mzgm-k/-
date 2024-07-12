// script.js

const quizData = [
  {
    question: "ここに問題文が表示されます1",
    options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
    correctIndex: 0,
    explanations: ["解説文1", "解説文2", "解説文3", "解説文4"]
  },
  {
    question: "ここに問題文が表示されます2",
    options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
    correctIndex: 1,
    explanations: ["解説文1", "解説文2", "解説文3", "解説文4"]
  }
  // 他の問題も追加可能
];

let currentQuestionIndex = 0;
let selectedOptionIndex = null;

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  const options = document.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].innerText = currentQuestion.options[i];
    options[i].classList.remove("selected");
  }
  document.getElementById("result").style.display = "none";
  const explanations = document.getElementsByClassName("explanations");
  for (let i = 0; i < explanations.length; i++) {
    explanations[i].style.display = "none";
  }
  document.getElementById("overlay").style.display = "none"; // オーバーレイを隠す
}

function selectOption(index) {
  selectedOptionIndex = index;
  const options = document.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("selected");
  }
  options[index].classList.add("selected");
}

function checkAnswer() {
  const currentQuestion = quizData[currentQuestionIndex];
  const result = document.getElementById("result");
  const overlay = document.getElementById("overlay");
  const symbol = document.createElement("div");
  symbol.classList.add("symbol");

  if (selectedOptionIndex === currentQuestion.correctIndex) {
    result.innerText = "〇";
    result.className = "correctness_decision correct";
    symbol.innerText = "〇";
    symbol.style.color = "green";
  } else {
    result.innerText = "✕";
    result.className = "correctness_decision incorrect";
    symbol.innerText = "×";
    symbol.style.color = "red";
  }
  result.style.display = "block";

  const explanations = document.getElementsByClassName("explanations");
  for (let i = 0; i < explanations.length; i++) {
    explanations[i].innerText = currentQuestion.explanations[i];
    explanations[i].style.display = "block";
  }

  overlay.innerHTML = ""; // 既存のシンボルをクリア
  overlay.appendChild(symbol);
  overlay.style.display = "flex"; // オーバーレイを表示

  setTimeout(() => {
    overlay.style.display = "none"; // 1秒後にオーバーレイを非表示
  }, 1000);
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  }
}

document.getElementById("answer-button").addEventListener("click", checkAnswer);
document.getElementById("navigation").children[0].addEventListener("click", prevQuestion);
document.getElementById("navigation").children[1].addEventListener("click", nextQuestion);

// 初期表示
displayQuestion();
