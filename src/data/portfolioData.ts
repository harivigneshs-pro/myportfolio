export const portfolioData = {
  name: "Hari Vignesh S",
  title: "Full Stack Developer",
  bio: "Passionate developer crafting digital experiences with modern technologies. I transform complex problems into elegant, scalable solutions. With expertise spanning frontend frameworks, backend architecture, and cloud infrastructure, I build products that make an impact.",
  email: "harivigneshs002@gmail.com",
  phone: "+91 6385397558",
  location: "kumbakonam",
  resumeLink: "https://drive.google.com/file/d/1GiS5z-k0Qa-85Xey-52aavDEAlNA_ko4/view?usp=drive_link",

  socialLinks: [
    { name: "GitHub", url: "https://github.com/harivigneshs-pro", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hari-vignesh-sivakumar-bbb9b03a2/", icon: "Linkedin" },
  ],

  stats: {
    projectsCompleted: 5,
    technologiesLearned: 8,
    certificationsEarned: 6,
    yearsExperience: 1,
  },

  skills: [
    { name: "HTML5", icon: "SiHtml5", category: "Frontend" },
    { name: "CSS3", icon: "SiCss3", category: "Frontend" },
    { name: "JavaScript", icon: "SiJavascript", category: "Frontend" },
    { name: "TypeScript", icon: "SiTypescript", category: "Frontend" },
    { name: "React", icon: "SiReact", category: "Frontend" },
    { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
    { name: "Node.js", icon: "SiNodedotjs", category: "Backend" },
    { name: "Express", icon: "SiExpress", category: "Backend" },
    { name: "Python", icon: "SiPython", category: "Backend" },
    { name: "MongoDB", icon: "SiMongodb", category: "Database" },
    { name: "PostgreSQL", icon: "SiPostgresql", category: "Database" },
    { name: "MySQL", icon: "SiMysql", category: "Database" },
    { name: "AWS", icon: "SiAmazonaws", category: "Cloud" },
    { name: "Docker", icon: "SiDocker", category: "Cloud" },
    { name: "Git", icon: "SiGit", category: "Tools" },
    { name: "GitHub", icon: "SiGithub", category: "Tools" },
    { name: "VS Code", icon: "SiVisualstudiocode", category: "Tools" },
  ],

  experience: [
    {
      id: 1,
      company: "EFIQ solutions",
      role: "Full stack developer",
      duration: "(feb 2026 - Present)",
      achievements: [
        "Built an Saas ecommerce Platform using next.js",
        "Developed an enterprise-level inventory management system with real-time tracking and automated reporting, enhancing operational efficiency.",
        "integrated payment gateway api with ecommerce platform for seamless transaction",
        "Architected and deployed a production-ready MERN stack application on AWS infrastructure, ensuring 99.9% uptime and scalability."
        
      ],
    },
    {
      id: 2,
      company: "Better Tommorow",
      role: "internship",
      duration: "2025 - 2026",
      achievements: [
       "Built a MERN stack web application with seamless user authentication, real-time chat, and an integrated admin dashboard to streamline campus communication and task management.",
       "Implemented JWT authentication and RBAC to secure application data and user access.",
       "Developed real-time features using Socket.IO, enabling instant messaging and live updates across the platform.",
       "Optimized database schema and queries, reducing data retrieval time by 40% and improving overall application performance."
      ],
    },
    {
      id: 3,
      company: "Algo tutor",
      role: "Modern Full Stack(NextJs)",
      duration: "2026-2027",
      achievements: [
       "Developed a scalable, full-stack Next.js application with TypeScript, implementing server-side rendering (SSR), client-side routing, and robust API integration.",
       "Built reusable React components with TypeScript, enforcing type safety and improving code maintainability across the application.",
       "Optimized Next.js application for performance, implementing code splitting, lazy loading, and image optimization to achieve a Lighthouse score of 98+.",
       
      ],
    },
  ],

  projects: [
    {
  id: 1, // Increment as needed for your array
  title: "AeroOps SaaS", // Or your specific product name
  description: "Next-generation aircraft fleet management and maintenance SaaS. Features real-time telemetry tracking, predictive maintenance scheduling, fuel optimization analytics, and compliance reporting for commercial aviation.",
  image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop", 
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Docker"],
  githubUrl: "https://github.com/harivigneshs-pro/DT_AIR_CRAFT_PROJECT",
  liveUrl: "#",
  category: "Full stack", // Or "Aviation" / "Enterprise" depending on your filter categories
  featured: true,
},
  {
  id: 2, // Increment based on your array order
  title: "ClearFlow No-Due System", // Professional name for a No-Due project
  description: "An automated digital clearance and 'No Due Certificate' management platform. Replaces manual paper routing with an automated workflow, featuring role-based dashboards for students, department heads, library staff, and administration.",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop", // Clean, professional dashboard/document vibe
  techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"], // Adjust this stack to match what you used!
  githubUrl: "https://github.com/harivigneshs-pro/NODUETRACKER",
  liveUrl: "#",
  category: "Full Stack", // Or "Enterprise", "Full Stack"
  featured: false,
},
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool with Kanban boards, Gantt charts, and team analytics. Features real-time updates and offline support.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      techStack: ["React", "TypeScript", "Express", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Full Stack",
      featured: false,
    }
  ],

  certifications: [
    {
      id: 1,
      title: "CONCEPTS OF OPERATING SYSTEM",
      organization: "Udemy",
      date: "2026",
      logo: "SiUdemy",
    },
    {
      id: 2,
      title: "DESIGN THINKING -A PRIME",
      organization: "NPTEL",
      date: "2026",
      logo: "SiNptel",
    },
    {
      id: 3,
      title: "A BEGINNER'S GUIDE TO REACT.JS",
      organization: "Coursera",
      date: "2026",
      logo: "SiCoursera",
    },
    {
      id: 4,
      title: "Mastering Data Structures & Algorithms using C and C++",  
      organization: "Udemy",
      date: "2026",
      logo: "SiUdemy",
    },
  ],

  achievements: [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "3rd place at Design Thinking Hackathon 2026-sece",
      count: 1,
      icon: "Trophy",
    },
    {
      id: 2,
        title: "SICPC PRODIGY AWARD ",
        description: "Selected among 3000+ participants",
      count: 1,
      icon: "GitPullRequest",
    },
 
    {
      id: 3,
      title: "Case study-2025",
      description: "Second Prize at Mirai 2025",
      count: 1,
      icon: "Award",
    },

  ],
};
