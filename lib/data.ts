/**
 * ============================================================================
 *  YOUR CV CONTENT  - edit everything in this file to make the site yours.
 *  Nothing else needs to change for a basic customization.
 * ============================================================================
 */

export const profile = {
  name: "Vishal Tandon",
  // Shown under the name.
  role: "Lead Developer (QBranch) @ Salesforce · Agentforce & AI",
  // A short intro. Keep it punchy.
  tagline:
    "I lead Agentforce and applied-AI development in QBranch, the Salesforce team that builds the demos and prototypes leaders use to show what the platform can do. Ten years in, I went from developer support to leading the build.",
  // Avatar: drop an image at /public/avatar.jpg and set to "/avatar.jpg".
  // Leave empty ("") to show your initials in a gradient circle instead.
  avatar: "",
  // Used for the live status pill (clock + weather).
  location: {
    label: "Hyderabad, India",
    timezone: "Asia/Kolkata",
    latitude: 17.385,
    longitude: 78.4867,
  },
  socials: {
    github: "", // add a GitHub URL to show the button
    linkedin: "https://www.linkedin.com/in/vtandon-161092/",
    email: "vishal161092@gmail.com",
    trailhead: "", // add a Trailhead profile URL to show the button
    website: "", // personal site / resume PDF
  },
};

/* --------------------------------- Experience --------------------------------- */
/* A company can hold one or more roles (shown as a progression). */

export type Role = {
  title: string;
  period: string;
  location?: string;
  summary?: string;
};

export type Experience = {
  company: string;
  tenure?: string; // e.g. "10 yrs"
  roles: Role[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "Salesforce",
    tenure: "10 yrs",
    stack: ["Agentforce", "Agent Script", "Prompt Builder", "Einstein / GenAI", "Apex", "Lightning Web Components", "Data Cloud", "Experience Cloud"],
    roles: [
      {
        title: "Lead Developer (QBranch)",
        period: "May 2024 - Present",
        location: "Hyderabad, India",
        summary:
          "Leading Salesforce technical initiatives and a team of developers within QBranch, driving Agentforce and applied-AI innovation and delivering demo-ready, agent-powered solutions for the Engineering org.",
      },
      {
        title: "Senior Developer (QBranch)",
        period: "Jan 2022 - May 2024",
        summary:
          "Crafted compelling technical demos, increasingly AI-first, that empowered the Engineering team's Salesforce product presentations. Led the exploration and implementation of innovative ideas, oversaw a team of Salesforce experts, and consistently delivered remarkable solutions within tight timeframes.",
      },
      {
        title: "Senior Success Specialist",
        period: "Feb 2020 - Dec 2021",
        summary:
          "Led strategic customer-growth initiatives with tailored accelerators and cross-team collaboration for timely value realization. Provided consultative engagement leadership and ran influential sessions that drove adoption and measurable outcomes.",
      },
      {
        title: "Senior Developer Support Engineer",
        period: "Feb 2018 - Feb 2020",
        summary:
          "Oversaw team performance and metric management to rigorous standards. Managed sensitive accounts and severe cases with an unwavering customer-centric focus, and spearheaded knowledge-sharing sessions that elevated team capability.",
      },
      {
        title: "Developer Support Engineer",
        period: "Nov 2016 - Feb 2018",
        summary:
          "Navigated diverse technical domains and complex customer scenarios, leveraging Lightning, Live Agent, Snap-Ins and more to strengthen debugging and resolution.",
      },
    ],
  },
  {
    company: "Wipro",
    tenure: "2 yrs",
    stack: ["Salesforce", "Translation Workbench", "Process Automation"],
    roles: [
      {
        title: "Project Engineer",
        period: "Sep 2014 - Nov 2016",
        summary:
          "Drove customer-engagement initiatives, global outreach via Translation Workbench, and process-automation work, optimizing support operations and efficiency through robust technical solutions.",
      },
    ],
  },
];

/* --------------------------------- Projects --------------------------------- */
/* Each card uses a gradient cover; drop an image in /public and set `image` to
   use a screenshot. */

export type Project = {
  title: string;
  blurb: string;
  gradient: string;
  image?: string; // still/poster image
  video?: string; // optional MP4/WebM demo clip - plays on hover
  tags: string[];
  link?: string;
};

