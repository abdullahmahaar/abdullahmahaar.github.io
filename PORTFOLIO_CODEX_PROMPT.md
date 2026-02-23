# 🚀 PORTFOLIO BUILD DIRECTIVE — CODEX IMPLEMENTATION SPEC
> Read this entire document before writing a single line of code. Follow every instruction exactly. Make no assumptions that contradict this spec; for anything not specified, pick the boldest, most professional option.

---

## 0. IDENTITY

**Developer Name:** [OWNER — replace with your real name in `/src/data/owner.ts`]  
**Tagline:** Full-Stack Architect · Agentic AI Engineer · Mobile & Cross-Platform Developer  
**Niches (5 total):**
1. MERN Stack Development (MongoDB · Express · React · Node.js)
2. Frontend Engineering (Next.js · React.js · Vue.js)
3. Agentic AI & LLM Systems (LangChain · LangGraph · CrewAI · OpenAI · Anthropic)
4. Mobile App Development (React Native · Expo · Flutter)
5. **DevOps & Cloud Infrastructure** *(chosen 6th niche)* (Docker · CI/CD · Vercel · Railway · AWS Amplify)

---

## 1. TECH STACK FOR THE PORTFOLIO ITSELF

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | SSG export for GitHub Pages, SEO, image optimization |
| Language | **TypeScript** | Type-safe data layer for projects/skills |
| Styling | **Tailwind CSS v3 + CSS custom properties** | Utility-first, dark mode, custom design tokens |
| Animations | **Framer Motion** | Page transitions, scroll reveals, stagger effects |
| 3D / Canvas | **Three.js via @react-three/fiber** | Hero background particle mesh |
| Icons | **Lucide React + react-icons** | Consistent icon system |
| Email | **EmailJS** | Contact form — zero backend needed |
| Analytics | **Vercel Analytics** (optional) | Page view tracking |
| Deployment | **GitHub Pages via `gh-pages` branch** | Static export (`output: 'export'`) |
| Font | **"Instrument Serif"** (display) + **"JetBrains Mono"** (code) + **"Geist Sans"** (body) via next/font |

---

## 2. AESTHETIC DIRECTION

**Theme:** Dark-mode first · "Terminal Noir meets Editorial Tech"  
**Palette (CSS variables in `globals.css`):**
```css
:root {
  --bg-primary:    #080C10;   /* near-black with blue tint */
  --bg-secondary:  #0D1117;   /* GitHub-dark inspired */
  --bg-card:       #161B22;
  --accent-cyan:   #00F5D4;   /* neon mint — primary CTA color */
  --accent-amber:  #F6AE2D;   /* warm amber — secondary highlights */
  --accent-violet: #9D4EDD;   /* violet — AI/agentic sections */
  --text-primary:  #E6EDF3;
  --text-muted:    #7D8590;
  --border:        rgba(255,255,255,0.08);
  --glow-cyan:     0 0 40px rgba(0,245,212,0.15);
}
```
**Typography scale:**
- Display headings: `Instrument Serif`, italic weight, large tracking
- Code/terminal snippets: `JetBrains Mono`
- Body + UI: `Geist Sans`

**Signature visual motifs:**
- Animated CSS grid lines fading into the background (hero section)
- Glowing card borders on hover (`box-shadow: var(--glow-cyan)`)
- Terminal-style typing animation for the hero tagline
- Noise texture overlay (`0.03` opacity) on `--bg-primary`
- Section dividers: thin `1px` horizontal lines with a centered diamond `◆`

---

