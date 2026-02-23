export type Service = {
  icon: string;
  color: "cyan" | "amber" | "violet";
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    icon: "⚡",
    color: "cyan",
    title: "Full-Stack Web Development",
    description:
      "End-to-end MERN/Next.js applications — from database design to pixel-perfect UI. Scalable, secure, production-deployed.",
    deliverables: ["REST/GraphQL API", "Admin dashboard", "Auth system", "CI/CD pipeline"],
  },
  {
    icon: "🤖",
    color: "violet",
    title: "Agentic AI Systems",
    description:
      "Custom LLM-powered workflows, RAG pipelines, and multi-agent automation using LangChain, LangGraph, and CrewAI.",
    deliverables: ["RAG chatbot", "Multi-agent pipeline", "LLM API integration", "Streaming UI"],
  },
  {
    icon: "📱",
    color: "amber",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps with React Native and Expo. Store submission, OTA updates, and ongoing maintenance.",
    deliverables: ["iOS + Android builds", "Expo EAS CI", "App Store submission", "Push notifications"],
  },
  {
    icon: "🎨",
    color: "cyan",
    title: "Frontend Engineering",
    description:
      "High-performance, accessible, animated UIs with Next.js, Vue, and Tailwind. Design systems, dashboards, landing pages.",
    deliverables: ["Next.js SPA/SSG", "Design system", "Performance audit", "Framer animations"],
  },
  {
    icon: "🔧",
    color: "amber",
    title: "DevOps & Cloud Setup",
    description:
      "Docker containerization, GitHub Actions CI/CD, Nginx, SSL, AWS/Railway deployment. Ship faster, break less.",
    deliverables: ["Docker Compose setup", "GitHub Actions pipeline", "SSL + domain config", "Monitoring alerts"],
  },
  {
    icon: "🧠",
    color: "violet",
    title: "Technical Consulting",
    description:
      "Architecture reviews, AI strategy roadmaps, code audits, and performance optimization for existing products.",
    deliverables: ["Tech stack audit", "Architecture diagram", "Performance report", "Roadmap deck"],
  },
];
