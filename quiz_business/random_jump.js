const business = new Array(
    "business_quiz_1.html",
    "business_quiz_2.html",
    "business_quiz_3.html",
    "business_quiz_4.html",
    "business_quiz_5.html",
    "business_quiz_6.html",
    "business_quiz_7.html",
    "business_quiz_8.html"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * business.length);
    location.href = business[i];
  }