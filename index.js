function handleClick() {
  alert("I got clicked!")
}

let drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
}
