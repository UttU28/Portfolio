import {
  SiGithub,
  SiYoutube,
  SiInstagram,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import type { IconType } from "react-icons";
import greWordsPreview from "@/assets/projects/gre-words.jpg";
import popularityChartPreview from "@/assets/projects/popularity-chart.jpg";
import eduArPreview from "@/assets/projects/edu-ar.jpg";

export type NavItem = {
  id: string;
  href: string;
  label: string;
  hindi: string;
  color: string;
  shadowVar: string;
  borderVar: string;
  download?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "About",
    href: "#about",
    label: "00.About",
    hindi: "मैं",
    color: "#4DEEEA",
    shadowVar: "var(--blue-text-shadow)",
    borderVar: "var(--blue-border)",
  },
  {
    id: "Projects",
    href: "#projects",
    label: "01.Projects",
    hindi: "काम",
    color: "#74EE15",
    shadowVar: "var(--green-text-shadow)",
    borderVar: "var(--green-border)",
  },
  {
    id: "Experience",
    href: "#experience",
    label: "02.Experience",
    hindi: "अनुभव",
    color: "#FFE700",
    shadowVar: "var(--yellow-text-shadow)",
    borderVar: "var(--yellow-border)",
  },
  {
    id: "YouTube",
    href: "#youtube",
    label: "03.YouTube",
    hindi: "यूट्यूब",
    color: "#F000FF",
    shadowVar: "var(--pink-text-shadow)",
    borderVar: "var(--pink-border)",
  },
  {
    id: "Resume",
    href: "/Utsav_Chaudhary_Resume.pdf",
    label: "04.Resume",
    hindi: "सी.वी",
    color: "#001EFF",
    shadowVar: "var(--dblue-text-shadow)",
    borderVar: "var(--dblue-border)",
    download: true,
  },
];

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  Icon: IconType;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "Github",
    href: "https://github.com/UttU28",
    Icon: SiGithub,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@ThatInsaneGuy",
    Icon: SiYoutube,
  },
  {
    id: "gmail",
    label: "GMail",
    href: "mailto:utsavmaan28@gmail.com",
    Icon: SiGmail,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/uttu28/",
    Icon: SiInstagram,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://thatinsaneguy28.netlify.app/",
    Icon: SiLinkedin,
  },
];

export const TYPED_STRINGS = ["developer.", "designer.", "creator."];

export const ABOUT = {
  greeting: "Hey,",
  paragraph:
    `"I am a seasoned professional specializing in Python and DevOps, adept at designing and ` +
    `implementing scalable solutions using {{Automation and Scripting}}. My {{Problem-Solving}} ` +
    `skills and {{Innovative}} mindset extend to my passion for {{Gaming}}, building {{Bots}} and ` +
    `{{Robots}} for task automation, complemented by active engagement on {{YouTube}} where I ` +
    `share insights and knowledge. Welcome to my own {{portfolio!}} babyyyyy"`,
};

export type ProjectLinks = {
  github?: string;
  youtube?: string;
  website?: string;
};

export type CardEntry = {
  title: string;
  meta: string;
  body: string;
  /** Optional preview image (imported asset or URL). */
  image?: string;
  imageAlt?: string;
  /** GitHub / YouTube / site links (projects only). */
  links?: ProjectLinks;
};

