export type Owner = {
  name: string;
  initials: string;
  tagline: string;
  email: string;
  location: string;
  timezone: string;
  availableForWork: boolean;
  bio: {
    p1: string;
    p2: string;
    p3: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  resumeUrl: string;
  stats: {
    yearsExperience: string;
    projectsShipped: string;
    happyClients: string;
    githubStars: string;
  };
};

export const owner: Owner = {
  name: "Your Full Name", // TODO: Replace
  initials: "YN", // TODO: Replace (for logo)
  tagline: "Full-Stack & AI Developer", // TODO: Customize if needed
  email: "TODO: Replace with your email", // TODO: Replace
  location: "TODO: Replace with your city, country", // TODO: Replace
  timezone: "TODO: Replace with your timezone", // TODO: Replace
  availableForWork: true, // TODO: Set false when booked
  bio: {
    p1: "I'm a passionate full-stack engineer who loves turning ambitious ideas into reliable products.", // TODO: Write your story
    p2: "Currently focused on Agentic AI systems, MERN architecture, and high-quality mobile app delivery.", // TODO: Customize
    p3: "When I'm not coding, I contribute to open source, mentor developers, and study product design systems.", // TODO: Customize
  },
  socials: {
    github: "TODO: Replace with your GitHub URL", // TODO: Replace
    linkedin: "TODO: Replace with your LinkedIn URL", // TODO: Replace
    twitter: "TODO: Replace with your Twitter URL", // TODO: Replace (or remove)
  },
  resumeUrl: "/assets/resume.pdf", // TODO: Ensure file exists
  stats: {
    yearsExperience: "3+", // TODO: Replace
    projectsShipped: "20+", // TODO: Replace
    happyClients: "15+", // TODO: Replace
    githubStars: "200+", // TODO: Replace
  },
};
