export type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  type: "freelance" | "fulltime";
  period: string;
  description: string[];
  tech: string[];
  current: boolean;
};

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full-Stack & AI Engineer",
    company: "Freelance / Remote",
    type: "freelance",
    period: "2023 — Present",
    description: [
      "Architected and shipped 8+ production MERN applications for global clients across e-commerce, SaaS, and fintech verticals.",
      "Built multi-agent AI systems using LangGraph and CrewAI, reducing manual content workflows by 70%.",
      "Delivered React Native mobile apps to both App Store and Play Store with 4.7★ average ratings.",
      "Set up Docker + GitHub Actions CI/CD pipelines achieving zero-downtime deployments.",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "LangChain", "React Native", "Docker"],
    current: true,
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Tech Startup (Remote)",
    type: "fulltime",
    period: "2022 — 2023",
    description: [
      "Led frontend rebuild of core product from Vue.js 2 to Next.js 13, improving LCP by 62%.",
      "Built a component library in React + Storybook adopted across 3 product teams.",
      "Integrated OpenAI API for an in-product AI writing assistant, driving 35% increase in user engagement.",
    ],
    tech: ["Next.js", "Vue.js", "TypeScript", "Storybook", "OpenAI API", "Tailwind CSS"],
    current: false,
  },
  {
    id: 3,
    role: "MERN Stack Developer",
    company: "Digital Agency (On-site)",
    type: "fulltime",
    period: "2021 — 2022",
    description: [
      "Developed RESTful APIs and React frontends for 12+ client projects in e-commerce and logistics.",
      "Introduced Redis caching layer reducing API response times by 45%.",
      "Mentored 2 junior developers and established internal code review standards.",
    ],
    tech: ["React", "Express", "MongoDB", "Redis", "Node.js", "AWS S3"],
    current: false,
  },
];
