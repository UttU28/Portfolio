// <!-- <div class="expTypes">
//     <div class="blockWords">EDU-AR</div>
//     <div class="skillsText">|| Unity 3D | Android Studio | AR Core | Tensorflow | Pandas | NumPy | Matplotlib | Keras ||</div>
//     <div class="normalText">● Developed an android application aimed at assisting preschoolers with challenges, hearing, and speech impairments. ● Implemented <span class="important">Augmented Reality</span> technology in conjunction with <span class="important">deep learning models</span> such as CNN with a 95% accuracy rate, <span class="important">Image Processing</span> utilizing TensorFlow & Keras, and integrated <span class="important">Google Vision API</span> for Handwriting Analysis, as well as Sign Language assistance. ● Received recognition for the <span class="important">Innovative Idea</span> award in 2020 and published a paper in the <span class="important">IOSRJEN</span> in May 2021.</div>
// </div> -->

var arrayVariable = [['00. TransAmerica, Remote USA','|| Azure/Cloud DevOps Engineer | Jan 2023 - Present ||',' Successfully transitioned on-premises applications to Azure Cloud, leveraging services like Blob Storage, Azure SQL Database, and Azure DevOps. Implemented network configurations, VPN tunneling, and hybrid connectivity solutions such as Azure VPN and ExpressRoute. Managed and automated infrastructure provisioning using Terraform, Bicep templates, and Ansible, and integrated CI/CD pipelines with security tools such as SonarQube, OWASP ZAP, Checkmarx, Snyk, and Veracode. Orchestrated containerized applications using Docker and Kubernetes, enhancing deployment efficiency and reliability, and utilized Helm charts for managing Kubernetes applications. Deployed .NET and Java microservices, ensuring seamless integration and performance across Azure environments.',''],
                    ['01. Softline Solutions Pvt. Ltd, India','|| Ansible/Cloud Engineer | July 2020 - July 2022 ||',' Designed cloud-native solutions leveraging Azure Storage and Azure SQL, and implemented event-driven architectures using serverless functions managed through GitHub Actions. Developed CI/CD pipelines with GitHub Actions, integrating code testing tools like pytest and unittest for Python, and security scanning with CodeQL. Orchestrated infrastructure deployment using Terraform and Bicep templates, and optimized application deployment with a staged deployment strategy, Azure Monitor, Prometheus, and Grafana for real-time monitoring and analytics. Containerized applications using Docker, managed deployments on Azure Kubernetes Service (AKS), and ensured security with Azure Key Vault and role-based access control (RBAC).', ''],
                    ['02. Compendious Medialabs Pvt. Ltd, India','|| Ansible/Cloud Engineer | Dec 2019 - June 2020 ||',' Developed custom Ansible modules in Python and automated tasks using in-line scripts for Ansible and Terraform with Bash, Python, Shell, and PowerShell. Maintained scripts to enhance productivity, used Ansible for Configuration Management, collaborated on CI/CD pipelines, and tested Jenkins for continuous integration. Proficient with DevOps tools such as Docker, Kubernetes, Jenkins, Ansible, and Terraform, and experienced with Infrastructure as Code (IaC) tools like ARM templates and Terraform. ',''],
                    ['03. Compendious Medialabs Pvt. Ltd, India','|| Python Engineer (Intern) | May 2019 - Dec 2019 ||',' Developed Python scripts for task automation using APIs, web scraping, and testing with Selenium. Utilized libraries like requests, Pandas, and NumPy for data handling, and databases for storage and retrieval. Leveraged Redis for caching to enhance performance, integrated RSS feed handling, and utilized Azure services for scalable infrastructure. Implemented end-to-end automation workflows and developed internal tools to increase team productivity and efficiency. ',''],
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
