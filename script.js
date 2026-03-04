$(document).ready(function () {

  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var isOpen = false; // control manual

  envelope.click(function () {
    openEnvelope();
  });

  btn_open.click(function () {
    openEnvelope();
  });

  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {

    if (!isOpen) {
      envelope.addClass("open").removeClass("close");
      createShootingStar();
      isOpen = true;
    }

  }

  function closeEnvelope() {

    envelope.addClass("close").removeClass("open");
    isOpen = false;

  }

function createShootingStar(){

  const star = document.createElement("div");
  star.className = "shooting-star";

  // Punto inicial (siempre fuera a la izquierda)
  const startY = window.innerHeight * 0.25;

  // Punto final (siempre hacia abajo a la derecha)
  const endX = window.innerWidth * 1.2;
  const endY = window.innerHeight * 0.5;

  star.style.top = startY + "px";
  star.style.left = "-300px";

  // Variables dinámicas para CSS
  star.style.setProperty("--end-x", endX + "px");
  star.style.setProperty("--end-y", endY + "px");

  document.body.appendChild(star);

  setTimeout(function(){
    star.remove();
  },8000);

}
