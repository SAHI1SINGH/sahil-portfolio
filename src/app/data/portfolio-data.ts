export const personalInfo = {
  name: 'Sahil Kumar',
  firstName: 'Sahil',
  brandName: 'Sahil Kumar',
  title: 'Java Full Stack Developer',
  location: 'Munger, Bihar, India',
  phone: '+91 8877382998',
  emails: {
    primary: 'sk.sahilkumar.2512@gmail.com',
  },
  summary:
    'Java Full Stack Developer building scalable full-stack applications with Java, Spring Boot, Flutter, and MongoDB — currently working as a Technical Assistant at Tadoba Solutions Pvt. Ltd.',
  resumeUrl: 'sahil_resume.pdf', 
};

export const socialLinks = {
  github: 'https://github.com/SAHI1SINGH',
  linkedin: 'https://www.linkedin.com/in/sahil-kumar2512',
  instagram: 'https://instagram.com/sahi1_singh',
};

export const heroContent = {
  greeting: `Hi, I'm ${personalInfo.name}`,
  titleHighlight: personalInfo.title,
  subtitle:
    'I build fast, scalable applications using Java, Spring Boot, Flutter, and MongoDB — from mobile apps to production backends.',
  ctaPrimary: { text: 'View My Work', href: '#projects' },
  ctaSecondary: {
    text: 'Contact Me',
    href: `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`,
  },
  ctaResume: { text: 'Download Resume', href: personalInfo.resumeUrl },
};

export const aboutContent = {
  heading: 'Hello!',
  bioHtml: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">${personalInfo.name}</span>, a Java Full Stack Developer based in ${personalInfo.location}, dedicated to crafting clean, functional, and highly scalable full-stack applications.`,
  techStack: ['Java', 'Spring Boot', 'Flutter'],
};

export const skillsContent = {
  badge: 'My Process',
  heading: "Here's how I turn ideas into real-world applications",
  description:
    'I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.',
  cards: [
    {
      number: '01',
      title: 'Research',
      text: 'I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.',
    },
    {
      number: '02',
      title: 'Design',
      text: 'Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.',
    },
    {
      number: '03',
      title: 'Develop',
      text: 'Building scalable backends and responsive frontends using modern tech stacks and best practices.',
    },
    {
      number: '04',
      title: 'Deploy',
      text: 'Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.',
    },
  ],
  endText: 'Ready to ship!',
};

export const technicalSkills = {
  categories: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Dart', level: 85 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      title: 'Full Stack',
      skills: [
        { name: 'Flutter', level: 88 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Angular', level: 78 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: 'Node.js', level: 65 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Linux VPS', level: 80 },
        { name: 'Nginx', level: 75 },
        { name: 'PM2', level: 78 },
        { name: 'Postman', level: 85 },
      ],
    },
    {
      title: 'Computer Science Concepts',
      skills: [
        { name: 'Data Structures', level: 85 },
        { name: 'Algorithms', level: 82 },
        { name: 'DBMS', level: 80 },
        { name: 'OOP', level: 88 },
      ],
    },
  ],
};

// Replaces the old "Cinematic Content" section — now focused on DSA / coding practice
export const codingJourney = {
  badge: 'Beyond Production Code',
  heading: 'DSA Practice & Interview Preparation',
  description:
    'Alongside building production systems, I consistently sharpen my problem-solving skills through structured DSA practice — preparing for FAANG-level technical interviews with a focus on strong fundamentals and system design.',
  categories: [
    {
      title: 'LeetCode Practice',
      description: 'Regularly solving problems across arrays, DP, sliding window, graphs, and trees to build interview-ready problem-solving speed.',
      stats: 'Ongoing Practice',
      icon: '💻',
    },
    {
      title: 'Structured DSA Roadmap',
      description: 'Following a focused, topic-wise roadmap covering core data structures and algorithms for technical interview readiness.',
      stats: 'Roadmap-Driven',
      icon: '🗺️',
    },
    {
      title: 'System Design',
      description: 'Studying HLD/LLD concepts and applying them to real backend systems I build, like IoT device management platforms.',
      stats: 'Applied Learning',
      icon: '🏗️',
    },
    {
      title: 'Java Backend Focus',
      description: 'Deep-diving into Spring Boot internals, security, caching, and messaging (MQTT/WebSockets) through hands-on production work.',
      stats: 'Hands-on Projects',
      icon: '⚡',
    },
  ],
};

