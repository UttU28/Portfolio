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

function Home1() {
    document.getElementById("Home").style.cursor = "cell";
    document.getElementById("Home").style.boxShadow = blueBorder;
  document.getElementById("Home").style.fontSize = hindiFontSize;
  document.getElementById("Home").style.fontFamily = hindiFontFamily;
  document.getElementById("Home").style.color = "#4DEEEA";
  document.getElementById("Home").value = "घर";
  setTimeout("Home2()", delayTime);
}
function Home2() {
  document.getElementById("Home").style.fontSize = englishFontSize;
  document.getElementById("Home").style.fontFamily = englishFontFamily;
//   document.getElementById("Home").style.color = "#1fffff";
  document.getElementById("Home").value = "00.Home";
}

function Portfolio1() {
    document.getElementById("Portfolio").style.cursor = "cell";
document.getElementById("Portfolio").style.boxShadow = greenBorder;
document.getElementById("Portfolio").style.fontSize = hindiFontSize;
  document.getElementById("Portfolio").style.fontFamily = hindiFontFamily;
  document.getElementById("Portfolio").style.color = "#74EE15";
  document.getElementById("Portfolio").value = "पोर्टफोलियो";
  setTimeout("Portfolio2()", delayTime);
}
function Portfolio2() {
document.getElementById("Portfolio").style.fontSize = englishFontSize;
  document.getElementById("Portfolio").style.fontFamily = englishFontFamily;
//   document.getElementById("Portfolio").style.color = "#1fffff";
  document.getElementById("Portfolio").value = "01.Portfolio";
}

function Session1() {
document.getElementById("Session").style.cursor = "cell";
document.getElementById("Session").style.boxShadow = yellowBorder;
document.getElementById("Session").style.fontSize = hindiFontSize;
  document.getElementById("Session").style.fontFamily = hindiFontFamily;
  document.getElementById("Session").style.color = "#FFE700";
  document.getElementById("Session").value = "कार्यशाला";
  setTimeout("Session2()", delayTime);
}
function Session2() {
document.getElementById("Session").style.fontSize = englishFontSize;
  document.getElementById("Session").style.fontFamily = englishFontFamily;
//   document.getElementById("Session").style.color = "#1fffff";
  document.getElementById("Session").value = "02.Workshop";
}

function About1() {
document.getElementById("About").style.cursor = "cell";
document.getElementById("About").style.boxShadow = pinkBorder;
document.getElementById("About").style.fontSize = hindiFontSize;
  document.getElementById("About").style.fontFamily = hindiFontFamily;
  document.getElementById("About").style.color = "#F000FF";
  document.getElementById("About").value = "मैं";
  setTimeout("About2()", delayTime);
}
function About2() {
  document.getElementById("About").style.fontSize = englishFontSize;
  document.getElementById("About").style.fontFamily = englishFontFamily;
//   document.getElementById("About").style.color = "#1fffff";
  document.getElementById("About").value = "03.About";
}

function Contact1() {
document.getElementById("Contact").style.cursor = "cell";
document.getElementById("Contact").style.boxShadow = dblueBorder;
document.getElementById("Contact").style.fontSize = hindiFontSize;
  document.getElementById("Contact").style.fontFamily = hindiFontFamily;
  document.getElementById("Contact").style.color = "#001EFF";
  document.getElementById("Contact").value = "कांटेक्ट";
  setTimeout("Contact2()", delayTime);
}
function Contact2() {
  document.getElementById("Contact").style.fontSize = englishFontSize;
  document.getElementById("Contact").style.fontFamily = englishFontFamily;
//   document.getElementById("Contact").style.color = "#1fffff";
  document.getElementById("Contact").value = "04.Contact";
}


function logoReveal(){
  console.log("HIT");
  document.getElementsByClassName("logo")[0].style.display = "block";
  // document.getElementsByClassName("outerLogo")[0].
}