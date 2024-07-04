document.addEventListener("DOMContentLoaded", function() {
  const contents = document.querySelectorAll(".contents-select");

  contents.forEach(content => {
    content.addEventListener("click", function() {
      if (!this.classList.contains("read")) {
        this.classList.add("read");
        this.innerHTML += " (既読)";
      }
    });
  });
});
