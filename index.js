document.addEventListener("keydown", function (event) {
  let pressedKey = event.key;
  console.log(pressedKey);
  if (pressedKey === "w" || pressedKey === "a" || pressedKey === "s" || pressedKey === "d" || pressedKey === "j" || pressedKey === "k" || pressedKey === "l") {
      handleSounds(pressedKey);
  }

});

function handleSounds(clickedButton) {
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

function handleClick() {

  let clickedButton = this.innerHTML;
  this.style.color = "white";

  handleSounds(clickedButton);


  // Created constructor function for playing audio
//   function Audio (fileLocation) {
//     this.fileLocation = fileLocation;
//     this.play = function();
//     }
//   }
//
// let tom1 = new Audio ("sounds/tom-1.mp3");
// tom1.play();
// break;



  // switch (clickedButton) {
  //   case "w":
  //     let tom1 = new Audio("sounds/tom-1.mp3");
  //     tom1.play();
  //     break;
  //
  //   case "a":
  //     let tom2 = new Audio("sounds/tom-2.mp3");
  //     tom2.play();
  //     break;
  //
  //   case "s":
  //     let tom3 = new Audio("sounds/tom-3.mp3");
  //     tom3.play();
  //     break;
  //
  //   case "d":
  //     let tom4 = new Audio("sounds/tom-4.mp3");
  //     tom4.play();
  //     break;
  //
  //   case "j":
  //     let snare = new Audio("sounds/snare.mp3");
  //     snare.play();
  //     break;
  //
  //   case "k":
  //     let crash = new Audio("sounds/crash.mp3");
  //     crash.play();
  //     break;
  //
  //   case "l":
  //     let kickBass = new Audio("sounds/kick-bass.mp3");
  //     kickBass.play();
  //     break;
  //
  //   default: console.log(clickedButton);
  //
  // }
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
