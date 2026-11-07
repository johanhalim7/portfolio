import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: {
      id: "Software Developer Intern",
      en: "Software Developer Intern",
    },
    company: "Sekretariat DPRD Kota Cirebon",
    location: "Cirebon, Indonesia",
    period: "Okt 2025 - Des 2025",
    type: "kerja",
    descriptions: {
      id: [
        "Merancang dan mengembangkan Sistem Informasi Perjalanan Dinas (SIM-SPPD) berbasis PHP/Laravel dan basis data MySQL.",
        "Mendiskusikan dan menerjemahkan kebutuhan operasional birokrasi sekretariat menjadi spesifikasi teknis dan modul software yang aplikatif.",
        "Membangun modul autentikasi multi-peran (RBAC), siklus verifikasi disposisi surat tugas, dan kalkulasi otomatis anggaran biaya perjalanan.",
        "Mengimplementasikan validasi data komprehensif dan functional testing untuk menjamin keandalan data transaksi dinas.",
        "Menghasilkan dokumentasi teknis sistem dan memberikan panduan operasional kepada staf sekretariat DPRD.",
      ],
      en: [
        "Architected and developed the Official Travel Order Information System (SIM-SPPD) using PHP/Laravel and MySQL relational database.",
        "Conducted requirement analysis with administrative stakeholders to translate complex governmental procedures into scalable software specifications.",
        "Engineered multi-tier Role-Based Access Control (RBAC), multi-level approval workflows, and automated travel allowance calculations.",
        "Executed extensive server-side data validations and functional testing ensuring zero data inconsistency across records.",
        "Authored technical documentation and provided system handover training for legislative secretariat personnel.",
      ],
    },
  },
  {
    title: {
      id: "Kepala Divisi Mobile Legends (Esports)",
      en: "Head of Mobile Legends Division",
    },
    company: "Pengurus Cabang ESI Kota Cirebon",
    location: "Cirebon, Indonesia",
    period: "Mar 2025 - Jul 2025",
    type: "organisasi",
    descriptions: {
      id: [
        "Memimpin kepanitiaan turnamen MLBB resmi dalam rangka Hari Jadi Kota Cirebon ke-598 yang melibatkan puluhan tim kompetitif.",
        "Mengelola koordinasi lintas divisi mulai dari perencanaan operasional, regulasi teknis pertandingan, hingga mitigasi kendala teknis saat acara.",
        "Menyeleksi dan menyaring atlet esports potensial untuk mewakili Kota Cirebon dalam kejuaraan tingkat regional dan provinsi.",
      ],
      en: [
        "Chaired and organized the official MLBB Tournament celebrating the 598th Anniversary of Cirebon City, managing over 30+ competitive teams.",
        "Coordinated cross-functional committees across logistics, technical arbitration, streaming operations, and real-time event troubleshooting.",
        "Conducted competitive talent screening and player selection to represent Cirebon City in regional and provincial championships.",
      ],
    },
  },
];
