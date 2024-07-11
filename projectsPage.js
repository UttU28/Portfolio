var arrayVariable = [
    ['00. GRE-Words (VoKyaBolRahi)','|| Python | NumPy | Pillow | Flask | Android Studio ||',"Developed Python script to automate Video Creation and Uploading (English Teaching Reels) on Instagram. Collecting raw videos using PlayPhrase.me API. Implemented FFMPEG to seamlessly overlay logos, images, and merge multiple video clips with professional-grade transitions, achieving a polished, desktop-like editing quality. Integrated WhisperAI API for automated subtitle generation, ensuring accurate timestamp and relevance. Used Pillow and FFMPEG to embed subtitles into videos at timestamps. Utilized Google Drive API for storing and organizing finalized videos, ensuring Free and scalable cloud-based storage. Managed video URLs in Azure Blob Storage in JSON format. Orchestrated workflow using Azure Logic Apps to automate video processing tasks. Integrated Logic Apps with Azure services for seamless task coordination, ensuring efficient and timely video production. Automated Instagram video uploads and configuration using Selenium. Managed login, video upload, and description configuration on the Instagram platform, enhancing social media content management.",''],
    ['01. AssignmentX','|| Python | NumPy | Pillow | Flask | Android Studio ||',"Developed 'AssignmentX' an Android / Web application leveraging Python, NumPy, Pillow, Flask, and Android Studio to create handwritten-like assignments. Achieved over 5000+ downloads on Play Store, with 200+ daily active users and 32K+ YouTube views, showcasing widespread adoption and user engagement. Utilized Pillow and OpenCV2 for precise image processing of alphabet images to simulate handwritten pages within the application. Implemented a human behavioral algorithm to enhance the authenticity of the handwritten appearance of generated assignments. Designed and deployed a Python-based backend server hosted on AWS VMs, facilitating communication between the Android app and central server. Integrated Flask to develop a Web API enabling seamless interaction between the mobile app, website, and backend services. Implemented SMTP for email functionality, enabling users to send assignments as PDF attachments directly from the application.",''],
    ['02. EDU-AR','|| Unity 3D | Android Studio | AR Core | Tensorflow | Pandas | NumPy | Matplotlib | Keras ||',"Developed 'EDU-AR' an Android application targeting preschoolers with cognitive challenges, incorporating features for hearing and speech aid. Implemented Augmented Reality (AR) using AR Core in Unity3D and integrated Deep Learning models, specifically CNNs achieving 95% accuracy, utilizing TensorFlow and Keras for image processing tasks. Integrated Google Vision API for Handwriting Analysis OCR to facilitate automatic recognition and interpretation of handwritten content within the application. Assisted with Sign Language interpretation, enhancing accessibility for users with hearing impairments. Authored and published a paper in the international journal IOSRJEN (May 2021, Volume 11, Issue 5, E-ISSN: 2250-3021), detailing the technical advancements and educational benefits of the EDU-AR application.",''],
    ['03. Driver Drowsiness Detection','|| Python | OpenCV | Keras | Arduino UNO | Raspberry Pi ||',"Developed an advanced Drowsiness Detection System aimed at mitigating sleep-related driving accidents. Utilized Haar-cascade classifiers in combination with OpenCV for real-time facial and eye state detection. Leveraged Keras to build and deploy a deep learning model for accurate drowsiness prediction. Integrated an Arduino microcontroller with GSM and GPS modules to facilitate automated SOS signal dispatch to emergency contacts, ensuring prompt response in critical situations. Employed additional tools such as Python for algorithm development and real-time data processing, and incorporated sensor fusion techniques to enhance system reliability and accuracy.",''],
];

var arrayLength = arrayVariable.length;
var classArray = ["blockWords", "skillsText", "normalText", "linkText"];

var sampleText = "";
for (var i = 0; i < arrayLength; i++) {
    sampleText += '<div class="projIndexes ' + i + '" onclick="show(' + i + ')">0' + i + '</div>';
}
document.getElementsByClassName("projTextIndexNavigation")[0].innerHTML += sampleText;

for (var i = 0; i < arrayLength; i++) {
    var finalText = '<div class="projTypes ' + i + '">';
    for (var j = 0; j < 4; j++) {
        finalText += '<div class="' + classArray[j] + '">' + arrayVariable[i][j] + '</div>';
    }
    finalText += '</div>';
    document.getElementsByClassName("projectsText")[0].innerHTML += finalText;
    if (i != 0) {
        document.getElementsByClassName("projTypes " + i)[0].style.display = 'none';
    }
}

function show(index) {
    var allData = document.getElementsByClassName('projIndexes');
    for (var i = 0; i < arrayLength; i++) {
        if (i == index) {
            document.getElementsByClassName("projTypes " + i)[0].style.display = 'block';
            allData[i].style.backgroundColor = '#1fffff';
        } else {
            document.getElementsByClassName("projTypes " + i)[0].style.display = 'none';
            allData[i].style.backgroundColor = '';
        }
    }
}
