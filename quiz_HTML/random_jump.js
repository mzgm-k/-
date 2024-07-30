const html = new Array(
    "html_quiz_1.html",
    "html_quiz_2.html",
    "html_quiz_3.html",
    "html_quiz_4.html",
    "html_quiz_5.html"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * html.length);
    location.href = html[i];
  }