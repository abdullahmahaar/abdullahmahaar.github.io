export type ProjectCategory = "mern" | "frontend" | "ai" | "mobile" | "devops";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory[];
  featured: boolean;
  description: string;
  longDescription?: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "DevBoard — Real-time Project Management",
    category: ["mern"],
    featured: true,
    description:
      "A Jira-like kanban board with real-time collaboration via Socket.io, role-based access, sprint planning, Gantt charts, and Slack-style team messaging.",
    longDescription:
      "Built with Node.js/Express backend, React + Zustand frontend, MongoDB Atlas, Socket.io for live updates, JWT + refresh token auth, Redis session caching, and hosted on Railway + Vercel.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redis", "JWT", "Tailwind CSS"],
    github: "https://github.com/yourusername/devboard",
    demo: "https://devboard.vercel.app",
    image: "/assets/images/projects/devboard.webp",
    highlights: ["Real-time sync <50ms latency", "Role-based permissions", "Drag-and-drop Kanban"],
  },
  {
    id: 2,
    title: "ShopX — Full-Stack E-Commerce Platform",
    category: ["mern"],
    featured: false,
    description:
      "Production-grade e-commerce with Stripe payments, inventory management, vendor dashboard, order tracking, and admin analytics.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Cloudinary", "Redux Toolkit"],
    github: "https://github.com/yourusername/shopx",
    demo: "https://shopx-demo.vercel.app",
    image: "/assets/images/projects/shopx.webp",
    highlights: ["Stripe Checkout + webhooks", "Vendor multi-tenancy", "SEO-optimized product pages"],
  },
  {
    id: 3,
    title: "Luminary UI — Component Design System",
    category: ["frontend"],
    featured: true,
    description:
      "A production design system with 40+ accessible components, Storybook docs, dark/light theming, and Figma-to-code parity.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI", "Framer Motion"],
    github: "https://github.com/yourusername/luminary-ui",
    demo: "https://luminary-ui.vercel.app",
    image: "/assets/images/projects/luminary-ui.webp",
    highlights: ["WCAG 2.1 AA compliant", "40+ components", "Figma token sync"],
  },
  {
    id: 4,
    title: "Analytiq — SaaS Analytics Dashboard",
    category: ["frontend", "mern"],
    featured: false,
    description:
      "Real-time business analytics dashboard with D3.js charts, filterable data tables, CSV export, team workspaces, and subscription billing.",
    techStack: ["Next.js", "Vue.js", "D3.js", "Nuxt", "TailwindCSS", "Stripe"],
    github: "https://github.com/yourusername/analytiq",
    demo: "https://analytiq.vercel.app",
    image: "/assets/images/projects/analytiq.webp",
    highlights: ["10+ chart types", "CSV/PDF export", "Multi-workspace support"],
  },
  {
    id: 5,
    title: "AgentFlow — LLM Workflow Orchestration Platform",
    category: ["ai"],
    featured: true,
    description:
      "A no-code/low-code platform to build, test, and deploy multi-agent LLM pipelines visually. Supports LangGraph flows, tool calling, memory, and RAG.",
    longDescription:
      "Drag-and-drop node editor (React Flow) for designing agentic workflows. Backend powered by FastAPI + LangGraph, with Pinecone vector DB, streaming SSE responses, and one-click deploy to Railway.",
    techStack: ["React", "React Flow", "FastAPI", "LangGraph", "LangChain", "Pinecone", "OpenAI", "Anthropic", "Docker"],
    github: "https://github.com/yourusername/agentflow",
    demo: "https://agentflow.app",
    image: "/assets/images/projects/agentflow.webp",
    highlights: ["Visual workflow editor", "Multi-LLM support", "RAG with Pinecone", "Streaming responses"],
  },
  {
    id: 6,
    title: "DocuMind — AI Document Intelligence",
    category: ["ai", "mern"],
    featured: true,
    description:
      "Upload PDFs, spreadsheets, or URLs and chat with them using RAG. Features multi-doc comparison, citation highlighting, and shareable AI sessions.",
    techStack: ["Next.js", "LangChain", "FAISS", "OpenAI", "Node.js", "MongoDB", "Vercel AI SDK"],
    github: "https://github.com/yourusername/documind",
    demo: "https://documind.vercel.app",
    image: "/assets/images/projects/documind.webp",
    highlights: ["Multi-format ingestion", "Source citation UI", "Shareable chat sessions"],
  },
  {
    id: 7,
    title: "CrewOps — Multi-Agent Task Automation",
    category: ["ai"],
    featured: false,
    description:
      "A CrewAI-powered automation system where specialized agents collaboratively research, write, review, and publish content with human-in-the-loop checkpoints.",
    techStack: ["CrewAI", "Python", "FastAPI", "React", "OpenAI", "Serper API", "Redis Queue"],
    github: "https://github.com/yourusername/crewops",
    demo: "",
    image: "/assets/images/projects/crewops.webp",
    highlights: ["5-agent pipeline", "Human-in-loop approval gates", "Async task queuing"],
  },
  {
    id: 8,
    title: "FitTrack — AI-Powered Fitness App",
    category: ["mobile"],
    featured: true,
    description:
      "A React Native fitness app with AI workout generation, progress tracking, nutrition logging, wearable sync, and social challenges.",
    techStack: ["React Native", "Expo", "FastAPI", "OpenAI", "SQLite", "Reanimated 3", "Expo Router"],
    github: "https://github.com/yourusername/fittrack",
    demo: "https://expo.dev/@yourusername/fittrack",
    image: "/assets/images/projects/fittrack.webp",
    highlights: ["AI-generated workout plans", "Offline-first", "HealthKit / Google Fit sync"],
  },
  {
    id: 9,
    title: "PayFlow — Cross-Platform Mobile Wallet",
    category: ["mobile", "mern"],
    featured: false,
    description:
      "A React Native mobile wallet with P2P transfers, QR payments, transaction history, biometric auth, and push notifications.",
    techStack: ["React Native", "Expo", "Node.js", "MongoDB", "Stripe", "FCM", "BiometricAuth"],
    github: "https://github.com/yourusername/payflow",
    demo: "",
    image: "/assets/images/projects/payflow.webp",
    highlights: ["Face ID / fingerprint auth", "QR code payments", "Real-time balance sync"],
  },
  {
    id: 10,
    title: "DeployKit — GitHub Actions CI/CD Starter Kit",
    category: ["devops"],
    featured: false,
    description:
      "An open-source collection of battle-tested GitHub Actions workflows for Next.js, Node.js, Docker, and mobile app deployments.",
    techStack: ["GitHub Actions", "Docker", "Nginx", "Node.js", "Next.js", "Shell"],
    github: "https://github.com/yourusername/deploykit",
    demo: "https://deploykit.dev",
    image: "/assets/images/projects/deploykit.webp",
    highlights: ["15+ workflow templates", "100+ GitHub stars", "Zero-downtime deploy"],
  },
  {
    id: 11,
    title: "Infra-as-Code Boilerplate — AWS + Docker",
    category: ["devops"],
    featured: false,
    description:
      "Production-ready IaC setup: Dockerized MERN stack, Nginx reverse proxy, SSL via Certbot, GitHub Actions pipeline, and CloudWatch monitoring.",
    techStack: ["Docker", "Docker Compose", "AWS EC2", "Nginx", "Certbot", "GitHub Actions", "CloudWatch"],
    github: "https://github.com/yourusername/iac-boilerplate",
    demo: "",
    image: "/assets/images/projects/iac-boilerplate.webp",
    highlights: ["1-command production deploy", "Auto-SSL", "Health monitoring"],
  },
  {
    id: 12,
    title: "NexaSaaS — Multi-tenant SaaS Starter",
    category: ["frontend", "mern", "devops"],
    featured: true,
    description:
      "An open-source Next.js 14 SaaS boilerplate with multi-tenancy, Stripe billing, org management, email flows, and Docker-ready deployment.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Resend", "Docker", "GitHub Actions"],
    github: "https://github.com/yourusername/nexasaas",
    demo: "https://nexasaas.vercel.app",
    image: "/assets/images/projects/nexasaas.webp",
    highlights: ["Multi-tenant architecture", "Stripe subscription tiers", "Email via Resend", "300+ stars on GitHub"],
  },
];
