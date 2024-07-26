const css = new Array(
    "css_quizu_1.html",
    "css_quizu_2.html",
    "css_quizu_3.html",
    "css_quizu_4.html",
    "css_quizu_5.html",
    "css_quizu_6.html"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * css.length);
    location.href = css[i];
  }