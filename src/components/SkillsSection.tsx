import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';

// Skills component
interface Skill {
  name: string;
  category: string;
  color: string;
  projectsUsed?: string[]; // Projects where this skill was used
}

export const SkillsSection: React.FC = () => {
  // Combine all skills into a single array
  const allSkills: Skill[] = [
    // Languages
    { name: "Python", category: "Languages", color: "bg-blue-400 text-white", projectsUsed: ["Apeksha – Personal/Home Assistant with LLMs", "LinkedIn Reverse Search Bot", "Eventbrite & LUMA Scraper with CRM", "AutoGramBot – Instagram Reels Automation", "AssignmentX – Handwriting Generator", "Movie Controller – PC Media Remote"] },
    { name: "JavaScript/TypeScript", category: "Languages", color: "bg-blue-500 text-white", projectsUsed: ["Company Website – Next.js", "LinkedIn Search Client App – Next.js", "Movie Controller – React UI"] },
    { name: "Java", category: "Languages", color: "bg-blue-600 text-white", projectsUsed: ["AssignmentX – Android Application"] },
    { name: "C++", category: "Languages", color: "bg-blue-300 text-white", projectsUsed: ["Secret sauce in my syntax soup – used during academic projects"] },
    { name: "C#", category: "Languages", color: "bg-blue-700 text-white", projectsUsed: ["Game Transaction API Integration – underDogs Gaming"] },
    { name: "Rust", category: "Languages", color: "bg-blue-800 text-white", projectsUsed: ["Compiling dreams, one ownership model at a time"] },
    { name: "Go", category: "Languages", color: "bg-blue-400 text-white", projectsUsed: ["Built fast... still waiting for the right project to catch up"] },
    { name: "Ruby", category: "Languages", color: "bg-blue-500 text-white", projectsUsed: ["As rare as a bug-free deploy, but always shiny"] },
    { name: "Bash", category: "Languages", color: "bg-blue-300 text-white", projectsUsed: ["Automation spells for servers and scripts"] },
    { name: "PowerShell", category: "Languages", color: "bg-blue-700 text-white", projectsUsed: ["Wrangling Windows like a true terminal wizard"] },
    { name: "R", category: "Languages", color: "bg-blue-400 text-white", projectsUsed: ["Charted once, never forgotten – data dreams in R"] },
  
    // Frameworks & Libraries
    { name: "React", category: "Frameworks & Libraries", color: "bg-green-400 text-white", projectsUsed: ["Company Website – Next.js", "Movie Controller – React Smart TV Remote"] },
    { name: "Next.js", category: "Frameworks & Libraries", color: "bg-green-500 text-white", projectsUsed: ["Company Website – Next.js", "LinkedIn Reverse Search Client UI"] },
    { name: "Node.js", category: "Frameworks & Libraries", color: "bg-green-600 text-white", projectsUsed: ["Making backend vibes smooth and eventful"] },
    { name: "Django", category: "Frameworks & Libraries", color: "bg-green-700 text-white", projectsUsed: ["AutoGramBot – Instagram Automation", "AssignmentX – PDF Generator Backend"] },
    { name: "Flask", category: "Frameworks & Libraries", color: "bg-green-300 text-white", projectsUsed: ["Movie Controller – Command Endpoint Server"] },
    { name: "FastAPI", category: "Frameworks & Libraries", color: "bg-green-400 text-white", projectsUsed: ["LLM Inference APIs – Midh Technologies"] },
    { name: "Express", category: "Frameworks & Libraries", color: "bg-green-500 text-white", projectsUsed: ["Somewhere in the stack... always fast, always expressive"] },
    { name: "Angular", category: "Frameworks & Libraries", color: "bg-green-600 text-white", projectsUsed: ["Built once, rotated in and out of my dev toolkit"] },
    { name: "ASP.NET", category: "Frameworks & Libraries", color: "bg-green-700 text-white", projectsUsed: ["Just waiting for the enterprise to call"] },
    { name: "D3.js", category: "Frameworks & Libraries", color: "bg-green-300 text-white", projectsUsed: ["Analytics Dashboard – Midh Technologies", "Data Visualization in Django Dashboards"] },
    { name: "OpenCV", category: "Frameworks & Libraries", color: "bg-green-400 text-white", projectsUsed: ["AssignmentX – Handwriting OCR", "Movie Controller – Visual Detection"] },
    { name: "TensorFlow", category: "Frameworks & Libraries", color: "bg-green-500 text-white", projectsUsed: ["Apeksha – Wake Word Detection"] },
  
    // Databases
    { name: "MySQL/PostgreSQL", category: "Databases", color: "bg-yellow-400 text-white", projectsUsed: ["Eventbrite & LUMA CRM", "AssignmentX – SQL Backend"] },
    { name: "Azure SQL", category: "Databases", color: "bg-yellow-500 text-white", projectsUsed: ["AssignmentX – Deployed via Azure"] },
    { name: "MongoDB", category: "Databases", color: "bg-yellow-600 text-white", projectsUsed: ["This NoSQL beast is ready to store chaos"] },
    { name: "DynamoDB", category: "Databases", color: "bg-yellow-300 text-white", projectsUsed: ["Stored ideas, if not data... yet"] },
    { name: "Redis", category: "Databases", color: "bg-yellow-400 text-white", projectsUsed: ["Caching champions live here – always a go-to"] },
    { name: "Firebase (Firestore)", category: "Databases", color: "bg-yellow-500 text-white", projectsUsed: ["Apeksha – Task Storage & Metrics", "LinkedIn Client App – Auth & Data Storage"] },
  
    // Cloud & DevOps
    { name: "Azure", category: "Cloud & DevOps", color: "bg-purple-400 text-white", projectsUsed: ["AutoGramBot – Media Storage & Logic Apps", "AssignmentX – App Services", "Midh Technologies – Cloud Hosting"] },
    { name: "AWS", category: "Cloud & DevOps", color: "bg-purple-500 text-white", projectsUsed: ["Used S3 and Lambda to make things run while I sleep"] },
    { name: "Docker", category: "Cloud & DevOps", color: "bg-purple-600 text-white", projectsUsed: ["AutoGramBot – Dockerized Automation Pipeline"] },
    { name: "Kubernetes", category: "Cloud & DevOps", color: "bg-purple-700 text-white", projectsUsed: ["LLM Inference Deployment – Azure Kubernetes"] },
    { name: "CI/CD", category: "Cloud & DevOps", color: "bg-purple-300 text-white", projectsUsed: ["AutoGramBot – Fully Automated Workflow"] },
    { name: "Terraform", category: "Cloud & DevOps", color: "bg-purple-400 text-white", projectsUsed: ["Infrastructure-as-Code fan – always in the Terraform state of mind"] },
    { name: "Ansible", category: "Cloud & DevOps", color: "bg-purple-500 text-white", projectsUsed: ["Config whisperer for that one perfect deploy"] },
  
    // Tools & Platforms
    { name: "Git/GitHub", category: "Tools & Platforms", color: "bg-pink-400 text-white", projectsUsed: ["All projects – because what’s a dev without Git?"] },
    { name: "Selenium", category: "Tools & Platforms", color: "bg-pink-500 text-white", projectsUsed: ["LinkedIn Bot – Data Automation", "AutoGramBot – Upload Automation"] },
    { name: "FFMPEG", category: "Tools & Platforms", color: "bg-pink-600 text-white", projectsUsed: ["AutoGramBot – Advanced Video Editing"] },
    { name: "Whisper AI", category: "Tools & Platforms", color: "bg-pink-700 text-white", projectsUsed: ["AutoGramBot – Subtitle Generation", "Apeksha – Voice Integration"] },
    { name: "HuggingFace", category: "Tools & Platforms", color: "bg-pink-300 text-white", projectsUsed: ["LinkedIn Bot – HTML Structure Cleanup"] },
    { name: "OAuth", category: "Tools & Platforms", color: "bg-pink-400 text-white", projectsUsed: ["Login logic for modern life – integrated across apps"] },
    { name: "REST/GraphQL", category: "Tools & Platforms", color: "bg-pink-500 text-white", projectsUsed: ["Used in nearly every backend project – because APIs run the world"] },
    { name: "Linux & Windows", category: "Tools & Platforms", color: "bg-pink-600 text-white", projectsUsed: ["Cross-platform dev life – powered by dual boot dreams"] },
    { name: "Raspberry Pi", category: "Tools & Platforms", color: "bg-pink-700 text-white", projectsUsed: ["Apeksha – The tiny brain of my smart home"] }
  ];
  

  // Main state
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === null 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  // Unique categories for filter buttons
  const categories = [...new Set(allSkills.map(skill => skill.category))];

  // Map categories to colors for legend
  const categoryColors = {
    "Languages": "bg-blue-400",
    "Frameworks & Libraries": "bg-green-400",
    "Databases": "bg-yellow-400",
    "Cloud & DevOps": "bg-purple-400",
    "Tools & Platforms": "bg-pink-400"
  };

  // Handle category change
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };

  return (
    <div id="skills" className="w-full">
      <SectionHeading 
        title="Skills" 
        description="I believe in choosing the right tool for the job (and I've collected quite a few tools in my toolkit). Explore my technical skills below:"
      />
      
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          className={`px-3 py-1 rounded-full text-base font-handwriting hover:scale-105 transition-transform ${
            activeCategory === null ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-300'
          } transition-colors`}
          onClick={() => handleCategoryChange(null)}
        >
          All Skills
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-1 rounded-full text-base font-handwriting hover:scale-105 transition-transform ${
              activeCategory === category ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-300'
            } transition-colors`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills display */}
      <div className="p-6 mb-8 relative min-h-[400px] overflow-hidden">
        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-4 py-6">
          {filteredSkills.map((skill, index) => {
            // Calculate sizes for visual variety
            const size = Math.floor((index % 3) + 1);
            const sizeClass = [
              'text-base', 
              'text-lg', 
              'text-xl'
            ][size - 1];
            
            return (
              <div
                key={`${skill.name}-${index}`}
                className={`px-3 py-1 rounded-full font-handwriting ${skill.color} cursor-pointer backdrop-blur-sm shadow-lg hover:scale-110 hover:shadow-lg transition-all`}
                style={{
                  boxShadow: hoveredSkill?.name === skill.name ? '0 0 20px rgba(255, 255, 255, 0.8)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => handleCategoryChange(skill.category)}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className={sizeClass}>{skill.name}</span>
              </div>
            );
          })}
        </div>
        
        {/* Hover info tooltip */}
        {hoveredSkill && (
          <div 
            className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-lg rounded-lg p-4 text-white shadow-xl border border-white/10 max-w-xs"
          >
            <p className="text-lg font-bold font-handwriting">{hoveredSkill.name}</p>
            <p className="text-sm font-handwriting mb-1">Category: {hoveredSkill.category}</p>
            
            {/* Projects used section */}
            <div className="mt-2">
              <p className="text-sm font-semibold font-handwriting underline">Projects:</p>
              {hoveredSkill.projectsUsed && hoveredSkill.projectsUsed.length > 0 ? (
                <ul className="list-disc list-inside text-xs">
                  {hoveredSkill.projectsUsed.map((project, idx) => (
                    <li key={idx} className="font-handwriting">{project}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs italic font-handwriting">No projects showcased yet</p>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Category legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div 
            key={category} 
            className="flex items-center hover:scale-110 transition-transform cursor-pointer"
            onClick={() => handleCategoryChange(category as string)}
          >
            <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
            <span className="text-sm text-gray-300">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 