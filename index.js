function handleClick() {

  let clickedButton = this.innerHTML;
  this.style.color = "white";

  if (clickedButton == "w") {
    let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }

  if (clickedButton == "a") {
    let audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }

  if (clickedButton == "s") {
    let audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }

  if (clickedButton == "d") {
    let audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }

  if (clickedButton == "j") {
    let audio = new Audio("sounds/snare.mp3");
    audio.play();
  }

  if (clickedButton == "k") {
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (clickedButton == "l") {
    let audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mayhem(nbIt) {
  let min = 0;
  let max = drums.length -1;
  for (let j = 0; j <  nbIt; j++) {
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    drums[rand].click();
    await sleep(100);
  }
}

let drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}
