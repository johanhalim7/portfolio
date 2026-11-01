import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    category: {
      id: "Web & Mobile Development",
      en: "Web & Mobile Development",
    },
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "JavaScript / TypeScript" },
      { name: "Next.js" },
      { name: "Ionic Framework" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    category: {
      id: "Database & System Analysis",
      en: "Database & System Analysis",
    },
    items: [
      { name: "MySQL" },
      { name: "System Analysis" },
      { name: "ERD & Flowchart" },
      { name: "Data Modeling" },
      { name: "SDLC" },
    ],
  },
  {
    category: {
      id: "Blockchain & Web3",
      en: "Blockchain & Web3",
    },
    items: [
      { name: "Solidity" },
      { name: "Ethereum" },
      { name: "Ethers.js" },
      { name: "MetaMask" },
      { name: "Smart Contract" },
    ],
  },
  {
    category: {
      id: "Testing & QA",
      en: "Testing & QA",
    },
    items: [
      { name: "Software Testing" },
      { name: "Functional Testing" },
      { name: "Apache JMeter" },
      { name: "OWASP ZAP" },
    ],
  },
  {
    category: {
      id: "Alat Pengembangan",
      en: "Development Tools",
    },
    items: [
      { name: "Git & GitHub" },
      { name: "Google Gemini API" },
      { name: "AI Development Tools" },
      { name: "VS Code" },
      { name: "Vercel" },
    ],
  },
];