## 3. SITE ARCHITECTURE & FILE STRUCTURE

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.png          # 1200×630 Open Graph image
│   └── assets/
│       ├── resume.pdf
│       └── images/
│           └── projects/     # project screenshots (WebP, 1200×675)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # root layout: fonts, metadata, providers
│   │   ├── page.tsx          # home — all sections assembled here
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── ProjectCard.tsx
│   │       ├── SkillPill.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── GlowButton.tsx
│   │       ├── TerminalTyping.tsx
│   │       ├── ParticleCanvas.tsx   # Three.js hero bg
│   │       └── ScrollReveal.tsx     # Framer Motion wrapper
│   ├── data/
│   │   ├── owner.ts          # name, bio, socials — EDIT THIS
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── services.ts
│   ├── hooks/
│   │   ├── useScrollSpy.ts
│   │   └── useTypewriter.ts
│   └── lib/
│       └── utils.ts
├── next.config.js            # output: 'export', basePath: '/repo-name'
├── tailwind.config.ts
└── package.json
```

---

## 4. PAGE SECTIONS (ALL ON ONE SCROLLABLE PAGE — SPA)

### 4.1 NAVBAR
- Fixed top, `backdrop-blur-md`, transparent until scrolled 80px then `bg-bg-secondary/90`
- Logo: initials in a `2px` cyan bordered square (e.g., `AK`)
- Links: `Home` · `About` · `Skills` · `Projects` · `Experience` · `Contact`
- Active link tracked by `useScrollSpy` hook — underline slides with CSS transition
- Mobile: hamburger → full-screen overlay nav with stagger animation
- CTA button top-right: "Download CV" → `/public/assets/resume.pdf`

---

### 4.2 HERO SECTION

**Layout:** Full viewport height. Left 55% = text content. Right 45% = Three.js particle globe (interactive, reacts to mouse).

**Left column (top to bottom):**
1. Small badge: `⚡ Available for Freelance & Full-time Roles` (pulsing green dot)
2. **Main heading** (Instrument Serif, ~72px):  
   ```
   Building Digital
   Experiences That
   Matter.
   ```
   Each line reveals with a bottom-up wipe animation (staggered 150ms).
3. **Typewriter line** (JetBrains Mono, cyan):  
   Cycles through: `MERN Stack Engineer` → `Next.js Developer` → `Agentic AI Builder` → `Mobile App Developer` → `DevOps Engineer`
4. **Sub-copy** (body, muted, max 2 lines):  
   "I architect full-stack systems, train LLM-powered agents, and ship pixel-perfect interfaces — from MVP to production."
5. **CTA buttons** (row):  
   - Primary: `View My Work ↓` (solid cyan, hover: glow pulse)  
   - Secondary: `Let's Talk` (ghost border, hover: fill)
6. **Social row:** GitHub · LinkedIn · Twitter · Email — icon-only, 32px, hover lift

**Right column:** Three.js mesh of ~800 particles forming a rotating torus/sphere. Color: cyan `#00F5D4` points, with mouse parallax effect (particles shift 20px in cursor direction). Fade in after 500ms.

---

### 4.3 ABOUT SECTION

**Layout:** Two columns. Left: photo placeholder (avatar card with glassmorphism border). Right: bio text + quick stats.

**Content:**
- 3-paragraph bio (fill from `owner.ts` → `bio` field). Template:
  > Paragraph 1: Origin + passion for building things.  
  > Paragraph 2: Current focus areas (Agentic AI, MERN, mobile).  
  > Paragraph 3: Outside of work (open source, mentoring, etc.)

- **Quick Stats row** (4 cards with animated count-up on scroll):
  | Stat | Value |
  |---|---|
  | Years Experience | 3+ |
  | Projects Shipped | 20+ |
  | Happy Clients | 15+ |
  | GitHub Stars | 200+ |

- **"What I bring" list** (4 items, each with a colored icon):
  - ⚡ End-to-end product thinking
  - 🤖 AI-first engineering mindset  
  - 📱 Cross-platform delivery
  - 🔒 Security & performance by default

---

### 4.4 SKILLS SECTION

**Layout:** Tabbed interface. 5 tabs (one per niche). Each tab = a grid of `SkillPill` components.

**Tab 1 — MERN Stack**
```
MongoDB · Mongoose · Express.js · Node.js · REST APIs · GraphQL · JWT Auth
Socket.io · Redis · Nginx · PM2 · Prisma · PostgreSQL · Zod
```
**Tab 2 — Frontend**
```
React.js · Next.js 14 · Vue.js · Nuxt.js · TypeScript · Tailwind CSS
Framer Motion · Redux Toolkit · Zustand · React Query · Vite · Webpack
Three.js · D3.js · Storybook
```
**Tab 3 — Agentic AI**
```
LangChain · LangGraph · CrewAI · AutoGen · OpenAI API · Anthropic Claude API
Hugging Face · FAISS · Pinecone · Vector DBs · RAG Pipelines
Prompt Engineering · Function Calling · MCP · Embeddings · Fine-tuning (LoRA)
LlamaIndex · Ollama (local LLMs) · FastAPI (AI backend)
```
**Tab 4 — Mobile**
```
React Native · Expo · Flutter · Dart · React Navigation
AsyncStorage · Expo Router · Push Notifications (FCM)
App Store deployment · Play Store deployment · EAS Build
```
**Tab 5 — DevOps & Cloud**
```
Docker · Docker Compose · GitHub Actions · CI/CD Pipelines
Vercel · Railway · AWS (EC2, S3, Amplify, Lambda) · Cloudflare
Nginx · Linux server admin · Environment management · Secrets management
```

