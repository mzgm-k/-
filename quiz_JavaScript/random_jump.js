const javascript = new Array(
    "#",
    "#"
    // 追加した出題ページの相対パスを追加してください。
);

  function random_jump() {
    const i = Math.floor(Math.random() * javascript.length);
    location.href = javascript[i];
  }