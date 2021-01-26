// scripting file for Personal Portfolio Project//


function myMovefn() {
  var elem = document.getElementById("firstNameSlideIn");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
}





