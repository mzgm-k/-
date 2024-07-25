const ruby = new Array(
    "ruby_quiz_1.html",
    "ruby_quiz_2.html",
    "ruby_quiz_3.html",
    "ruby_quiz_4.html",
    "ruby_quiz_5.html"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * ruby.length);
    location.href = ruby[i];
  }