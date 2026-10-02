import type { Skill } from "@/types";

export const skills: Skill[] = [
  {
    category: "Web & Mobile Development",
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Ionic Framework" },
      { name: "HTML/CSS" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    category: "Database & System Analysis",
    items: [
      { name: "MySQL" },
      { name: "System Analysis" },
      { name: "ERD & Flowchart" }
    ],
  },
  {
    category: "Testing & QA",
    items: [
      { name: "Software Testing" },
      { name: "OWASP ZAP" },
      { name: "Apache JMeter" },
      { name: "Functional Testing" }
    ],
  },
  {
    category: "Blockchain",
    items: [
      { name: "Solidity" },
      { name: "Ethers.js" },
      { name: "MetaMask" },
      { name: "Smart Contract" },
    ],
  },
  {
    category: "Alat Pengembangan",
    items: [{ name: "Git" }, { name: "AI Development Tools" }, { name: "Google Gemini API" }],
  },
];
