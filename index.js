document.addEventListener("keydown", function () {
  makingSound(event.key);
  buttonAnimation(event.key);
});

var w = new Audio("sounds/tom-1.mp3");
var a = new Audio("sounds/tom-2.mp3");
var s = new Audio("sounds/tom-3.mp3");
var d = new Audio("sounds/tom-4.mp3");
var j = new Audio("sounds/snare.mp3");
var k = new Audio("sounds/crash.mp3");
var l = new Audio("sounds/kick-bass.mp3");

function makingSound(key) {
  switch (key) {
    case 'w':
      w.play();
      break;
    case 'a':
      a.play();
      break;
    case 's':
      s.play();
      break;
    case 'd':
      d.play();
      break;
    case 'j':
      j.play();
      break;
    case 'k':
      k.play();
      break;
    case 'l':
      l.play();
      break;
  }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function () {activeButton.classList.remove("pressed")},100);
}
var drumButtonList = document.querySelectorAll(".drum");
for (i = 0; i <= drumButtonList.length; i++) {
  drumButtonList[i].addEventListener("click", function () {
    makingSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
