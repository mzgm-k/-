document.addEventListener("DOMContentLoaded", function() {
  const contents = document.querySelectorAll(".contents-select");

  // 初回読み込み時に全ての既読状態をリセット
  contents.forEach(content => {
    content.classList.remove('read');
    const originalText = content.textContent.replace(" (済)", "");
    content.textContent = originalText;
  });

  contents.forEach(content => {
    content.addEventListener("click", function() {
      if (!this.classList.contains("read")) {
        this.classList.add("read");
        this.innerHTML += " (済)";
      }
    });
  });
});
