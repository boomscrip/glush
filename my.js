

//
// window.onload = setInterval(function() {
//   // var xme = document.querySelector(".t-tildalabel").remove();
//     var xme = document.querySelector(".t-tildalabel");
//     xme.style.setProperty('display', 'none', 'important','important');
//     document.querySelector(".t-tildalabel").remove();
// stop();
// },2500);
//
//
// function stop() {
//   clearInterval(interval);
// }


window.onload = function my() {

var intervalID = setInterval(load_new_msg, 1000);

function load_new_msg(){
  var xme = document.querySelector(".t-tildalabel");
  console.log(xme);
  if(xme === null){
    clearInterval(intervalID);
    // console.log('удалил');
  }else {
    document.querySelector(".t-tildalabel").remove();
    my();
  }


}



}
