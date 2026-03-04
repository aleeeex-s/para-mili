$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

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
    envelope.addClass("open").removeClass("close");
    createShootingStar();
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
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
