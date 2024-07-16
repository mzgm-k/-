var mylink = new Array(
    "#",
    "#"
  );
  function random_jump() {
    var i = Math.floor(Math.random() * mylink.length);
    location.href = mylink[i];
  }