**SkillPill design:** Rounded pill, 1px border `--border`, icon + label. On hover: border turns cyan, slight glow. Active pills glow permanently (for "expert" skills marked in data).

**Proficiency bar:** Below each tab grid, a horizontal bar chart shows relative skill depth across the 5 categories.

---

### 4.5 PROJECTS SECTION

**Layout:** Filter bar (All · MERN · Frontend · AI · Mobile · DevOps) → Masonry-ish grid of `ProjectCard` components.

**ProjectCard design:**
- Dark card `--bg-card`, subtle border
- Top: project screenshot (WebP, with skeleton loader)
- Overlay on hover: slides up from bottom with description + links
- Tech pills row (max 5 shown, `+N more` badge)
- Bottom row: `[GitHub]` `[Live Demo]` links with icons
- Featured badge: top-left amber ribbon on featured projects

---

#### PROJECTS DATA (`src/data/projects.ts`) — 12 PROJECTS

```typescript
export const projects = [
  // ── MERN ─────────────────────────────────────────────
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

  // ── FRONTEND ─────────────────────────────────────────
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

  // ── AGENTIC AI ───────────────────────────────────────
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

  // ── MOBILE ───────────────────────────────────────────
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

  // ── DEVOPS & CLOUD ────────────────────────────────────
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
```

---

### 4.6 EXPERIENCE SECTION

**Layout:** Vertical timeline. Alternating left/right cards on desktop, single column on mobile. Each entry has: company logo placeholder, role title, company name, date range, bullet points, tech tags.

**Data (`src/data/experience.ts`):**
```typescript
export const experience = [
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
```

---

### 4.7 SERVICES SECTION

**Layout:** 3-column card grid. Each card: icon (large, colored), service name, 3-line description, "key deliverables" list, starting-from price (optional), CTA "Let's discuss →".

**Data (`src/data/services.ts`):**
```typescript
export const services = [
  {
    icon: "⚡",
    color: "cyan",
    title: "Full-Stack Web Development",
    description: "End-to-end MERN/Next.js applications — from database design to pixel-perfect UI. Scalable, secure, production-deployed.",
    deliverables: ["REST/GraphQL API", "Admin dashboard", "Auth system", "CI/CD pipeline"],
  },
  {
    icon: "🤖",
    color: "violet",
    title: "Agentic AI Systems",
    description: "Custom LLM-powered workflows, RAG pipelines, and multi-agent automation using LangChain, LangGraph, and CrewAI.",
    deliverables: ["RAG chatbot", "Multi-agent pipeline", "LLM API integration", "Streaming UI"],
  },
  {
    icon: "📱",
    color: "amber",
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps with React Native and Expo. Store submission, OTA updates, and ongoing maintenance.",
    deliverables: ["iOS + Android builds", "Expo EAS CI", "App Store submission", "Push notifications"],
  },
  {
    icon: "🎨",
    color: "cyan",
    title: "Frontend Engineering",
    description: "High-performance, accessible, animated UIs with Next.js, Vue, and Tailwind. Design systems, dashboards, landing pages.",
    deliverables: ["Next.js SPA/SSG", "Design system", "Performance audit", "Framer animations"],
  },
  {
    icon: "🔧",
    color: "amber",
    title: "DevOps & Cloud Setup",
    description: "Docker containerization, GitHub Actions CI/CD, Nginx, SSL, AWS/Railway deployment. Ship faster, break less.",
    deliverables: ["Docker Compose setup", "GitHub Actions pipeline", "SSL + domain config", "Monitoring alerts"],
  },
  {
    icon: "🧠",
    color: "violet",
    title: "Technical Consulting",
    description: "Architecture reviews, AI strategy roadmaps, code audits, and performance optimization for existing products.",
    deliverables: ["Tech stack audit", "Architecture diagram", "Performance report", "Roadmap deck"],
  },
];
```

---

### 4.8 CONTACT SECTION

**Layout:** Split. Left: contact info + socials. Right: EmailJS-powered contact form.

**Left side:**
- "Let's Build Something." heading
- Sub-copy: "Available for freelance projects, full-time roles, and technical consulting. Usually respond within 24 hours."
- Info rows: 📧 email · 🌍 timezone · 💼 LinkedIn · 🐙 GitHub
- Status badge: "🟢 Open to work" or "🔴 Fully booked" (controlled from `owner.ts`)

**Right side — Form fields:**
1. Name (text)
2. Email (email)
3. Subject (select: New Project · Consulting · Full-time Role · Other)
4. Budget range (select: < $1k · $1k–$5k · $5k–$15k · $15k+ · Not sure)
5. Message (textarea, 6 rows)
6. Submit button: "Send Message →" — shows loading spinner, then success/error toast

