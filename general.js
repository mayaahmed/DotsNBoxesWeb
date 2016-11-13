

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }}


  function applaud(n, string){
    console.log(string);
document.getElementById("victoryDiv").innerHTML = string;

  if(n==1)
var audio = new Audio('applause.mp3');
  if(n==0)
var audio = new Audio('boo.mp3');
audio.play();

}

