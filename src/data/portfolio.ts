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
import az400Badge from "@/assets/certifications/az400.png";
import az900Badge from "@/assets/certifications/az900.png";
import expertBadge from "@/assets/certifications/expert.png";
import googleItBadge from "@/assets/certifications/googleit.png";
import pythonForEverybodyBadge from "@/assets/certifications/pythonForEverybody.png";

export const CERTIFICATIONS_ACCENT = "#00d0ff";

export type CertificationBadge = {
  src: string;
  alt: string;
};

export type CertificationEntry = {
  id: string;
  title: string;
  lines: string[];
  credentialUrl: string;
  credentialLabel: string;
};

export const CERTIFICATION_BADGES: CertificationBadge[] = [
  { src: expertBadge, alt: "Microsoft DevOps Engineer Expert" },
  { src: az400Badge, alt: "AZ-400" },
  { src: az900Badge, alt: "AZ-900" },
  { src: googleItBadge, alt: "Google IT Automation with Python" },
  { src: pythonForEverybodyBadge, alt: "Python for Everybody — University of Michigan" },
];

export const CERTIFICATION_ENTRIES: CertificationEntry[] = [
  {
    id: "microsoft-devops-expert",
    title: "Microsoft Certified: DevOps Engineer Expert",
    lines: [
      "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
      "AZ-900: Microsoft Certified: Azure Fundamentals",
    ],
    credentialUrl:
      "https://drive.google.com/file/d/1AjPcmWMrnxSNEUaSC6XzCVqHik7d5M1M/view?usp=drive_link",
    credentialLabel: "View Credential",
  },
  {
    id: "python-for-everybody",
    title: "Python for Everybody Specialization (University of Michigan)",
    lines: [],
    credentialUrl:
      "https://www.coursera.org/share/f266a69d0980d9a34a9623b478492d50",
    credentialLabel: "View Credential",
  },
  {
    id: "google-it-automation",
    title: "Google IT Automation with Python (Specialization)",
    lines: [],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/59YMRC67LBUQ",
    credentialLabel: "View Credential",
  },
];

/** Fixed vinyl player — Soft Sunset Grooves (Pixabay, DPStudioMusic) */
export const DISC_PLAYER = {
  audioFile: "/music/soft-sunset-grooves.mp3",
  discImage: popularityChartPreview,
  accentColor: "#1fffff",
  /** Stylus glow when parked (off disc) */
  needleDotColor: "#ea00ff",
  /** Stylus glow while playing — site neon yellow */
  stylusPlayingColor: "#fffb00",
};

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
    label: "About",
    hindi: "मैं",
    color: "#4DEEEA",
    shadowVar: "var(--blue-text-shadow)",
    borderVar: "var(--blue-border)",
  },
  {
    id: "Projects",
    href: "#projects",
    label: "Projects",
    hindi: "काम",
    color: "#74EE15",
    shadowVar: "var(--green-text-shadow)",
    borderVar: "var(--green-border)",
  },
  {
    id: "Experience",
    href: "#experience",
    label: "Experience",
    hindi: "अनुभव",
    color: "#FFE700",
    shadowVar: "var(--yellow-text-shadow)",
    borderVar: "var(--yellow-border)",
  },
  {
    id: "Certifications",
    href: "#certifications",
    label: "Certs",
    hindi: "प्रमाण",
    color: "#FF7700",
    shadowVar: "var(--orange-text-shadow)",
    borderVar: "var(--orange-border)",
  },
  {
    id: "YouTube",
    href: "#youtube",
    label: "YouTube",
    hindi: "यूट्यूब",
    color: "#F000FF",
    shadowVar: "var(--pink-text-shadow)",
    borderVar: "var(--pink-border)",
  },
  {
    id: "Resume",
    href: "/Utsav_Chaudhary_Resume.pdf",
    label: "Resume",
    hindi: "बायोडाटा",
    color: "#FF7700",
    shadowVar: "var(--orange-text-shadow)",
    borderVar: "var(--orange-border)",
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
  linkedin?: string;
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
    title: "00. LinkedIn Reverse Search Platform",
    meta:
      "|| Personal Project | Python | Hugging Face | n8n | Selenium | Redis | MongoDB | React.js | D3.js | Next.js | Firebase | Docker ||",
    links: {
      website: "https://linkitup.thatinsaneguy.com/",
    },
    body:
      "Built a data enrichment platform in Python using fine-tuned Hugging Face models and prompt-engineered pipelines for " +
      "LLM-assisted extraction of LinkedIn profiles and company website URLs from unstructured data, processing 1000+ records. " +
      "Orchestrated a tool-based pipeline with n8n: Selenium for scraping, SalesQL for validation, and LLM prompts for parsing; " +
      "Redis and MongoDB for caching and storage, cutting repeat request time by 45%; added analytics with React.js and D3.js. " +
      "Designed extraction and validation prompts and MCP-style tools for profile and company URL enrichment with quality checks; " +
      "integrated OpenAI for fallback parsing and normalization. Delivered a Next.js frontend with Excel upload and real-time " +
      "progress; Firebase Auth and Firestore; Docker and CI/CD (GitHub Actions) for 99.5% uptime across enrichment services and " +
      "automation workflows.",
  },
  {
    title: "01. AI-Powered Video Generation Pipeline",
    meta:
      "|| Personal Project | Python | FFMPEG | F5-TTS | OpenAI | WhisperAI | Selenium | Docker | Gradio ||",
    links: {
      website: "https://meme.thatinsaneguy.com/",
      github: "https://github.com/UttU28/MemeMaker/",
      linkedin: "https://www.linkedin.com/posts/utsavmaan28_voicecloning-ai-machinelearning-ugcPost-7363380027540787200-ZsES?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB5yNlkBPSHBXN1LG7ta1ClqZ_yeQBV9M5c",
    },
    body:
      "Developed an advanced FFMPEG video generation pipeline using Python and machine learning models, integrating F5-TTS for " +
      "high-quality voice cloning and speech synthesis to create fully AI-generated videos. Integrated OpenAI API for dynamic " +
      "script writing, WhisperAI for audio transcription, and FFMPEG for embedding subtitles and synchronizing audio-visual " +
      "elements; Chrome and Selenium for managing and automating the browser. Engineered a scalable video processing system that " +
      "merges F5-TTS generated audio with trending gaming backgrounds, applying randomization for unique video variants using " +
      "FFMPEG and custom overlays. Designed and deployed a multi-channel automation system with Docker and CRON jobs for scheduled " +
      "generation and publishing of 50+ videos daily across YouTube and Instagram, including platform-specific metadata and " +
      "formatting. Built an intuitive Gradio interface for real-time pipeline monitoring, voice cloning status updates, and batch " +
      "processing.",
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
