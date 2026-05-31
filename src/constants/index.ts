import {
  networkin,
  devquest,
} from '../assets';

// ---------- Resume ----------
export const resumeLink = "/Resume_Puneet_Bajaj.pdf";

// ---------- Hero ----------
export const hero = {
  name: "Puneet Bajaj",
  title: "Software Engineer",
  company: "Adobe",
  location: "San Jose, CA",
  status: "Building AI experiences on Acrobat Web",
  tagline: [
    "I build production AI systems —",
    "autonomous agents, multimodal apps,",
    "and the platforms that ship them.",
  ],
};

// ---------- Stats ----------
export const stats = [
  { value: "4+", label: "years engineering" },
  { value: "5", label: "hackathon wins" },
  { value: "7", label: "internships" },
  { value: "10", label: "projects shipped" },
];

// ---------- About ----------
export const aboutMe = `I'm a Software Engineer at Adobe on the Acrobat Web Engagement & Retention team, where I ship AI-driven onboarding and trial experiences to millions of users. Before Adobe I was at Fetch.ai building autonomous multi-agent systems, and at BrowserStack scaling test infrastructure used by enterprises worldwide.

I'm wrapping up a Master's in Computer Software Engineering at SJSU (May 2026, CGPA 3.75). Most of my recent work lives at the intersection of LLMs, agents, and real-time systems — MCP servers, RAG pipelines, multimodal interfaces, and the orchestration that holds them together.

When I'm not shipping at Adobe, I'm usually at a hackathon. Five wins so far across Stanford, UCLA, Davis, and YC — built with sleep-deprived friends and a lot of espresso.`;

// ---------- Experience ----------
export type Experience = {
  role: string;
  company: string;
  type: "Full-time" | "Internship";
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Adobe",
    type: "Full-time",
    location: "San Jose, CA",
    period: "Jan 2026 — Present",
    current: true,
    highlights: [
      "Architected an intent-based personalization engine on Acrobat Web — increased onboarding completion by 12%.",
      "Shipped a milestone-driven Trial Recap that surfaces personalized usage insights — lifted trial-to-paid conversion by 5.8%.",
    ],
    stack: ["TypeScript", "React", "Personalization", "A/B Experiments"],
  },
  {
    role: "Software Engineer Intern",
    company: "Fetch.ai",
    type: "Internship",
    location: "San Jose, CA",
    period: "Sep 2025 — Dec 2025",
    highlights: [
      "Built a custom Freelancer.com MCP server exposing 31 tools so agents could reason over jobs, bids, negotiations, and contracts.",
      "Automated 70% of freelance hiring with an autonomous multi-agent system that clarifies requirements, sources talent, drafts proposals, and tracks milestones.",
      "Designed persistent agent metadata for contextual reuse — cut redundant user input by 50%.",
    ],
    stack: ["LangChain", "FastAPI", "MCP", "Multi-agent"],
  },
  {
    role: "Software Engineer Intern",
    company: "Adobe",
    type: "Internship",
    location: "San Jose, CA",
    period: "May 2025 — Aug 2025",
    highlights: [
      "Delivered a mobile comment system for 17.2M Acrobat Mobile Web users — focused/all-comments views, navigation, emoji reactions, dynamic menus.",
      "Built a Jira MCP server + multi-agent system for sentiment analysis, bug detection, and resolution feedback — reduced manual triage by 40%.",
      "Shipped a configurable dashboard for monitoring agent-generated tickets with automated daily reports.",
    ],
    stack: ["React", "LangChain", "MCP", "Agents"],
  },
  {
    role: "Software Engineer",
    company: "BrowserStack",
    type: "Full-time",
    location: "Mumbai, India",
    period: "Jan 2022 — Jul 2024",
    highlights: [
      "Drove 8% YoY product adoption by shipping support for the Cucumber BDD testing framework.",
      "Boosted video log stability 30% → 99% and cut S3 costs 7% by engineering a new video recorder app.",
      "Unblocked a $1.3M enterprise deal by integrating the Detox framework into the platform.",
      "Awarded the Black Belt by the CTO at company town hall for the Cucumber delivery.",
    ],
    stack: ["Ruby", "Node.js", "Bash", "AWS S3"],
  },
];

// ---------- Projects ----------
export type Project = {
  title: string;
  tag: string;
  period: string;
  blurb: string;
  description: string;
  stack: string[];
  links: { github?: string; demo?: string; devpost?: string };
  featured?: boolean;
  accent?: string; // tailwind gradient
  media?: string;
};

