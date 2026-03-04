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

    star.style.top = Math.random() * 30 + 10 + "%";

    document.body.appendChild(star);

    setTimeout(function(){
      star.remove();
    },8000);

  }

});

