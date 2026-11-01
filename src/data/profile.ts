import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Johan Halim",
  title: {
    id: "Web & Software Developer | S1 Teknik Informatika",
    en: "Web & Software Developer | B.S. in Informatics Engineering",
  },
  location: "Cirebon, Indonesia",
  email: "johanhalim.ai@gmail.com",
  phone: "(+62) 821-1788-6391",
  linkedin: "linkedin.com/in/johanhlm",
  github: "github.com/johanhalim7",
  highlights: {
    id: [
      { label: "S1 Teknik Informatika", sublabel: "Univ. Muhammadiyah Cirebon" },
      { label: "Web Development", sublabel: "PHP/Laravel, Next.js" },
      { label: "Blockchain & Web3", sublabel: "Solidity & Smart Contract" },
      { label: "Sertifikasi BNSP", sublabel: "Junior Web Programmer" },
    ],
    en: [
      { label: "B.S. Informatics Engineering", sublabel: "Muhammadiyah Univ. of Cirebon" },
      { label: "Web Development", sublabel: "PHP/Laravel, Next.js" },
      { label: "Blockchain & Web3", sublabel: "Solidity & Smart Contracts" },
      { label: "BNSP Certified", sublabel: "Junior Web Programmer" },
    ],
  },
  summary: {
    id: `Lulusan Teknik Informatika (S1) dari Universitas Muhammadiyah Cirebon dengan pengalaman dalam seluruh siklus pengembangan perangkat lunak (SDLC) — mulai dari analisis kebutuhan, perancangan arsitektur sistem, implementasi, hingga pengujian perangkat lunak.

Familiar dengan ekosistem web modern (PHP/Laravel, Next.js), pengembangan mobile hybrid (Ionic), serta eksplorasi smart contract blockchain (Solidity, Ethereum). Terbiasa menerapkan praktik clean code, pemanfaatan alat bantu AI untuk efisiensi pengembangan, dan pengujian sistem yang terstruktur.

Terbuka untuk peluang karir di bidang Web & Software Development, Frontend/Backend Engineer, maupun Analisis Sistem.`,
    en: `Informatics Engineering graduate (B.S.) from Universitas Muhammadiyah Cirebon with solid experience across the entire Software Development Life Cycle (SDLC) — from requirement analysis and system architecture design to clean code implementation and testing.

Proficient in the modern web ecosystem (PHP/Laravel, Next.js), hybrid mobile development (Ionic), and blockchain smart contracts (Solidity, Ethereum). Accustomed to applying best coding practices, leveraging AI tools for development productivity, and structured software testing.

Actively seeking opportunities as a Web & Software Developer, Frontend/Backend Engineer, or Systems Analyst.`,
  },
  education: {
    university: "Universitas Muhammadiyah Cirebon",
    degree: {
      id: "S1 Teknik Informatika",
      en: "B.S. in Informatics Engineering",
    },
    year: "2022-2026",
    thesis: {
      id: "Perancangan Sistem Verifikasi Dokumen Digital Menggunakan Teknologi Blockchain untuk Mencegah Pemalsuan Data (Studi Kasus: Ijazah UMC)",
      en: "Design of a Digital Document Verification System Utilizing Blockchain Technology to Prevent Data Forgery (Case Study: UMC Degree Certificate)",
    },
  },
};