// Empty until real work is added: the Selected Work section only renders when
// this has entries. Use real screenshots / demo clips, not stock images.
export const projects: Project[] = [];

/* --------------------------------- Skills --------------------------------- */

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "AI & Agentforce",
    items: ["Agentforce", "Agent Script", "Prompt Builder", "Einstein / Einstein GPT", "Generative AI", "LLMs", "Data Cloud", "AI-driven Demos"],
  },
  {
    label: "Salesforce Platform",
    items: ["Apex", "Lightning Web Components", "Aura", "Flow", "Experience Cloud", "Live Agent", "Snap-Ins", "SOQL / SOSL", "Translation Workbench"],
  },
  {
    label: "Development & Admin",
    items: ["Salesforce Development", "Salesforce Administration", "Technical Demos", "Debugging", "Process Automation"],
  },
  {
    label: "Leadership",
    items: ["Team Leadership", "Mentoring", "Customer Success", "Knowledge Sharing", "Delivery under pressure"],
  },
];

/* --------------------------------- Certifications --------------------------------- */

export type Certification = {
  name: string;
  issuer: string;
  year?: string; // issue date, e.g. "May 2024"
};

/* Listed most-recent first within each issuer; the section groups by issuer. */
export const certifications: Certification[] = [
  // Salesforce
  { name: "Salesforce Certified AI Associate", issuer: "Salesforce", year: "May 2024" },
  { name: "Salesforce Certified Experience Cloud Consultant", issuer: "Salesforce", year: "Dec 2023" },
  { name: "Salesforce Certified Application Architect", issuer: "Salesforce", year: "Dec 2022" },
  { name: "Salesforce Certified Data Architect", issuer: "Salesforce", year: "Dec 2022" },
  { name: "Salesforce Certified Sharing and Visibility Architect", issuer: "Salesforce", year: "Aug 2022" },
  { name: "Salesforce Certified Sales Cloud Consultant", issuer: "Salesforce", year: "May 2021" },
  { name: "Salesforce Certified Service Cloud Consultant", issuer: "Salesforce", year: "Feb 2020" },
  { name: "Salesforce Certified Platform Developer I", issuer: "Salesforce", year: "Jul 2017" },
  { name: "Salesforce Certified Platform App Builder", issuer: "Salesforce", year: "Mar 2017" },
  { name: "Salesforce Certified Administrator", issuer: "Salesforce", year: "Sep 2016" },
  { name: "Salesforce Certified Force.com Developer", issuer: "Salesforce", year: "Aug 2015" },
];

/* ------------------------------ Programs & courses ------------------------------ */
/* Completed programs and courses: shown under Certifications, but not counted as
   certifications. */

export type Course = {
  name: string;
  issuer: string;
  year?: string;
  tag?: string; // "AI" | "Leadership"
};

export const courses: Course[] = [
  { name: "Agentforce 360 League (Achiever)", issuer: "Salesforce", year: "Jan 2026", tag: "AI" },
  { name: "Executive Briefing: Artificial Intelligence (AI) + ChatGPT", issuer: "Udemy", year: "May 2024", tag: "AI" },
  { name: "Aspire: Building Manager-Ready Talent", issuer: "Salesforce", year: "Jun - Sep 2026", tag: "Leadership" },
  { name: "Accelerate: Salesforce Aspiring Leaders Journey (year-long)", issuer: "Salesforce", tag: "Leadership" },
];

/* --------------------------------- Featured --------------------------------- */
/* Highlights / featured media from LinkedIn. Add a `link` to make a card clickable. */

export type Featured = {
  title: string;
  note?: string;
  tag?: string; // small label chip, e.g. "AI", "Leadership"
  link?: string; // optional: link to a write-up, video, or repo
};

export const featured: Featured[] = [
  {
    title: "Agentforce 360 League",
    tag: "AI",
    note: "Completed Salesforce's Agentforce 360 League with Achiever status (Jan 2026), recognized for outstanding commitment, learning and performance.",
  },
  {
    title: "Application & Data Architect",
    tag: "Architecture",
    note: "Salesforce Certified Application Architect and Data Architect, plus Sharing and Visibility Architect.",
  },
  {
    title: "Salesforce Certified AI Associate",
    tag: "AI",
    note: "Credentialed in Salesforce AI fundamentals, Einstein and responsible-AI practices.",
  },
  {
    title: "Aspire & Accelerate: Leadership Programs",
    tag: "Leadership",
    note: "Completed Salesforce's year-long Accelerate journey for aspiring people leaders and the Aspire: Building Manager-Ready Talent program (2026).",
  },
];

