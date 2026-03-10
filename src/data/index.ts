export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build things for real users — not just for my portfolio.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Pokhara, Nepal — open to remote work",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always learning, always shipping",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "BCIS student — bridging theory with real-world builds.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building full-stack fluency — Laravel, SQL & clean architecture",
    description: "Always in the lab",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to build something together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Suraki — FON Wildlife Reporting Platform",
    shortDes:
      "Live civic-tech platform enabling citizens to report illegal forest & wildlife activities across Nepal. Backed by Gandaki Province Government.",
    contributions: [
      "Built Thank You page for first-time incident acknowledgements — clear confirmation feedback to users after successful submission.",
      "Built Warning page triggered on duplicate acknowledgement attempts, preventing double submissions and protecting data integrity.",
      "Integrated both pages with backend via RESTful APIs for dynamic, state-based response handling.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://suraki.nicnepal.org/login",
    isLive: true,
    type: "Internship · NIC ICT Lab",
  },
  {
    id: 2,
    title: "Restaurant Menu Website",
    shortDes:
      "Fully responsive digital menu application for hotels and restaurants with real-time backend-driven content and smart filtering.",
    contributions: [
      "Sole frontend dev — designed and built the complete responsive UI from scratch using Next.js and TypeScript.",
      "Integrated with backend REST APIs for dynamic menu category and item fetching with real-time updates.",
      "Built search and filter with string-based ID filtering from the frontend, significantly improving browsing speed and usability.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    img: "/p2.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "#",
    isLive: false,
    type: "Internship · NIC ICT Lab · Pending Deployment",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    shortDes:
      "Real-time weather app built independently using the OpenWeather API. No tutorial — just docs, trial, and error.",
    contributions: [
      "Integrated OpenWeather API to fetch and display live weather data including current conditions, temperature, and humidity.",
      "Built entirely from API docs — hands-on experience with third-party API consumption and async data handling.",
    ],
    stack: ["React", "Tailwind CSS", "OpenWeather API"],
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "#",
    isLive: false,
    type: "Personal Project",
  },
  {
    id: 4,
    title: "Karyaspace — Task Management System",
    shortDes:
      "Full-stack TMS supporting team workflows, task assignment, status tracking, and user roles.",
    contributions: [
      "Built the full backend with Laravel including task CRUD, user role management, and team assignment logic.",
      "Designed and implemented the frontend interface for task tracking and status updates using Tailwind CSS.",
      "My first serious full-stack project — proved I could ship beyond the frontend.",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    img: "/p4.png",
    iconLists: ["/tail.svg" , "/laravel.svg"],
    link: "#",
    isLive: false,
    type: "Personal Project",
  },
];

export const skills = [
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "React", category: "Frontend", level: 85 },
  { name: "TypeScript", category: "Frontend", level: 75 },
  { name: "JavaScript", category: "Frontend", level: 80 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "Laravel", category: "Backend", level: 65 },
  { name: "PHP", category: "Backend", level: 60 },
  { name: "MySQL / SQL", category: "Backend", level: 65 },
  { name: "REST APIs", category: "Backend", level: 80 },
  { name: "Git / GitHub", category: "Tools", level: 75 },
  { name: "Clean Architecture", category: "Tools", level: 70 },
  { name: "Responsive Design", category: "Tools", level: 90 },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Intern",
    company: "National Innovation Center — ICT Lab",
    location: "Pokhara Branch, Nepal",
    period: "Nov 2025 – Mar 2026",
    desc: "Worked as frontend developer on two real production products: the Suraki environmental reporting platform (live) and a restaurant digital menu app (pending deployment). Built and integrated features end-to-end.",
    highlights: [
      "Suraki: acknowledgement response pages integrated with backend via REST APIs",
      "Menu App: complete frontend from design to API integration, search & filter",
      "Stack: Next.js · TypeScript · React · Tailwind CSS",
    ],
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "BCIS Student",
    company: "Bachelor of Computer Information Systems",
    location: "Pokhara, Nepal",
    period: "Ongoing",
    desc: "Studying CS fundamentals alongside shipping real projects. Applied Clean Architecture principles from coursework into every project since. The degree gives the theory — the projects give the experience.",
    highlights: [
      "Applied Clean Architecture principles across all projects",
      "Built 4 projects during studies spanning frontend, full-stack & API integrations",
    ],
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Ramesh6060",
    label: "GitHub",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/chet-bdr-gurung/",
    label: "LinkedIn",
  },
];