const css = new Array(
    "css_quiz_1.html",
    "css_quiz_2.html",
    "css_quiz_3.html",
    "css_quiz_4.html",
    "css_quiz_5.html",
    "css_quiz_6.html"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * css.length);
    location.href = css[i];
  }