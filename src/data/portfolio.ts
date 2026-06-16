export const personalInfo = {
  name: "Gaurav Sharma",
  location: "Mohali, Punjab, India",
  email: "gs2004.03.09@gmail.com",
  github: "https://github.com/gaurav-2213",
  linkedin: "https://linkedin.com/in/gaurav_sharma",
  leetcode: "https://leetcode.com/u/gaurav_sharma",
  codechef: "https://www.codechef.com/users/gaurav_sharma",
  gfg: "https://auth.geeksforgeeks.org/user/gaurav_sharma",
  degree: "B.Tech Computer Science & Engineering",
  college: "Chandigarh Group of Colleges, Jhanjeri",
  duration: "2023–2027",
  cgpa: "8.22",
};

export const heroRoles = [
  "Full Stack Developer",
  "Software Engineer",
  "AI Enthusiast",
  "Competitive Programmer",
];

export const summary =
  "Results-driven Software Engineering student with experience in Full Stack Development, Real-Time Applications, and AI-based Systems. Strong knowledge of C++, JavaScript, React.js, Node.js, MongoDB, MySQL, Data Structures & Algorithms, and Machine Learning.";

export const careerGoals = [
  "Build scalable full-stack applications with modern web technologies",
  "Contribute to open-source and real-world AI/ML solutions",
  "Excel in competitive programming and technical problem solving",
  "Secure a role as a Software Engineer at a product-driven company",
];

export const stats = [
  { label: "CGPA", value: 8.22, suffix: "" },
  { label: "Projects", value: 2, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "+" },
  { label: "Years of Study", value: 4, suffix: "" },
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "Code2",
    skills: [
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Responsive Design", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Socket.io", level: 80 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "OpenCV", level: 78 },
      { name: "TensorFlow", level: 72 },
      { name: "Computer Vision", level: 76 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const experience = [
  {
    title: "Front-End Development Intern",
    company: "Prerna Gati & Technology (PG-Tech)",
    location: "Mohali",
    duration: "6 Weeks",
    responsibilities: [
      "Developed responsive web pages using modern HTML, CSS, and JavaScript",
      "Converted UI/UX designs into functional, pixel-perfect interfaces",
      "Fixed front-end bugs and improved cross-browser compatibility",
      "Improved website performance and responsiveness across devices",
    ],
  },
];

export const projects = [
  {
    id: "chat-app",
    title: "Real-Time Network Chat Application",
    category: "fullstack",
    technologies: ["Node.js", "Socket.io", "MySQL", "JavaScript"],
    description:
      "A real-time multi-client chat application with low-latency communication, MySQL message storage, chat history retrieval, and optimized socket connection handling.",
    highlights: [
      "Real-time multi-client messaging",
      "Socket.io low-latency communication",
      "MySQL message persistence",
      "Chat history retrieval",
    ],
    github: "https://github.com/gaurav-2213",
    demo: "#",
  },
  {
    id: "weapon-detection",
    title: "AI-Powered Weapon Detection System",
    category: "ai",
    technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    description:
      "An AI-based weapon detection system for real-time image and video analysis using deep learning, designed for security and surveillance applications.",
    highlights: [
      "Real-time image & video analysis",
      "Deep learning with TensorFlow",
      "Preprocessing & hyperparameter tuning",
      "Security & surveillance focused",
    ],
    github: "https://github.com/gaurav-2213",
    demo: "#",
  },
];

export const achievements = [
  {
    title: "Code Katana 3.0 Winner",
    description: "1st Place – Code Katana 3.0 Coding Competition",
    badge: "🏆",
    featured: true,
  },
  {
    title: "Competitive Programmer",
    description: "Active on LeetCode, GFG, and CodeChef",
    badge: "💻",
    featured: false,
  },
  {
    title: "Hackathon Participant",
    description: "Participated in National-Level Hackathons",
    badge: "🚀",
    featured: false,
  },
];

export const codingProfiles = [
  {
    name: "LeetCode",
    url: personalInfo.leetcode,
    icon: "Code",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    name: "CodeChef",
    url: personalInfo.codechef,
    icon: "Trophy",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "GeeksforGeeks",
    url: personalInfo.gfg,
    icon: "BookOpen",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export const certifications = [
  "AWS Academy Graduate – Generative AI Foundation",
  "Web Development Training – PG-Tech Mohali",
  "Problem Solving Certification – CodeChef",
  "Full Stack Web Development Master Class",
  "Code Katana 3.0 Winner Certificate",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI / ML" },
];
