import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Johan Halim",
  title: {
    id: "Software Engineer | Full-Stack Developer | QA Engineer | AI Engineer",
    en: "Software Engineer | Full-Stack Developer | QA Engineer | AI Engineer",
  },
  location: "Kota Tangerang, Banten, Indonesia",
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
    id: `Lulusan S1 Teknik Informatika yang membangun aplikasi web secara menyeluruh, dari perancangan sampai pengujian, dengan Laravel/MySQL dan Next.js/TypeScript. Berpengalaman mengembangkan sistem informasi untuk instansi pemerintah daerah selama magang, membangun sistem verifikasi ijazah berbasis blockchain sebagai proyek skripsi, dan merilis aplikasi web yang sudah live dan digunakan publik. Memiliki motivasi tinggi untuk terus belajar dan mudah beradaptasi. Terbuka untuk peran Software Engineer, Full-Stack Developer, QA Engineer, dan AI Engineer.`,
    en: `Informatics Engineering graduate (B.S.) who builds web applications end to end, from design to testing, with Laravel/MySQL and Next.js/TypeScript. Experienced in developing information systems for a local government institution during an internship, building a blockchain-based diploma verification system as a thesis project, and releasing web applications that are live and used by the public. Highly motivated to keep learning and quick to adapt. Open to roles in Software Engineering, Full-Stack Development, QA Engineering, and AI Engineering.`,
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
