// <!-- <div class="projTypes">
//     <div class="blockWords">EDU-AR</div>
//     <div class="skillsText">|| Unity 3D | Android Studio | AR Core | Tensorflow | Pandas | NumPy | Matplotlib | Keras ||</div>
//     <div class="normalText">● Developed an android application aimed at assisting preschoolers with challenges, hearing, and speech impairments.<br> ● Implemented <span class="important">Augmented Reality</span> technology in conjunction with <span class="important">deep learning models</span> such as CNN with a 95% accuracy rate, <span class="important">Image Processing</span> utilizing TensorFlow & Keras, and integrated <span class="important">Google Vision API</span> for Handwriting Analysis, as well as Sign Language assistance.<br> ● Received recognition for the <span class="important">Innovative Idea</span> award in 2020 and published a paper in the <span class="important">IOSRJEN</span> in May 2021.</div>
// </div> -->

var arrayVariable = [['00. EDU-AR','|| Unity 3D | Android Studio | AR Core | Tensorflow | Pandas | NumPy | Matplotlib | Keras ||','● Developed an android application aimed at assisting preschoolers with challenges, hearing, and speech impairments.<br> ● Implemented <span class="important">Augmented Reality</span> technology in conjunction with <span class="important">deep learning models</span> such as CNN with a 95% accuracy rate, <span class="important">Image Processing</span> utilizing TensorFlow & Keras, and integrated <span class="important">Google Vision API</span> for Handwriting Analysis, as well as Sign Language assistance.<br> ● Received recognition for the <span class="important">Innovative Idea</span> award in 2020 and published a paper in the <span class="important">IOSRJEN</span> in May 2021.',''],
                    ['01. Driver Drowsiness Detection','|| Python | OpenCV | Keras | Arduino UNO | Raspberry Pi ||'," ● Developed a Drowsiness Detector to address sleep-related accidents on the road. <br> ● Implemented Haar-cascade, OpenCV & Keras to detect drowsiness by analyzing the driver's eye state. <br> ● Integrated Arduino with GSM and GPS modules to send an SOS signal to emergency contacts.",''],
                    ['02. AssignmentX','|| Python | NumPy | Pillow | Flask | Android Studio ||',"● Developed an android application that generated assignments with a handwritten appearance, resulting in over 5000+ downloads on Play Store and 200+ daily active users. The accompanying YouTube channel received over 32K+ views. <br> ● Utilized the Pillow library in Python to process images of alphabets and incorporated a human behavioral algorithm to mimic natural handwriting. <br> ● Created an Android app and established a Web API using Flask for seamless communication with the main code.",''],
                ]
arrayLength = arrayVariable.length;

var classArray = ["blockWords", "skillsText", "normalText", "linkText"]



sampleText = "";
for (i = 0; i < arrayLength; i++) {
    sampleText += '<div class="projIndexes ' + i + '" onclick="show('+ i +')">0'+ i +'</div>';
}
document.getElementsByClassName("projTextIndexNavigation")[0].innerHTML += sampleText;


for (i = 0; i < arrayLength; i++) {
    var finalText = '<div class="projTypes '+ i +'">';
    for (j=0; j<4; j++){
        finalText += '<div class="' + classArray[j] + '">' + arrayVariable[i][j] + '</div>';
    }
    finalText += '</div>';
    document.getElementsByClassName("projectsText")[0].innerHTML += finalText;
    if (i!=0){
        document.getElementsByClassName("projTypes " + i)[0].style.display = 'none';
    }
}

function show(index){
    allData = document.getElementsByClassName('projTextIndexNavigation')[0].getElementsByClassName('projIndexes');
    for (i=0; i<arrayLength; i ++){
        if (i == index){
            document.getElementsByClassName("projTypes " + i)[0].style.display = 'block';
            document.getElementsByClassName("projIndexes " + i)[0].style.backgroundcolor = '#1fffff';
        } else{
            document.getElementsByClassName("projTypes " + i)[0].style.display = 'none';
            document.getElementsByClassName("projIndexes " + i)[0].style.backgroundcolor = 'none';
        }
    }
}