export const projects: Project[] = [
  {
    title: "TalkNShop",
    tag: "Multimodal AI Shopping",
    period: "Jan 2026 — May 2026",
    blurb: "Multimodal iOS + Web shopping assistant — text, voice, photos, and ASL video with unified dialogue across modalities.",
    description: "An AI shopping concierge that accepts any input modality — type it, say it, photograph it, or sign it in ASL — and carries one coherent conversation across all of them. Built as my SJSU master's project.",
    stack: ["React Native", "Expo", "FastAPI", "AWS Bedrock", "LangGraph", "MediaPipe", "WebSockets"],
    links: { github: "https://github.com/pb2323/talknshop" },
    featured: true,
    accent: "from-violet-500/30 via-fuchsia-500/20 to-cyan-500/20",
  },
  {
    title: "PhysioPal",
    tag: "Privacy-first Health AI · LAHacks'26",
    period: "Apr 2026",
    blurb: "On-device pose estimation, HealthKit-adaptive routines, real-time form correction, and fall detection. No cloud, no data leaves the phone.",
    description: "SwiftUI app that turns the iPhone into a digital physiotherapist. Everything runs locally — pose estimation, form scoring, fall detection — with optional escalation to a physiotherapist.",
    stack: ["SwiftUI", "CoreML", "HealthKit", "Vision", "ZeticAI"],
    links: { github: "https://github.com/pb2323/PhysioPal" },
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
  },
  {
    title: "TA-DA",
    tag: "AI Teaching Assistant · CalHacks'26",
    period: "Feb 2026",
    blurb: "Native Zoom integration with real-time concept cards, student Q&A, instructor analytics, and catch-up summaries.",
    description: "Lectures are noisy. TA-DA listens to the Zoom RTMS stream, generates concept cards in real-time, answers students' questions privately, and gives instructors a live attention map.",
    stack: ["Zoom RTMS", "Fetch.ai", "Elasticsearch", "Node.js", "Redis", "RAG"],
    links: { github: "https://github.com/pb2323/TA-da" },
    accent: "from-amber-500/30 via-orange-500/20 to-rose-500/20",
  },
  {
    title: "Orbito",
    tag: "Agent-Ready Web · YC Vibecon",
    period: "Nov 2025",
    blurb: "SDK-first platform that lets AI agents safely control web UIs through explicit component wrapping.",
    description: "Instead of letting agents click around blindly, Orbito gives them a typed, permissioned surface — wrap a component, declare what an agent can do with it, and the platform handles the rest.",
    stack: ["React SDK", "FastAPI", "MongoDB", "Chrome Extension"],
    links: { github: "https://github.com/pb2323/Orbito" },
    accent: "from-sky-500/30 via-blue-500/20 to-indigo-500/20",
  },
  {
    title: "GigMart",
    tag: "Autonomous Freelance Coordination · Fetch.ai",
    period: "Sep 2025 — Dec 2025",
    blurb: "Agent-based platform that scopes, negotiates, and resolves freelance projects end-to-end — powered by uAgents and an MCP server over Freelancer.com.",
    description: "Entrepreneurs describe a need; autonomous agents handle scoping, talent discovery, proposal drafting, negotiation, milestone tracking, and dispute resolution. Built on Fetch.ai's uAgents with a custom 31-tool MCP server wrapping the Freelancer.com API.",
    stack: ["uAgents", "MCP", "XAI Grok", "PostgreSQL", "Redis", "Docker", "Python"],
    links: { github: "https://github.com/pb2323/GigMart" },
    accent: "from-teal-500/30 via-cyan-500/20 to-sky-500/20",
  },
  {
    title: "SafeHive",
    tag: "AI Security Sandbox · A10 2nd Prize",
    period: "Oct 2025",
    blurb: "Multi-agent food-ordering sandbox to stress-test LLM security detection with real-time fraud prevention.",
    description: "A controlled environment to red-team LLM-powered agents. Privacy Sentry, Task Navigator, and Prompt Sanitizer modules sit between user and model — 2nd of 120+ teams.",
    stack: ["LangChain", "Ollama", "FastAPI", "Multi-agent"],
    links: { github: "https://github.com/pb2323/SafeHive" },
    accent: "from-rose-500/30 via-pink-500/20 to-fuchsia-500/20",
  },
  {
    title: "Lumos",
    tag: "Memory Assistance · LAHacks'25 (2nd Overall)",
    period: "Apr 2025",
    blurb: "AR-glasses memory system for Alzheimer's patients — facial recognition, autonomous agents, caregiver mobile app.",
    description: "Snapchat Spectacles + Fetch.ai agents recognize faces, surface contextual memory cues, and loop in caregivers when something looks off. 2nd of 172 teams; FetchAI track winner.",
    stack: ["Fetch.ai", "Gemini 2.5", "Lens Studio", "React Native", "MongoDB Atlas"],
    links: { github: "https://github.com/pb2323/Lumos" },
    accent: "from-indigo-500/30 via-violet-500/20 to-purple-500/20",
  },
  {
    title: "DevQuest.IO",
    tag: "Coding Progress Tracker · SJSU CMPE-281",
    period: "Sep 2024 — Dec 2024",
    blurb: "Unified analytics across coding platforms — RAG recommendations, real-time updates, microservices on Kubernetes.",
    description: "End-to-end distributed system: Kafka messaging, WebSockets, RAG-based recommendations, 2FA/SSO via Keycloak, Prometheus + Elastic observability, CI/CD on Kubernetes.",
    stack: ["Python", "TypeScript", "Next.js", "Kafka", "Kubernetes", "Elasticsearch", "Keycloak"],
    links: { github: "https://github.com/DevQuestIO" },
    accent: "from-cyan-500/30 via-sky-500/20 to-blue-500/20",
    media: devquest,
  },
  {
    title: "CodeColab",
    tag: "Realtime Collaborative Editor · SJSU",
    period: "Feb 2025 — May 2025",
    blurb: "Multi-user simultaneous editing, live cursors, version history, in-app chat — built in Qt 6.",
    description: "WebSocket client-server architecture with classical design patterns (Singleton, Observer, Factory). Live cursor tracking, access control, and in-editor chat.",
    stack: ["Qt 6", "C++", "WebSockets"],
    links: { github: "https://github.com/pb2323/codecolab" },
    accent: "from-lime-500/30 via-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Network-IN",
    tag: "Web3 Freelance Network",
    period: "Jan 2022 — May 2022",
    blurb: "Freelancer social platform with WebRTC calls, IPFS storage, and Ethereum smart-contract escrow.",
    description: "Social networking for freelancers and clients, blending traditional social features with on-chain escrow on Ethereum/Polygon. WebRTC for audio/video, IPFS for content.",
    stack: ["Next.js", "Solidity", "Node.js", "Socket.io", "IPFS", "WebRTC"],
    links: { github: "https://github.com/pb2323/Social_Media_App" },
    accent: "from-orange-500/30 via-amber-500/20 to-yellow-500/20",
    media: networkin,
  },
];