**EmailJS setup:** Pull `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` from `.env.local`.

---

### 4.9 FOOTER

- Left: Logo + tagline
- Center: Quick nav links
- Right: Social icons
- Bottom bar: "© 2025 [Name] · Built with Next.js · Deployed on GitHub Pages"
- Easter egg: small `</>` icon that, on click, opens a mini terminal modal showing a fake `neofetch`-style info card

---

## 5. COMPONENT SPECIFICATIONS

### `TerminalTyping.tsx`
```tsx
// Cycles through an array of strings with typewriter effect
// Props: strings: string[], speed?: number, deleteSpeed?: number, pause?: number
// Uses useTypewriter hook internally
// Renders with a blinking cursor span
```

### `ParticleCanvas.tsx`
```tsx
// Three.js canvas, fills parent container
// 800 particles arranged in sphere formation
// Gentle auto-rotation + mouse parallax (useRef for mouse position)
// Color: #00F5D4 with varying opacity 0.3–1.0
// Performance: use instancedMesh for efficiency
```

### `ScrollReveal.tsx`
```tsx
// Framer Motion wrapper component
// Props: children, delay?: number, direction?: 'up' | 'left' | 'right' | 'fade'
// Default: slides up 30px, fades in, once: true
// Threshold: 0.15 (triggers when 15% visible)
```

### `ProjectCard.tsx`
```tsx
// Props: project (Project type)
// Image with next/image, skeleton loading state
// Hover: overlay slides up (framer motion), shows description + links
// Category badge top-right
// Featured: amber corner ribbon
```

### `GlowButton.tsx`
```tsx
// Props: variant: 'primary' | 'ghost', children, href?, onClick?
// Primary: bg-accent-cyan text-bg-primary, hover: glow pulse animation
// Ghost: border border-accent-cyan text-accent-cyan, hover: bg-accent-cyan/10
// Renders as <a> if href provided, else <button>
```

### `SectionHeading.tsx`
```tsx
// Props: eyebrow: string, title: string, subtitle?: string
// Eyebrow: small caps, cyan, monospace, with << >> brackets
// Title: Instrument Serif, large
// Subtitle: muted body text
// Centered on desktop, left-aligned on mobile sections
```

---

## 6. ROUTING & SEO

- **Single page app** — all sections in `app/page.tsx`, anchored with `id` attributes
- **Smooth scroll:** `scroll-behavior: smooth` in `globals.css` + `useScrollSpy` hook highlights active nav
- **Metadata (`layout.tsx`):**
```typescript
export const metadata: Metadata = {
  title: "[Name] — Full-Stack & AI Developer",
  description: "MERN Stack Engineer, Next.js Frontend Developer, Agentic AI Builder, and Mobile App Developer. Available for freelance and full-time roles.",
  keywords: ["full-stack developer", "MERN developer", "Next.js", "React Native", "LangChain", "AI engineer"],
  openGraph: {
    title: "[Name] — Full-Stack & AI Developer",
    description: "...",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};
```

---

## 7. `next.config.js` FOR GITHUB PAGES

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

**Set in `.env.production`:**
```
NEXT_PUBLIC_BASE_PATH=/your-repo-name
```

---

## 8. GITHUB ACTIONS DEPLOY WORKFLOW

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
          NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
          NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
          NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
          clean: true
