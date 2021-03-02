window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {

if (window.pageYOffset < sticky) {
    console.log(window.pageYOffset, sticky);

    header.classList.add("sticky");
    sticky = window.pageYOffset;

  } else {
    header.classList.remove("sticky");
    sticky = window.pageYOffset;

  }
}