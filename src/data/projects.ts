import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "IjazahChain — Sistem Verifikasi Dokumen Ijazah Digital Berbasis Blockchain",
    description:
      "Sistem full-stack untuk verifikasi keaslian ijazah menggunakan teknologi blockchain. Sistem ini mencegah pemalsuan dokumen dengan menyimpan hash dokumen di smart contract Ethereum, dilengkapi dengan alur kerja multi-approver, OCR berbasis AI, dan integrasi wallet.",
    techStack: [
      "Solidity",
      "Laravel",
      "Next.js",
      "Ethers.js",
      "MetaMask",
      "Google Gemini API",
      "OWASP ZAP",
      "Apache JMeter"
    ],
    features: [
      "Smart contract Solidity (Ethereum) untuk penyimpanan dan verifikasi hash dokumen",
      "Hashing SHA-256 dan standar EIP-712 untuk penandatanganan digital",
      "Alur kerja multi-approver yang dapat dikonfigurasi",
      "Ekstraksi data dokumen otomatis menggunakan OCR (Google Gemini API)",
      "Pengujian keamanan menggunakan OWASP ZAP (tidak ditemukan kerentanan High-risk)",
      "Pengujian performa menggunakan Apache JMeter (0% error rate, response <200ms)",
      "Repository: github.com/johanhalim7/ijazahchain"
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Website portofolio pribadi yang responsif untuk menampilkan proyek, keahlian, dan pengalaman profesional.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    features: [
      "Antarmuka responsif dan modern dengan Tailwind CSS",
      "Routing dan rendering optimal menggunakan Next.js",
      "Live: johanhalim.vercel.app"
    ],
  },
  {
    title: "Sistem Informasi Perjalanan Dinas",
    description:
      "Sistem informasi berbasis web yang dikembangkan selama Praktik Kerja Lapangan (PKL) di DPRD Kota Cirebon. Sistem ini mengelola data perjalanan dinas pegawai, mencakup pencatatan, pelaporan, dan autentikasi pengguna.",
    techStack: ["Laravel", "MySQL", "Bootstrap"],
    features: [
      "CRUD lengkap untuk pengelolaan data perjalanan dinas",
      "Sistem autentikasi dan otorisasi pengguna",
      "Fitur pelaporan untuk rekapitulasi perjalanan dinas",
      "Repository: github.com/johanhalim7/perjalanan-dinas-dprd"
    ],
  },
];
