//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
)};

//Detecting Keyboard Press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

switch (key) {
  case "s":
  var tom1 = new Audio("sounds/tom-1.mp3")
  tom1.play();
  break;

  case "d":
  var tom2  = new Audio("sounds/tom-2.mp3")
  tom2.play();
  break;


  case "x":
  var tom3 = new Audio("sounds/tom-3.mp3")
  tom3.play();
  break;

  case "c":
  var tom4 = new Audio("sounds/tom-4.mp3")
  tom4.play();
  break;

  case "b":
  var kick = new Audio("sounds/kick-bass.mp3")
  kick.play();
  break;

  case "h":
  var snare = new Audio("sounds/snare.mp3")
  snare.play();
  break;

  case "j":
  var crash = new Audio("sounds/crash.mp3")
  crash.play();
  break;
  default:console.log(buttonInnerHTML);
}
}
function buttonAnimation(CurrentKey){
  var activeButton = document.querySelector("." + CurrentKey);
  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed")
  }, 100);
}

    // var audio = new Audio('./sounds/crash.mp3');
    // audio.play();
    // create function that takes char and checks it against switch statement to play correct sounds
    // call it inside event listener, inside key press and in event listener
