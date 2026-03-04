$(document).ready(function () {

  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var isOpen = false;

  // 🔥 ESTADO INICIAL
  envelope.addClass("close");

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
      envelope.removeClass("close").addClass("open");
      createShootingStar();
      isOpen = true;
    }

  }

  function closeEnvelope() {

    envelope.removeClass("open").addClass("close");
    isOpen = false;

  }

  function createShootingStar(){

    const star = document.createElement("div");
    star.className = "shooting-star";

    star.style.top = "-50px";
    star.style.left = "-50px";

    document.body.appendChild(star);

    setTimeout(function(){
      star.remove();
    },8000);

  }

});

