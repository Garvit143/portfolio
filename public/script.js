var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");



icon.addEventListener('click', function() {
 
  icon1.classList.toggle('a');
  
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  var x = document.getElementById("sidebar-go");
  if (x.style.display === "block"){
    x.style.display ="none";
  } else {
    x.style.display = "block";
  }
  
  
  
});