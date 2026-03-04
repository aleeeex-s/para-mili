$(document).ready(function () {

  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_download = $("#download");

  envelope.addClass("close");
  btn_download.hide(); // oculto al inicio

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

    envelope.removeClass("close").addClass("open");
    createShootingStar();
    btn_download.fadeIn(300);

  }

  function closeEnvelope() {

    envelope.removeClass("open").addClass("close");
    btn_download.fadeOut(300);

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

  btn_download.click(function () {

    const link = document.createElement("a");
    link.href = "cartarecuerdo-mili.mp4";
    link.download = "Para_Milagros.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  });

});
