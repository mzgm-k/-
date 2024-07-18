// quiz.js

function checkAnswer() {
  let selectedAnswer = document.querySelector('input[name="answer"]:checked');
  let quizBody = document.getElementById('quiz-body');
  let resultDiv = document.getElementById('quiz-result');
  let explanationDiv = document.getElementById('quiz-explanation');
  
  resultDiv.style.display = 'block'; // 結果表示を表示
  
  if (selectedAnswer === null) {
    document.getElementById('quiz-result').innerHTML = '<p>回答を選択してください。</p>';
    return;
  }
  
  let userAnswer = selectedAnswer.value;
  let correctAnswer = 'correct'; // 正しい回答の値

  if (userAnswer === correctAnswer) {
    resultDiv.innerHTML = '<div class="quiz_correct_answer">&#9675;</div>'; // 正解の記号
  } else {
    resultDiv.innerHTML = '<div class="quiz_incorrect_answer">&#10005;</div>'; // 不正解の記号
  }

  quizBody.style.overflow = 'scroll';
  explanationDiv.style.display = 'block'; // 解説文を表示
}