```

---

## 9. `package.json` SCRIPTS & DEPENDENCIES

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "@react-three/fiber": "^8.16.0",
    "@react-three/drei": "^9.105.0",
    "three": "^0.163.0",
    "lucide-react": "^0.378.0",
    "react-icons": "^5.1.0",
    "@emailjs/browser": "^4.3.3",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/three": "^0.163.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

## 10. OWNER DATA FILE (EDIT BEFORE FIRST DEPLOY)

`src/data/owner.ts` — **Codex: create this file with placeholder values, add a TODO comment on each field:**

```typescript
export const owner = {
  name: "Your Full Name",              // TODO: Replace
  initials: "YN",                      // TODO: Replace (for logo)
  tagline: "Full-Stack & AI Developer",
  email: "hello@yourdomain.com",       // TODO: Replace
  location: "Your City, Country",      // TODO: Replace
  timezone: "UTC+X",                   // TODO: Replace
  availableForWork: true,              // TODO: Set false when booked
  bio: {
    p1: "I'm a passionate full-stack engineer...",   // TODO: Write your story
    p2: "Currently focused on Agentic AI systems...", // TODO: Customize
    p3: "When I'm not coding, I contribute to open source...", // TODO: Customize
  },
  socials: {
    github: "https://github.com/yourusername",   // TODO: Replace
    linkedin: "https://linkedin.com/in/yourprofile", // TODO: Replace
    twitter: "https://twitter.com/yourhandle",   // TODO: Replace (or remove)
  },
  resumeUrl: "/assets/resume.pdf",
  stats: {
    yearsExperience: "3+",
    projectsShipped: "20+",
    happyClients: "15+",
    githubStars: "200+",
  },
};
```

---

## 11. PERFORMANCE & QUALITY CHECKLIST

Codex must ensure the following before considering any section complete:

- [ ] All images use `next/image` with `alt` text and `priority` on hero images
- [ ] All interactive elements are keyboard-navigable (tab, enter, space)
- [ ] Color contrast meets WCAG AA (text on backgrounds)
- [ ] `ScrollReveal` is wrapped in `useEffect` check to avoid SSR mismatch
- [ ] Three.js canvas has `aria-hidden="true"` (decorative)
- [ ] Mobile nav closes on route change / link click
- [ ] Contact form validates all fields client-side before submit
- [ ] `404.tsx` renders for GitHub Pages compatibility (copy of `index.html` + script redirect trick)
- [ ] Loading skeleton states on `ProjectCard` images
- [ ] No `console.error` or `console.warn` in production build

---

## 12. MOBILE RESPONSIVENESS BREAKPOINTS

Use Tailwind's standard breakpoints:
- `sm`: 640px — stack hero columns, hide particle canvas (show gradient bg instead)
- `md`: 768px — timeline becomes single column
- `lg`: 1024px — full desktop layout
- `xl`: 1280px — max content width `1280px`, centered

Hero on mobile: Full width, particle canvas hidden, replace with CSS animated gradient mesh background.

---

## 13. IMPLEMENTATION ORDER (Codex: follow this sequence)

1. **Bootstrap:** `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias '@/*'`
2. **Install all dependencies** from Section 9
3. **Configure** `next.config.js`, `tailwind.config.ts` (extend theme with design tokens), `globals.css` (CSS variables, base styles, custom scrollbar)
4. **Create all data files** (`owner.ts`, `projects.ts`, `skills.ts`, `experience.ts`, `services.ts`)
5. **Build UI primitives** (`GlowButton`, `SectionHeading`, `SkillPill`, `ScrollReveal`, `TerminalTyping`, `ParticleCanvas`, `ProjectCard`)
6. **Build Navbar** (with scroll detection + mobile menu)
7. **Build Hero section** (layout, typing animation, Three.js canvas)
8. **Build remaining sections** in order: About → Skills → Projects → Experience → Services → Contact
9. **Build Footer** (with easter egg terminal modal)
10. **Wire up EmailJS** in Contact form
11. **SEO & metadata** in `layout.tsx`
12. **GitHub Actions workflow** file
13. **`404.tsx` + `.nojekyll`** file in `public/` for GitHub Pages
14. **Final lint + type-check pass**

---

## 14. GITHUB PAGES SPECIAL REQUIREMENTS

Add `public/.nojekyll` (empty file — tells GitHub Pages to serve files starting with `_`).

For SPA routing on GitHub Pages (direct URL access), add this to `public/404.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <script>
    var l = window.location;
    l.replace(l.protocol + '//' + l.host + l.pathname.split('/').slice(0,2).join('/') + '/?p=/' + l.pathname.slice(1).replace(/&/g, '~and~') + (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') + l.hash);
  </script>
</head>
</html>
```
And in `app/page.tsx`, add a `useEffect` to handle the redirect on load.

---

## 15. FINAL NOTES FOR CODEX

- **Do not use placeholder lorem ipsum text** — use the actual copy written in this spec or sensible professional copy derived from it.
- **Do not skip the Three.js hero** — it is the #1 visual differentiator.
- **All 12 projects must be in the data file** — even if screenshots are placeholders.
- **Type everything** — no `any` types unless absolutely unavoidable.
- **Commit granularly** — one commit per major section.
- **The `owner.ts` file is the single source of truth** — no hardcoded personal info anywhere else.
- When in doubt about a design decision, refer to Section 2 (Aesthetic Direction) and pick the option that is MORE bold, not less.
- Replace all placeholder `yourusername` / `yourdomain.com` values in `owner.ts` with `TODO` comments — the human will fill these in.

---

*End of spec. Codex: begin implementation now, starting with Step 1 of Section 13.*
