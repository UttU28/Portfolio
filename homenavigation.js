delayTime = 800;
hindiFontSize = "22px";
englishFontSize = "35px";
hindiFontFamily = "hindiFont";
englishFontFamily = "codeFont";

blueBorder = "0 1px 2px rgba(0,0,0, 0.6), 2px 1px 4px rgba(0,0,0, 0.3), 2px 4px 3px rgba(3,0,128, 0.3), 0 0 7px 2px rgba(0,208,255, 0.6), inset 0 1px 2px rgba(0,0,0, 0.6), inset 2px 1px 4px rgba(0,0,0, 0.3), inset 2px 4px 3px rgba(3,0,128, 0.3), inset 0 0 7px 2px rgba(0,208,255, 0.6)";
greenBorder = "0 1px 2px rgba(0, 0, 0, 0.6), 2px 1px 4px rgba(0, 0, 0, 0.3), 2px 4px 3px rgba(4, 128, 0, 0.3), 0 0 7px 2px rgba(9, 255, 0, 0.6), inset 0 1px 2px rgba(0,0,0, 0.6), inset 2px 1px 4px rgba(0,0,0, 0.3), inset 2px 4px 3px rgba(11, 128, 0, 0.3), inset 0 0 7px 2px rgba(43, 255, 0, 0.6)";
yellowBorder = "0 1px 2px rgba(0, 0, 0, 0.6), 2px 1px 4px rgba(0, 0, 0, 0.3), 2px 4px 3px rgba(128, 126, 0, 0.3), 0 0 7px 2px rgba(255, 251, 0, 0.6), inset 0 1px 2px rgba(0,0,0, 0.6), inset 2px 1px 4px rgba(0,0,0, 0.3), inset 2px 4px 3px rgba(126, 128, 0, 0.3), inset 0 0 7px 2px rgba(255, 251, 0, 0.6)";
pinkBorder = "0 1px 2px rgba(0, 0, 0, 0.6), 2px 1px 4px rgba(0, 0, 0, 0.3), 2px 4px 3px rgba(128, 0, 128, 0.3), 0 0 7px 2px rgba(255, 0, 242, 0.6), inset 0 1px 2px rgba(0,0,0, 0.6), inset 2px 1px 4px rgba(0,0,0, 0.3), inset 2px 4px 3px rgba(124, 0, 128, 0.3), inset 0 0 7px 2px rgba(234, 0, 255, 0.6)";
dblueBorder = "0 1px 2px rgba(0, 0, 0, 0.6), 2px 1px 4px rgba(0, 0, 0, 0.3), 2px 4px 3px rgba(13, 0, 128, 0.3), 0 0 7px 2px rgba(17, 0, 255, 0.6), inset 0 1px 2px rgba(0,0,0, 0.6), inset 2px 1px 4px rgba(0,0,0, 0.3), inset 2px 4px 3px rgba(13, 0, 128, 0.3), inset 0 0 7px 2px rgba(25, 0, 255, 0.6)";

blueShaddow = "-2px 4px 4px #091243, 0 0 10px #00D0FF,inset 1px 1px 1px white";
greenShaddow = "-2px 4px 4px #134309, 0 0 10px #33ff00,inset 1px 1px 1px white";
yellowShaddow = "-2px 4px 4px #424309, 0 0 10px #fffb00,inset 1px 1px 1px white";
pinkShaddow = "-2px 4px 4px #3e0943, 0 0 10px #ea00ff,inset 1px 1px 1px white";
dblueShaddow = "-2px 4px 4px #090d43, 0 0 10px #0004ff,inset 1px 1px 1px white";

function About1() {
    document.getElementById("About").style.cursor = "cell";
    document.getElementById("About").style.boxShadow = blueBorder;
  document.getElementById("About").style.fontSize = hindiFontSize;
  document.getElementById("About").style.fontFamily = hindiFontFamily;
  document.getElementById("About").style.color = "#4DEEEA";
  document.getElementById("About").value = "मैं";
  setTimeout("About2()", delayTime);
}
function About2() {
  document.getElementById("About").style.fontSize = englishFontSize;
  document.getElementById("About").style.fontFamily = englishFontFamily;
//   document.getElementById("About").style.color = "#1fffff";
  document.getElementById("About").value = "00.About";
}

function Projects1() {
    document.getElementById("Projects").style.cursor = "cell";
document.getElementById("Projects").style.boxShadow = greenBorder;
document.getElementById("Projects").style.fontSize = hindiFontSize;
  document.getElementById("Projects").style.fontFamily = hindiFontFamily;
  document.getElementById("Projects").style.color = "#74EE15";
  document.getElementById("Projects").value = "काम";
  setTimeout("Projects2()", delayTime);
}
function Projects2() {
document.getElementById("Projects").style.fontSize = englishFontSize;
  document.getElementById("Projects").style.fontFamily = englishFontFamily;
//   document.getElementById("Projects").style.color = "#1fffff";
  document.getElementById("Projects").value = "01.Projects";
}

function Experience1() {
document.getElementById("Experience").style.cursor = "cell";
document.getElementById("Experience").style.boxShadow = yellowBorder;
document.getElementById("Experience").style.fontSize = hindiFontSize;
  document.getElementById("Experience").style.fontFamily = hindiFontFamily;
  document.getElementById("Experience").style.color = "#FFE700";
  document.getElementById("Experience").value = "अनुभव";
  setTimeout("Experience2()", delayTime);
}
function Experience2() {
document.getElementById("Experience").style.fontSize = englishFontSize;
  document.getElementById("Experience").style.fontFamily = englishFontFamily;
//   document.getElementById("Experience").style.color = "#1fffff";
  document.getElementById("Experience").value = "02.Experience";
}

function YouTube1() {
document.getElementById("YouTube").style.cursor = "cell";
document.getElementById("YouTube").style.boxShadow = pinkBorder;
document.getElementById("YouTube").style.fontSize = hindiFontSize;
  document.getElementById("YouTube").style.fontFamily = hindiFontFamily;
  document.getElementById("YouTube").style.color = "#F000FF";
  document.getElementById("YouTube").value = "यूट्यूब";
  setTimeout("YouTube2()", delayTime);
}
function YouTube2() {
  document.getElementById("YouTube").style.fontSize = englishFontSize;
  document.getElementById("YouTube").style.fontFamily = englishFontFamily;
//   document.getElementById("YouTube").style.color = "#1fffff";
  document.getElementById("YouTube").value = "03.YouTube";
}

function Resume1() {
document.getElementById("Resume").style.cursor = "cell";
document.getElementById("Resume").style.boxShadow = dblueBorder;
document.getElementById("Resume").style.fontSize = hindiFontSize;
  document.getElementById("Resume").style.fontFamily = hindiFontFamily;
  document.getElementById("Resume").style.color = "#001EFF";
  document.getElementById("Resume").value = "सी.वी";
  setTimeout("Resume2()", delayTime);
}
function Resume2() {
  document.getElementById("Resume").style.fontSize = englishFontSize;
  document.getElementById("Resume").style.fontFamily = englishFontFamily;
//   document.getElementById("Resume").style.color = "#1fffff";
  document.getElementById("Resume").value = "04.Resume";
}


function logoReveal(){
  console.log("HIT");
  document.getElementsByClassName("logo")[0].style.display = "block";
  // document.getElementsByClassName("outerLogo")[0].
}