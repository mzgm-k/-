const javascript = new Array(
    "quiz/javascript_quiz_1.html",
    "quiz/javascript_quiz_2.html",
    "quiz/javascript_quiz_3.html",
    "quiz/javascript_quiz_4.html",
    "quiz/javascript_quiz_5.html",
    "quiz/javascript_quiz_6.html",
    "quiz/javascript_quiz_7.html",
    "quiz/javascript_quiz_8.html"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * javascript.length);
    location.href = javascript[i];
  }