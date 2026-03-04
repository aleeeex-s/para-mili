$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
     createShootingStar(); // 🌠 estrella al abrir
  }
  
  function close() {
    envelope.addClass("close").removeClass("open");
  }
  
function createShootingStar(){
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  // posición vertical aleatoria
  star.style.top = Math.random() * 30 + 10 + "%";

  document.body.appendChild(star);

  setTimeout(function(){
    star.remove();
  },1800);
}
