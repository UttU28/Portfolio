// <!-- <div class="expTypes">
//     <div class="blockWords">EDU-AR</div>
//     <div class="skillsText">|| Unity 3D | Android Studio | AR Core | Tensorflow | Pandas | NumPy | Matplotlib | Keras ||</div>
//     <div class="normalText">● Developed an android application aimed at assisting preschoolers with challenges, hearing, and speech impairments. ● Implemented <span class="important">Augmented Reality</span> technology in conjunction with <span class="important">deep learning models</span> such as CNN with a 95% accuracy rate, <span class="important">Image Processing</span> utilizing TensorFlow & Keras, and integrated <span class="important">Google Vision API</span> for Handwriting Analysis, as well as Sign Language assistance. ● Received recognition for the <span class="important">Innovative Idea</span> award in 2020 and published a paper in the <span class="important">IOSRJEN</span> in May 2021.</div>
// </div> -->

// var arrayVariable = [['00. Midh Tech, Remote USA','|| Python Web Software Developer - DevOps | Feb 2024 - Present ||',' Developed high-performance RESTful APIs using Python and Flask on Azure Cloud for finance data transactions. JSON-based services adhered strictly to JSON Schema for precise data validation and structuring, integrating Azure Redis Cache for effective caching strategies. Backend services on Azure App Service included OAuth 2.0 authentication with role-based access control (RBAC). I designed interactive web interfaces using HTML, CSS, JavaScript, and jQuery to optimize user interaction and facilitate clear financial data visualization. Test cases developed with pytest and unittest ensured functionality, performance, and security, seamlessly integrated into the DevOps Pipeline with Postman for comprehensive API testing. ',''],
//                     ['01. Compendious Medialabs Pvt. Ltd, India','|| Python Data Engineer (I) | Sept 2021 - Aug 2022 ||',' Developed Python scripts using BeautifulSoup and Scrapy for automated news feed scraping, and implemented Selenium Headless on AWS EC2 for scheduled data extraction. Utilized NumPy and Pandas for data filtering and preprocessing. Created a Django-based data dashboard with live updates from DynamoDB, using D3.js and Chart.js for interactive visualizations. Assisted in developing a scalable scraping bot on AWS Lambda with CloudWatch integration for scheduling and monitoring. Supported NLP tasks with NLTK and spaCy for news article classification and sentiment analysis, enhancing text analysis skills. ',''],
//                     ['02. underDOGS Gaming Studio, India','|| Ansible/Cloud Engineer | Dec 2019 - June 2020 ||',' Integrated and optimized the Quarters API for universal gaming currency transactions across multiple games, establishing player wallets and enabling secure transactions and points conversion. Developed Python scripts to integrate cloud storage, social media sharing, and payment gateway APIs. Assisted in implementing secure transaction methods within Unity3D, following API best practices for safeguarding in-game currency transactions and user data privacy. Identified and resolved critical bugs in API codebases and improved real-time data sync and communication using Python and C#. Optimized API response times through code refactoring and caching strategies, and implemented unit tests to ensure reliable functionality across game updates. ', ''],
//                 ]
var arrayVariable = [
    ['03. AssignmentX','|| Python | NumPy | Pillow | Flask | Android Studio ||',"Developed 'AssignmentX' an Android / Web application leveraging Python, NumPy, Pillow, Flask, and Android Studio to create handwritten-like assignments. Achieved over 5000+ downloads on Play Store, with 200+ daily active users and 32K+ YouTube views, showcasing widespread adoption and user engagement. Utilized Pillow and OpenCV2 for precise image processing of alphabet images to simulate handwritten pages within the application. Implemented a human behavioral algorithm to enhance the authenticity of the handwritten appearance of generated assignments. Designed and deployed a Python-based backend server hosted on AWS VMs, facilitating communication between the Android app and central server. Integrated Flask to develop a Web API enabling seamless interaction between the mobile app, website, and backend services. Implemented SMTP for email functionality, enabling users to send assignments as PDF attachments directly from the application.",''],
    ['04. Driver Drowsiness Detection','|| Python | OpenCV | Keras | Arduino UNO | Raspberry Pi ||',"Developed an advanced Drowsiness Detection System aimed at mitigating sleep-related driving accidents. Utilized Haar-cascade classifiers in combination with OpenCV for real-time facial and eye state detection. Leveraged Keras to build and deploy a deep learning model for accurate drowsiness prediction. Integrated an Arduino microcontroller with GSM and GPS modules to facilitate automated SOS signal dispatch to emergency contacts, ensuring prompt response in critical situations. Employed additional tools such as Python for algorithm development and real-time data processing, and incorporated sensor fusion techniques to enhance system reliability and accuracy.",''],
];
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
