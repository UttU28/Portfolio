// <!-- <div class="expTypes">
//     <div class="blockWords">EDU-AR</div>
//     <div class="skillsText">|| Unity 3D | Android Studio | AR Core | Tensorflow | Pandas | NumPy | Matplotlib | Keras ||</div>
//     <div class="normalText">● Developed an android application aimed at assisting preschoolers with challenges, hearing, and speech impairments.<br> ● Implemented <span class="important">Augmented Reality</span> technology in conjunction with <span class="important">deep learning models</span> such as CNN with a 95% accuracy rate, <span class="important">Image Processing</span> utilizing TensorFlow & Keras, and integrated <span class="important">Google Vision API</span> for Handwriting Analysis, as well as Sign Language assistance.<br> ● Received recognition for the <span class="important">Innovative Idea</span> award in 2020 and published a paper in the <span class="important">IOSRJEN</span> in May 2021.</div>
// </div> -->

var arrayVariable = [['00. EDU-VRoKCs, Kansas City, United States','|| Machine Learning Intern | Sept 2021 - Dec 2021 ||',' ● Developed a project based on translating and augmenting Sign Language using ML and Augmented Reality. <br> ● Utilized MobileNet V2 as a transfer learning model and fine-tuned it to meet the specific needs of the project. <br> ● Designed a TensorFlow Lite model based on algorithms that demonstrated promising results, achieving 28mAP. <br>● Collaborated with developers to integrate the model with augmented reality, creating a seamless user experience.',''],
                    ['01. Compendious Medialabs Pvt. Ltd, India','|| Software Engineering Intern | Jan 2021 - Apr 2021 ||'," ● Developed, designed, and coded a Python bot to aggregate data from over 200 news websites. <br> ● Implemented logic to retrieve articles from RSS feeds, scraped and sanitized them to align with the database design. <br> ● Managed and structured data, uploaded it to a MySQL server, and connected it to the frontend.", ''],
                    ['02. underDOGS Gaming Studio, India','|| Game Developer Intern | Jun 2019 - Jul 2019 ||','● Integrated a universal gaming currency called "Quarters" into various games for the client utilizing the Quarters API. <br> ● Incorporated the API into a universal platform game and utilized secure methods for coin transactions. <br> ● Improved existing code to reduce bugs, resulting in a smoother-running product, using C# and Unity3D.',''],
                ]
arrayLength = arrayVariable.length;

var classArray = ["blockWords", "skillsText", "normalText", "linkText"]



sampleText = "";
for (i = 0; i < arrayLength; i++) {
    sampleText += '<div class="expIndexes ' + i + '" onclick="showExp('+ i +')">0'+ i +'</div>';
}
document.getElementsByClassName("expTextIndexNavigation")[0].innerHTML += sampleText;


for (i = 0; i < arrayLength; i++) {
    var finalText = '<div class="expTypes '+ i +'">';
    for (j=0; j<4; j++){
        finalText += '<div class="' + classArray[j] + '">' + arrayVariable[i][j] + '</div>';
    }
    finalText += '</div>';
    document.getElementsByClassName("experienceText")[0].innerHTML += finalText;
    if (i!=0){
        document.getElementsByClassName("expTypes " + i)[0].style.display = 'none';
    }
}

function showExp(index){
    allData = document.getElementsByClassName('expTextIndexNavigation')[0].getElementsByClassName('expIndexes');
    for (i=0; i<arrayLength; i ++){
        if (i == index){
            document.getElementsByClassName("expTypes " + i)[0].style.display = 'block';
            document.getElementsByClassName("expIndexes " + i)[0].style.backgroundcolor = '#1fffff';
        } else{
            document.getElementsByClassName("expTypes " + i)[0].style.display = 'none';
            document.getElementsByClassName("expIndexes " + i)[0].style.backgroundcolor = 'none';
        }
    }
}
