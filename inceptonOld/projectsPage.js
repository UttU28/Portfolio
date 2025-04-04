var arrayVariable = [
    ['00. GRE-Words (VoKyaBolRahi)','|| Python | NumPy | Pillow | Flask | Android Studio ||',"Developed Python script to automate Video Creation and Uploading (English Teaching Reels) on Instagram. Collecting raw videos using PlayPhrase.me API. Implemented FFMPEG to seamlessly overlay logos, images, and merge multiple video clips with professional-grade transitions, achieving a polished, desktop-like editing quality. Integrated WhisperAI API for automated subtitle generation, ensuring accurate timestamp and relevance. Used Pillow and FFMPEG to embed subtitles into videos at timestamps. Utilized Google Drive API for storing and organizing finalized videos, ensuring Free and scalable cloud-based storage. Managed video URLs in Azure Blob Storage in JSON format. Orchestrated workflow using Azure Logic Apps to automate video processing tasks. Integrated Logic Apps with Azure services for seamless task coordination, ensuring efficient and timely video production. Automated Instagram video uploads and configuration using Selenium. Managed login, video upload, and description configuration on the Instagram platform, enhancing social media content management.",''],
    ['01. PopularityChart','|| Python | Pandas | NumPy | Flask | Charts.js ||',"This project involved leveraging data science and social media analysis to identify key success factors for songs and artists on YouTube. Python was used to create ETL data pipelines for collecting data from NewsAPI, Reddit, YouTube Music, and ModerateHateSpeechAPI. Given the volatile nature of Reddit data, a script was implemented to collect real-time data. The ETL process used pandas for filtering and organizing data, handling duplicates and null values, and storing the cleaned data in MongoDB. The project analyzed the popularity of artists and songs, examined the influence of news, measured hate speech in YouTube comments and Reddit channels, and evaluated user engagement. It explored the correlation between Reddit and YouTube popularity. The web interface, developed using Flask, displayed the findings with dynamic charts powered by Charts.js, which updated based on filters.",''],
    ['02. EDU-AR','|| Unity 3D | Android Studio | AR Core | Tensorflow | Pandas | NumPy | Matplotlib | Keras ||',"Developed 'EDU-AR' an Android application targeting preschoolers with cognitive challenges, incorporating features for hearing and speech aid. Implemented Augmented Reality (AR) using AR Core in Unity3D and integrated Deep Learning models, specifically CNNs achieving 95% accuracy, utilizing TensorFlow and Keras for image processing tasks. Integrated Google Vision API for Handwriting Analysis OCR to facilitate automatic recognition and interpretation of handwritten content within the application. Assisted with Sign Language interpretation, enhancing accessibility for users with hearing impairments. Authored and published a paper in the international journal IOSRJEN (May 2021, Volume 11, Issue 5, E-ISSN: 2250-3021), detailing the technical advancements and educational benefits of the EDU-AR application.",''],
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