/* --------------------------------- Recommendations --------------------------------- */

export type Recommendation = {
  name: string;
  title: string; // their LinkedIn headline
  relationship: string; // how they worked with Vishal + date
  text: string;
  pull?: string; // standout line; recommendations with one are featured in Voices
};

export const recommendations: Recommendation[] = [
  {
    name: "Jayalakshmi Sethuraman",
    title: "Presales Solution Consulting | B2B SaaS | CRM",
    relationship: "Worked with Vishal on different teams · Feb 2026",
    text: `I worked closely with Vishal on several key presales opportunities at Salesforce, where his deep platform expertise was invaluable. He has a remarkable ability to transform complex requirements into deliverable solutions. Whether quickly building POVs or navigating intricate edge cases, Vishal consistently bridges the gap between technical execution and business needs. He is a highly experienced, solutions-oriented professional who thrives on a challenge. I truly valued our collaboration and would welcome the opportunity to work with him again.`,
  },
  {
    name: "Ramya Nayyar",
    title: "Consulting | Customer Success | SaaS Strategy | Salesforce (9X Certified) | CSPO | Triple Star Ranger | MBA",
    relationship: "Worked with Vishal on the same team · Feb 2025",
    text: `He is highly adaptable, excelling both as an individual contributor and as a team leader. During our time working together, he consistently demonstrated exceptional technical expertise and a deep focus on crafting well-thought-out solutions. His technical skills are truly impressive, and his eagerness to learn and grow is outstanding. It has always been a pleasure to work with a senior professional like him.`,
  },
  {
    name: "Sebastian Krzyska",
    title: "Your Agentic CRM and Customer Experience Advisor | Salesforce.com",
    relationship: "Worked with Vishal on the same team · Feb 2024",
    text: `I worked with Vishal (and hope to work more) on several pre-sales projects within Salesforce and can only recommend Vishal as a great project team member. What stands out to me is Vishal's genuine interest and the level of effort he always puts in understanding the end customer's problem we need to solve and where the biggest value is within the solutions Vishal is going to develop. In general, the time and energy Vishal puts in clarifying all requirements before he starts his development goes beyond my personal expectations from engineers and pays off in very accurate delivery. The solutions engineered by Vishal are always of the highest quality and, on top of that, Vishal always takes time to go through the functionalities together after each iteration to make sure the outcome is what the customer expects. All in all, whenever I am in need of demo engineering support, I always hope that Vishal is available!`,
    pull: "The solutions engineered by Vishal are always of the highest quality.",
  },
  {
    name: "Ajitesh Pratap Singh",
    title: "Technical Architect at Salesforce | 10x Certified Application Architect | LWC",
    relationship: "Worked with Vishal on the same team · Jan 2024",
    text: `I had the privilege of working alongside Vishal on several Salesforce projects, and I wholeheartedly recommend him for any senior-level development role. His proficiency in Salesforce and dedication to delivering high-quality solutions make him an invaluable asset to any team. Vishal is an expert in Salesforce development, demonstrating a deep understanding of the platform's architecture and capabilities. He consistently delivered robust and scalable solutions, showcasing his mastery of Apex, Visualforce, Lightning components, and other key Salesforce technologies. He possesses a remarkable ability to translate complex technical concepts into engaging and accessible demonstrations, and played a pivotal role in our product presentations. His problem-solving skills and ability to think on his feet have been instrumental in winning over clients during crucial demonstrations.`,
    pull: "His problem-solving skills and ability to think on his feet have been instrumental in winning over clients during crucial demonstrations.",
  },
  {
    name: "Kalyan Chandra Mamidanna",
    title: "Director at OpenText | Salesforce & Process Automation Expert",
    relationship: "Was Vishal's client · Dec 2023",
    text: `Vishal was part of my Salesforce team, and he delivered various complex Salesforce projects like Service Cloud implementations (establishing portals, knowledge base, case functionality, and many more). I can confidently say that he is one of the most dedicated and hardworking team members I have had the pleasure of working with. Vishal's professionalism, positive attitude, exceptional communication skills, and work ethic are unparalleled, and he consistently goes above and beyond to ensure that projects are completed on time and to the highest standard. I highly recommend him to any potential employer.`,
  },
  {
    name: "Yogesh Kumar Lal",
    title: "Salesforce Signature Engineer",
    relationship: "Worked with Vishal on the same team · Dec 2023",
    text: `It was always great to work with you. Best thing is that you are always eager to learn new things. Keep it up!!`,
  },
  {
    name: "Sundar Kannan",
    title: "ServiceNow: Work at Lightspeed",
    relationship: "Managed Vishal directly · Nov 2023",
    text: `I've had the pleasure of collaborating with Vishal, and without doubt, he embodies dependability, consistently delivering a comprehensive and top-tier customer experience. His hallmark traits of ownership, accountability, and an unwavering customer-centric approach, coupled with remarkable technical proficiency, form a rare and invaluable combination. I recall numerous instances where Vishal adeptly resolved intense situations through his technical prowess and meticulous attention to detail. What truly sets him apart is his humility and insatiable thirst for knowledge, rendering him an invaluable asset, an individual who stands out as among the finest team members in any organizational setting.`,
  },
  {
    name: "Vidya Hruday",
    title: "Ex-Amazon | Ex-Salesforce Engineer",
    relationship: "Worked with Vishal · Nov 2023",
    text: `Vishal has consistently demonstrated a strong commitment to our team's success and was always willing to go the extra mile to ensure a high bar of customer experience. I was continually impressed by his technical expertise and problem-solving skills. His communication skills and ability to collaborate with cross-functional teams were also commendable. I highly recommend Vishal as a valuable asset to any organization, and I'm confident that he will continue to excel in his future endeavors.`,
  },
  {
    name: "Anindita Dasgupta",
    title: "Senior Success Guide at Salesforce",
    relationship: "Vishal was senior to Anindita · Oct 2023",
    text: `I have had the honour to have Vishal as one of my mentors in Salesforce. Half of my current knowledge was blessed upon me by him. His technical expertise, problem-solving skills, and attention to detail are truly impressive. He's a great team player, always willing to collaborate and share knowledge with his colleagues. Vishal's dedication and passion for software development make him a valuable asset to any organization. I highly recommend him for any development project or team.`,
    pull: "I have had the honour to have Vishal as one of my mentors in Salesforce. Half of my current knowledge was blessed upon me by him.",
  },
  {
    name: "Sowmya Kalidindi",
    title: "14x Salesforce Certified Application Architect || 5 Star Ranger",
    relationship: "Worked with Vishal on the same team · Oct 2023",
    text: `Highly skilled Salesforce engineer with deep understanding of platform architecture. It was great to work with you.`,
  },
  {
    name: "Antti Kallio",
    title: "Account Executive at Snowflake ❄️ The AI Data Cloud",
    relationship: "Worked with Vishal on different teams · Oct 2023",
    text: `I highly recommend Vishal for his outstanding work in building Salesforce custom components. He consistently delivered high-quality results, always meeting deadlines, and maintained a high level of professionalism throughout the project. It was a pleasure working with him.`,
  },
  {
    name: "Laasya Davanpally",
    title: "Member of Technical Staff at Salesforce",
    relationship: "Vishal was senior to Laasya · Oct 2023",
    text: `Vishal Tandon is a profoundly dedicated individual showcasing exceptional technical prowess and an unwavering commitment to his work. Having worked closely with Vishal, I have consistently witnessed his eagerness to embrace new challenges and demonstrate excellence in every assigned task. He demonstrates a remarkable knack for smoothly manoeuvring through various settings and effortlessly managing intricate tasks through his exceptional problem-solving skills. Vishal's communication abilities are truly outstanding; he excels at simplifying complex problems into manageable steps, enhancing collaboration and effectiveness for all team members. He's an excellent listener, adapting swiftly to changing circumstances without ever losing his composure, even under the most challenging deadlines. Without a doubt, Vishal is the go-to person for anyone in the team, always enthusiastic to explore and deliver top-notch results. I wholeheartedly recommend Vishal for any role that requires a blend of technical prowess, flexibility, unwavering commitment, and a proactive, optimistic approach.`,
  },
  {
    name: "Ankit Kumar",
    title: "Software Architect at ValueLabs",
    relationship: "Was senior to Vishal · Oct 2023",
    text: `I had the pleasure of collaborating with Vishal for many years on our Salesforce projects. He is a true Salesforce wizard! He brings deep understanding of the Salesforce technical domain and vast industry knowledge. Vishal consistently delivered top-notch solutions and was always ready to help out the team. I highly recommend him for his technical expertise and great teamwork.`,
  },
  {
    name: "Sandeep Sathivada",
    title: "Designer at Salesforce",
    relationship: "Worked with Vishal on the same team · Oct 2023",
    text: `Vishal is not just an extraordinary Salesforce developer but a true collaborator and problem-solver. As a designer, I have had the privilege of working with him on multiple projects, and I can confidently say that his deep technical knowledge and willingness to help have made a world of difference in our creative endeavors. His profound understanding of technical skills has made it incredibly easy for me to grasp and work on various tasks. Having a team member like him is a true bonus.`,
  },
  {
    name: "Anjali Chanagonda",
    title: "I learn everyday",
    relationship: "Worked with Vishal on the same team · Oct 2023",
    text: `I have had the pleasure of working with Vishal Tandon and can confidently say that he is an exceptional professional. Vishal is not only technically sound but also incredibly dedicated to his work. One of his standout qualities is his ability to meet deadlines consistently, often delivering high-quality work well ahead of schedule. What sets Vishal apart is his approachable nature, he is always ready to lend a helping hand, answer questions, and offer guidance. His willingness to collaborate and support his colleagues fosters a positive and productive work environment. Above all, Vishal is someone you can always rely on: whether it's a challenging project or a tight deadline, he rises to the occasion and delivers results. I wholeheartedly recommend Vishal as a professional who excels in his technical abilities and possesses the qualities of an outstanding team player.`,
  },
  {
    name: "Jason Lima",
    title: "Technical Account Manager at Salesforce",
    relationship: "Worked with Vishal on the same team · Oct 2023",
    text: `I have worked with Vishal as part of the same team in Salesforce. I found him technically very sound, bright, and a go-to person for any technical concern or question. He is one of the most knowledgeable people on the Salesforce platform and can provide you with proper suggestions. He is very approachable and fun to work with. I highly recommend Vishal, whichever team or company he works with will benefit through him and be highly successful.`,
  },
  {
    name: "Varsha Palepu",
    title: "Salesforce Developer at LSEG | Ex-Salesforce Developer I at Salesforce",
    relationship: "Vishal was senior to Varsha · Oct 2023",
    text: `Vishal is a highly dedicated and competent professional. He consistently displays a strong work ethic, a keen attention to detail, and a remarkable ability to tackle complex tasks. His analytical skills are exceptional, and I have often been impressed with his ability to break down intricate problems into manageable steps. This approach not only facilitates problem-solving but also fosters a collaborative and inclusive work environment. Vishal has excellent communication skills, conveying ideas clearly and effectively. His willingness to listen, provide constructive feedback, and adapt to evolving circumstances contributes significantly to success. He is also a supportive and reliable team member, always willing to go the extra mile to help a colleague in need. His positive attitude and ability to maintain composure under pressure have been particularly commendable.`,
  },
  {
    name: "Akash Chandra",
    title: "Working and learning the new features coming up",
    relationship: "Worked with Vishal on the same team · Oct 2023",
    text: `Vishal, a true technical gem. Great team player and loves to enjoy every moment. A colleague you can look forward to.`,
  },
];

/* --------------------------------- About --------------------------------- */

export const about = {
  paragraphs: [
    "I'm a Salesforce developer and team lead based in Hyderabad, with a decade across the platform, from developer support and customer success to leading AI and Agentforce development within QBranch.",
    "My work centers on applied AI: building Agentforce agent experiences, generative-AI and Prompt Builder solutions, and the technical demos that empower Salesforce's Engineering org, usually against tight deadlines. Along the way I mentor a team of Salesforce experts.",
  ],
  education: [
    {
      school: "Punjab Technical University",
      degree: "B.Tech, Computer Engineering",
      period: "2010 - 2014",
    },
  ],
  interests: ["Agentforce & applied AI", "Generative AI", "Technical demos", "Team mentoring"],
};
