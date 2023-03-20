function playSong() {
  let lagu = document.getElementById("song");

  lagu.play();
}

function handleBar() {
  const sidebar = document.getElementById("sidebar");

  sidebar.style.marginLeft = "-7%";
}
function closeBar() {
  sidebar.style.marginLeft = "100%";
}