// ---------- Achievements ----------
export type Achievement = {
  rank: string;
  event: string;
  prize: string;
  project: string;
  date: string;
  detail?: string;
};

export const achievements: Achievement[] = [
  {
    rank: "3rd",
    event: "LAHacks'26",
    prize: "ZeticAI Track Winner",
    project: "PhysioPal",
    date: "Apr 2026",
    detail: "On-device physiotherapy AI",
  },
  {
    rank: "3rd",
    event: "CalHacks'26 / TreeHacks",
    prize: "Zoom Education Track Winner",
    project: "TA-DA",
    date: "Feb 2026",
    detail: "Real-time AI teaching assistant",
  },
  {
    rank: "2nd",
    event: "A10 AI Hackathon",
    prize: "2nd of 120+ teams",
    project: "SafeHive",
    date: "Oct 2025",
    detail: "LLM security sandbox",
  },
  {
    rank: "2nd",
    event: "LAHacks'25",
    prize: "2nd Overall · FetchAI Track Winner",
    project: "Lumos",
    date: "Apr 2025",
    detail: "AR memory assistance · 172 teams",
  },
  {
    rank: "1st",
    event: "HackDavis'25",
    prize: "Nami Yolo Track Winner",
    project: "CareConnect",
    date: "Apr 2025",
    detail: "Caregiver coordination platform",
  },
  {
    rank: "★",
    event: "BrowserStack",
    prize: "Black Belt Award (CTO)",
    project: "Cucumber framework delivery",
    date: "2023",
    detail: "Recognized at company town hall",
  },
];

// ---------- Tech stack (categorized chips) ----------
export const techStack: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Swift", "Ruby", "C++", "Java", "Rust", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "SwiftUI", "Vite", "Expo", "Tailwind", "Qt"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Express", "Django", "Ruby on Rails", "GraphQL", "WebSockets"],
  },
  {
    category: "AI / Agents",
    items: ["LangChain", "LangGraph", "Fetch.ai", "MCP", "RAG", "AWS Bedrock", "Gemini", "Ollama", "MediaPipe"],
  },
  {
    category: "Data",
    items: ["MongoDB", "PostgreSQL", "DynamoDB", "Redis", "Elasticsearch", "Kafka"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Keycloak", "Vercel"],
  },
];

// ---------- Education ----------
export const education = [
  {
    school: "San Jose State University",
    degree: "M.S. Computer Software Engineering",
    period: "Aug 2024 — May 2026",
    detail: "CGPA 3.75 · Enterprise Technologies specialization",
  },
];

// ---------- Sports / off-the-clock ----------
export const sports = {
  playing: ["Badminton", "Table Tennis", "Swimming", "Pickleball", "Hiking"],
  learning: ["Tennis", "Boxing"],
};

// ---------- Social ----------
export const socials = {
  email: "puneet.bajaj@sjsu.edu",
  linkedin: "https://www.linkedin.com/in/puneet-bajaj-/",
  github: "https://github.com/pb2323",
  devpost: "https://devpost.com/puneet-bajaj",
  leetcode: "https://leetcode.com/u/pbajaj0023",
  resume: resumeLink,
};
