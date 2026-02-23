export type SkillCategory = "mern" | "frontend" | "ai" | "mobile" | "devops";

export type SkillGroup = {
  id: SkillCategory;
  label: string;
  depth: number;
  skills: Array<{
    name: string;
    expert?: boolean;
  }>;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "mern",
    label: "MERN Stack",
    depth: 92,
    skills: [
      { name: "MongoDB", expert: true },
      { name: "Mongoose" },
      { name: "Express.js", expert: true },
      { name: "Node.js", expert: true },
      { name: "REST APIs", expert: true },
      { name: "GraphQL" },
      { name: "JWT Auth", expert: true },
      { name: "Socket.io", expert: true },
      { name: "Redis" },
      { name: "Nginx" },
      { name: "PM2" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Zod" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    depth: 95,
    skills: [
      { name: "React.js", expert: true },
      { name: "Next.js 14", expert: true },
      { name: "Vue.js" },
      { name: "Nuxt.js" },
      { name: "TypeScript", expert: true },
      { name: "Tailwind CSS", expert: true },
      { name: "Framer Motion", expert: true },
      { name: "Redux Toolkit" },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "Vite" },
      { name: "Webpack" },
      { name: "Three.js" },
      { name: "D3.js" },
      { name: "Storybook" },
    ],
  },
  {
    id: "ai",
    label: "Agentic AI",
    depth: 90,
    skills: [
      { name: "LangChain", expert: true },
      { name: "LangGraph", expert: true },
      { name: "CrewAI", expert: true },
      { name: "AutoGen" },
      { name: "OpenAI API", expert: true },
      { name: "Anthropic Claude API" },
      { name: "Hugging Face" },
      { name: "FAISS" },
      { name: "Pinecone" },
      { name: "Vector DBs" },
      { name: "RAG Pipelines", expert: true },
      { name: "Prompt Engineering", expert: true },
      { name: "Function Calling", expert: true },
      { name: "MCP" },
      { name: "Embeddings", expert: true },
      { name: "Fine-tuning (LoRA)" },
      { name: "LlamaIndex" },
      { name: "Ollama (local LLMs)" },
      { name: "FastAPI (AI backend)" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    depth: 86,
    skills: [
      { name: "React Native", expert: true },
      { name: "Expo", expert: true },
      { name: "Flutter" },
      { name: "Dart" },
      { name: "React Navigation" },
      { name: "AsyncStorage" },
      { name: "Expo Router" },
      { name: "Push Notifications (FCM)" },
      { name: "App Store deployment" },
      { name: "Play Store deployment" },
      { name: "EAS Build" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    depth: 84,
    skills: [
      { name: "Docker", expert: true },
      { name: "Docker Compose", expert: true },
      { name: "GitHub Actions", expert: true },
      { name: "CI/CD Pipelines", expert: true },
      { name: "Vercel" },
      { name: "Railway" },
      { name: "AWS (EC2, S3, Amplify, Lambda)" },
      { name: "Cloudflare" },
      { name: "Nginx" },
      { name: "Linux server admin" },
      { name: "Environment management" },
      { name: "Secrets management" },
    ],
  },
];
