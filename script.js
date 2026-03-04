$(document).ready(function () {

  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_download = $("#download");

  envelope.addClass("close");

  btn_open.click(function () {
    openEnvelope();
  });

  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {

    envelope.removeClass("close").addClass("open");

    btn_download.fadeIn(300); // 🔥 aparece suavemente

  }

  function closeEnvelope() {

    envelope.removeClass("open").addClass("close");

    btn_download.fadeOut(300); // 🔥 desaparece

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

var btn_download = $("#download");

btn_download.click(function () {

  const link = document.createElement("a");
  link.href = "cartarecuerdo-mili.mp4"; // mismo nombre que el archivo
  link.download = "Para_Milagros.mp4";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
#download {
  display: none;
}
  
});