// [EDIT AS NEEDED] — leadership: filled with reasonable entries based on known activities
export const leadershipList = [
  {
    title: 'Java Full Stack Development Program',
    description: 'Completed an intensive full stack training program covering Java, Spring Boot, Angular, and databases, building multiple real-world projects under industry mentorship.',
    role: 'Trainee',
    badge: 'Bootcamp',
  },
  {
    title: 'DSA & Interview Prep Practice',
    description: 'Self-driven consistent practice on LeetCode and structured DSA roadmaps, staying accountable to interview-readiness goals.',
    role: 'Self-Initiated',
    badge: 'Learning',
  },
  {
    title: 'End-to-End Product Ownership at Tadoba Solutions',
    description: 'Took ownership of features across the stack — from backend architecture to Flutter UI — for production systems used by real clients.',
    role: 'SDE-I',
    badge: 'Ownership',
  },
];

// Real: Technical Assistant role, plus training internship
export const internshipsList = [
  {
    organization: 'Tadoba Solutions Pvt. Ltd. (incubated by IBITF, IIT Bhilai)',
    role: 'SDE-I',
    duration: 'Current',
    skills: ['Full Stack Development', 'Product Ownership', 'DevOps'],
    tech: ['Flutter', 'Spring Boot', 'MongoDB', 'Linux VPS'],
  },
  {
    organization: 'QSpiders (JSpiders), Noida',
    role: 'Java Full Stack Developer Trainee',
    duration: '6 Months',
    skills: ['Full Stack Development', 'Product Ownership', 'DevOps'],
    tech: ['Flutter', 'Spring Boot', 'MongoDB', 'Linux VPS'],
  },
];

// [PLACEHOLDER SECTION] — soft skills: generic starting set, edit freely
export const softSkillsList = [
  { name: 'Problem Solving', icon: '🧩', desc: 'Breaking down complex engineering tasks into clean, logical, and modular pieces.' },
  { name: 'Communication', icon: '💬', desc: 'Clear, concise, and structured interactions in both technical and business contexts.' },
  { name: 'Team Collaboration', icon: '🤝', desc: 'Working across roles to ship features end to end, from backend to UI.' },
  { name: 'Adaptability', icon: '🌟', desc: 'Quick to pick up new frameworks, tools, and deployment environments.' },
  { name: 'Ownership', icon: '🎯', desc: 'Taking projects from idea to production and owning the outcome.' },
  { name: 'Time Management', icon: '⏰', desc: 'Balancing multiple products and deadlines without dropping quality.' },
];

export const projects = [
  {
    id: 'TadobaSolar',
    number: '01',
    badge: '🚀 Flagship Project',
    title: 'Tadoba Solar',
    description:
      'A solar energy management app for consumers and admins. Flutter frontend with a Spring Boot backend on MongoDB, covering plant monitoring, user management, and admin controls.',
    techTags: ['Flutter', 'Spring Boot', 'MongoDB', 'REST API'],
    links: {
      github: '#',
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: 'TadobaMIS',
    number: '02',
    badge: null,
    title: 'Tadoba MIS',
    description:
      'An employee management information system with Admin, Sub-Admin, and Employee roles — covering leave workflows, attendance, and internal operations.',
    techTags: ['Flutter', 'Spring Boot', 'MongoDB'],
    links: {
      github: '#', // [PLACEHOLDER] add repo link
    },
    isFlagship: false,
  },
  {
    id: 'agritech',
    number: '03',
    badge: null,
    title: 'AgriTech',
    description:
      'An IoT device management platform with a Flutter app and admin panel, Spring Boot backend, MQTT messaging, Redis caching, and real-time WebSocket updates for device telemetry and health monitoring.',
    techTags: ['Flutter', 'Spring Boot', 'MySQL', 'Redis', 'MQTT', 'WebSockets'],
    links: {
      github: '#',
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    { name: 'Java FullStack Developer', issuer: 'Qspider', icon: '☁️' },
    { name: 'Data Structure and Algorithm', issuer: 'TechVidvan', icon: '☕' },
    { name: 'Cyber-Security', issuer: 'Udemy', icon: '⚙️' },
  ],
  viewAllUrl: '#',
};

export const education = {
  degree: 'B.Tech, Electronics & Communication Engineering (ECE)',
  institution: 'Government Engineering College, Jamui',
  graduation: '2025',
};

export const footerContent = {
  taglines: ['Java Full Stack Developer', 'Java · Spring Boot · Flutter', 'Full Stack Applications'],
  credential: 'Java Full Stack Developer',
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name} | Built with Angular`,
};