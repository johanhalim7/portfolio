import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Sistem Verifikasi Dokumen Ijazah Digital Berbasis Blockchain",
    description:
      "Proyek skripsi yang membangun sistem full-stack untuk verifikasi keaslian ijazah menggunakan teknologi blockchain. Sistem ini mencegah pemalsuan dokumen dengan menyimpan hash dokumen di smart contract Ethereum, dilengkapi dengan alur kerja multi-approver dan integrasi OCR berbasis AI.",
    techStack: [
      "Solidity",
      "Laravel",
      "Ethers.js",
      "MetaMask",
      "SHA-256",
      "EIP-712",
      "Google Gemini API",
    ],
    features: [
      "Smart contract Solidity untuk penyimpanan dan verifikasi hash dokumen",
      "Backend Laravel untuk pengelolaan data dan alur kerja",
      "Integrasi MetaMask dan Ethers.js untuk interaksi dengan blockchain",
      "Hashing SHA-256 untuk menghasilkan sidik jari digital dokumen",
      "Standar EIP-712 untuk penandatanganan data terstruktur",
      "Alur kerja multi-approver untuk proses persetujuan bertingkat",
      "OCR berbasis AI menggunakan Google Gemini API untuk ekstraksi data dokumen",
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
      "Antarmuka responsif menggunakan Bootstrap",
      "Validasi data untuk memastikan integritas informasi",
    ],
  },
];
