const html = new Array(
    "html_quizu_1.html",
    "html_quizu_2.html",
    "html_quizu_3.html",
    "html_quizu_4.html",
    "html_quizu_5.html"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * html.length);
    location.href = html[i];
  }