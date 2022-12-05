window.onscroll = function() {myFunction()};
        
var header = document.getElementById("headerTop");
var sticky = header-top.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header-top.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}