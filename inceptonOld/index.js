window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("reload");
  image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}


console.log("Initiating Animatin JS");

function applyclassrubber(index) {
  var letters = document.getElementsByClassName("letter");
//   console.log(letters[index].innerHTML);
  letters[index].classList.add('rubberfont');
  setTimeout(() => letters[index].classList.remove('rubberfont'), 1000);
}