export const PROJECTS: CardEntry[] = [
  {
    title: "00. GRE-Words (VoKyaBolRahi)",
    meta: "|| Python | NumPy | Pillow | Flask | Android Studio ||",
    image: greWordsPreview,
    imageAlt: "GRE-Words automated reel pipeline preview",
    links: {
      github: "https://github.com/UttU28",
      youtube: "https://www.youtube.com/@ThatInsaneGuy",
      website: "https://vokyabolrahi-demo.netlify.app",
    },
    body:
      "Developed a Python pipeline that automates reel creation and uploads English-teaching videos to Instagram. " +
      "Raw clips are gathered through the PlayPhrase.me API, then FFMPEG seamlessly overlays logos, merges clips and adds " +
      "professional transitions for a desktop-grade edit. WhisperAI generates accurate timestamped subtitles, which Pillow " +
      "and FFMPEG burn into the video. Google Drive stores the finished assets, JSON metadata lives in Azure Blob Storage, " +
      "and Azure Logic Apps orchestrate the workflow end to end. Finally, Selenium handles login, upload and caption " +
      "configuration on Instagram, making the entire pipeline hands-off.",
  },
  {
    title: "01. PopularityChart",
    meta: "|| Python | Pandas | NumPy | Flask | Charts.js ||",
    image: popularityChartPreview,
    imageAlt: "PopularityChart data dashboard preview",
    links: {
      github: "https://github.com/UttU28/PopularityChart",
      website: "https://popularity-chart-demo.netlify.app",
    },
    body:
      "A data-science project that decodes what makes songs and artists succeed on YouTube. Python ETL pipelines pull " +
      "live data from NewsAPI, Reddit, YouTube Music and the ModerateHateSpeech API, with a dedicated collector for " +
      "Reddit's volatile streams. Pandas filters, dedupes and normalises the data before it lands in MongoDB. The Flask " +
      "web interface ties everything together with dynamic Charts.js visualisations that respond to user filters, " +
      "comparing artist popularity, news influence, hate-speech levels and cross-platform engagement.",
  },
  {
    title: "02. EDU-AR",
    meta: "|| Unity 3D | Android Studio | AR Core | TensorFlow | Keras ||",
    image: eduArPreview,
    imageAlt: "EDU-AR mobile learning app preview",
    links: {
      github: "https://github.com/UttU28/EDU-AR",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    body:
      "EDU-AR is an Android app built for preschoolers with cognitive challenges, layered with hearing and speech aids. " +
      "AR Core powers immersive AR scenes inside Unity3D, while a CNN trained with TensorFlow and Keras hits 95% accuracy " +
      "for image-processing tasks. Google Vision API drives handwriting OCR, and a sign-language module improves " +
      "accessibility for users with hearing impairments. The work was published in IOSRJEN (May 2021, Vol 11, Issue 5).",
  },
];

export const EXPERIENCES: CardEntry[] = [
  {
    title: "00. Midh Tech — Remote, USA",
    meta: "|| Python Web Software Developer · DevOps | Feb 2024 – Present ||",
    body:
      "Building high-performance RESTful APIs in Python/Flask on Azure for finance data transactions. JSON services follow " +
      "strict JSON Schema validation and use Azure Redis Cache for hot reads. App Service deployments are secured with " +
      "OAuth 2.0 and role-based access control. I also ship interactive dashboards in HTML, CSS, JavaScript and jQuery to " +
      "make financial data readable, and back everything with pytest/unittest suites wired into a DevOps pipeline that " +
      "uses Postman for full API coverage.",
  },
  {
    title: "01. Compendious Medialabs — India",
    meta: "|| Python Data Engineer (I) | Sept 2021 – Aug 2022 ||",
    body:
      "Authored Python scrapers with BeautifulSoup and Scrapy, and ran Selenium Headless on AWS EC2 on a schedule for " +
      "automated news feed extraction. Used NumPy and Pandas for cleaning and preprocessing, then surfaced the data in a " +
      "Django dashboard backed by DynamoDB with live D3.js / Chart.js visualisations. Helped scale a scraping bot onto " +
      "AWS Lambda with CloudWatch scheduling and supported NLP tasks with NLTK and spaCy for article classification and " +
      "sentiment analysis.",
  },
  {
    title: "02. underDOGS Gaming Studio — India",
    meta: "|| Ansible / Cloud Engineer | Dec 2019 – June 2020 ||",
    body:
      "Integrated and optimised the Quarters API to power a universal gaming currency across titles, including wallet " +
      "creation, secure transactions and points conversion. Wrote Python glue to connect cloud storage, social-media " +
      "sharing and payment gateway APIs, and worked in Unity3D / C# to embed safe in-game transactions. Fixed critical " +
      "API bugs, sped up response times via refactors and caching, and added unit tests for reliable release-to-release " +
      "stability.",
  },
  {
    title: "03. AssignmentX",
    meta: "|| Python | NumPy | Pillow | Flask | Android Studio ||",
    body:
      "An Android + web app that generates handwritten-style assignments. Reached 5,000+ downloads on Play Store with " +
      "200+ daily active users and 32K+ YouTube views. Pillow and OpenCV process glyph images to simulate handwritten " +
      "pages, while a behavioural algorithm randomises the strokes for authenticity. A Flask API on AWS connects mobile, " +
      "web and backend, and an SMTP module lets users email PDF assignments directly from the app.",
  },
  {
    title: "04. Driver Drowsiness Detection",
    meta: "|| Python | OpenCV | Keras | Arduino UNO | Raspberry Pi ||",
    body:
      "A drowsiness detection system aimed at reducing sleep-related crashes. Haar-cascade classifiers in OpenCV pick up " +
      "the face and eye state in real time, and a Keras deep-learning model predicts drowsiness. An Arduino with GSM " +
      "and GPS modules dispatches an automated SOS to emergency contacts when needed, and sensor-fusion techniques add " +
      "reliability under varying conditions.",
  },
];

export const YOUTUBE = {
  greeting: "Hey,",
  body:
    "Welcome to my {{YouTube}} channel! I showcase creative ideas and projects and walk through how I actually build them — " +
    "from learning and planning to picking the right libraries and shipping it. Join me on this journey of exploration, " +
    "innovation and learning as we turn rough ideas into real things.",
  channelName: "ThatInsaneGuy",
  channelUrl: "https://www.youtube.com/@ThatInsaneGuy",
};
