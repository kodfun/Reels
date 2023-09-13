const dark = document.getElementById("dark");

window.onmousemove = function(e) {
  const x = e.x / window.innerWidth * 100;
  const y = e.y / window.innerHeight * 100;
  dark.style.background = `radial-gradient(
    circle at ${x}% ${y}%, 
    transparent, rgba(0, 0, 0, .9) 150px, black
  )`;
};