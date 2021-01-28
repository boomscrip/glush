// document.querySelector(".t-tildalabel").remove();
//
window.onload = function() {
  var xme = document.querySelector(".t-tildalabel").remove();
  restore();
}
function restore() {

  // document.querySelectorAll("div.t-tildalabel").remove();

  document.querySelectorAll(".t-tildalabel").forEach(e => e.parentNode.removeChild(e));
}
