import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "IjazahChain",
    subtitle: {
      id: "Sistem Verifikasi Dokumen Ijazah Digital Berbasis Blockchain Ethereum & AI OCR",
      en: "Decentralized Degree Verification Platform on Ethereum Smart Contract & AI OCR",
    },
    description: {
      id: "Sistem web berbasis Laravel dan Blockchain Ethereum untuk verifikasi keabsahan dokumen ijazah secara terdesentralisasi guna mencegah pemalsuan dokumen akademik. Memanfaatkan smart contract untuk pencatatan cryptographic hash anti-manipulasi, alur persetujuan multi-approver digital (EIP-712), dan ekstraksi data otomatis via Google Gemini AI OCR.",
      en: "A decentralized academic credential verification platform built with Laravel and Ethereum blockchain to eliminate digital document forgery. Uses smart contracts for immutable SHA-256 hash anchoring, multi-approver digital signature workflows (EIP-712), and automated metadata extraction via Google Gemini AI OCR.",
    },
    techStack: [
      "Solidity",
      "Laravel",
      "PHP",
      "Ethers.js",
      "MetaMask",
      "Google Gemini API",
      "MySQL",
    ],
    image: "/images/projects/ijazahchain.svg",
    github: "https://github.com/johanhalim7/ijazahchain",
    featured: true,
    features: {
      id: [
        "Smart contract Solidity (Ethereum) untuk penyimpanan & verifikasi hash dokumen anti-manipulasi",
        "Hashing SHA-256 & standar EIP-712 untuk penandatanganan digital multi-approver (Dekan, Rektor, BAAK)",
        "Ekstraksi data metadata dokumen otomatis berakurasi tinggi dengan Google Gemini AI Vision OCR",
        "Portal web berbasis Laravel untuk verifikasi keabsahan ijazah secara mandiri",
        "Pengujian keamanan aplikasi web menggunakan OWASP ZAP",
        "Pengujian performa dan waktu respon sistem menggunakan Apache JMeter",
      ],
      en: [
        "Ethereum Smart Contract (Solidity) for tamper-proof document hash storage and verification",
        "SHA-256 cryptographic hashing & EIP-712 structured data signing for multi-approver workflows",
        "Automated document metadata extraction utilizing Google Gemini Vision AI OCR",
        "Laravel-based web portal for direct credential verification",
        "Security vulnerability testing conducted using OWASP ZAP",
        "System performance and load response benchmarking with Apache JMeter",
      ],
    },
    caseStudy: {
      problem: {
        id: "Maraknya kasus pemalsuan ijazah dan proses verifikasi keabsahan dokumen akademik yang lambat karena masih bergantung pada konfirmasi manual dan legalisir berkas fisik.",
        en: "Growing occurrences of academic credential forgery and time-consuming manual verification processes dependent on paper records and physical stamps.",
      },
      solution: {
        id: "Membangun sistem web terintegrasi smart contract blockchain Ethereum. Dokumen ijazah di-hash secara deterministik (SHA-256) dan ditandatangani digital oleh pihak berwenang kampus (EIP-712), sehingga data hash tersimpan permanen dan dapat diverifikasi langsung tanpa perantara.",
        en: "Developing an integrated web system anchored on Ethereum smart contracts. Certificates are deterministically hashed (SHA-256) and cryptographically signed by authorized officials (EIP-712), enabling instant on-chain authenticity verification.",
      },
      architecture: {
        id: [
          "Langkah 1 (Upload & OCR): Berkas ijazah diunggah ke sistem Laravel -> Google Gemini AI mengekstrak data identitas dan nomor seri.",
          "Langkah 2 (Hash Dokumen): Sistem menghitung cryptographic digest SHA-256 dari file ijazah asli.",
          "Langkah 3 (Persetujuan Digital): Pejabat kampus (Dekan/Rektor) menandatangani data via MetaMask wallet menggunakan standar EIP-712.",
          "Langkah 4 (Penyimpanan Smart Contract): Hash dokumen dan data penandatangan dicatat permanen di smart contract Solidity.",
          "Langkah 5 (Verifikasi Publik): Pihak perekrut/instansi dapat mengunggah file untuk mencocokkan hash dengan data blockchain secara instan.",
        ],
        en: [
          "Step 1 (Upload & AI OCR): Certificate document uploaded to Laravel system -> Google Gemini AI extracts student data and serial number.",
          "Step 2 (Document Hashing): The system calculates a deterministic SHA-256 cryptographic hash of the original document.",
          "Step 3 (Digital Approval): Authorized signatories sign the typed hash via MetaMask using the EIP-712 standard.",
          "Step 4 (Smart Contract Storage): Document hash and signer public keys are stored permanently on the Solidity smart contract.",
          "Step 5 (Public Verification): Employers or institutions can upload documents to cross-check hashes against the blockchain immediately.",
        ],
      },
      qaMetrics: [
        {
          label: "Uji Beban (JMeter)",
          value: "< 185ms Latency",
          description: {
            id: "Rata-rata respon endpoint verifikasi stabil di bawah 200ms dengan 0% error rate.",
            en: "Average verification endpoint response time maintained under 200ms with 0% error rate.",
          },
        },
        {
          label: "Uji Keamanan (ZAP)",
          value: "0 High Vulnerability",
          description: {
            id: "Hasil pemindaian keamanan OWASP ZAP tidak menemukan kerentanan tingkat High atau Critical.",
            en: "OWASP ZAP security scan identified zero High or Critical vulnerabilities.",
          },
        },
        {
          label: "Ekstraksi OCR",
          value: "Akurasi Tinggi",
          description: {
            id: "Gemini Vision API berhasil mengekstrak entitas data ijazah ke format terstruktur dengan tepat.",
            en: "Gemini Vision API reliably extracted certificate data entities into structured JSON format.",
          },
        },
        {
          label: "Tanda Tangan Digital",
          value: "EIP-712 Standard",
          description: {
            id: "Mencegah manipulasi tanda tangan dan replay attack dengan standar typed structured data.",
            en: "Prevents signature tampering and replay attacks using Ethereum typed structured data.",
          },
        },
      ],
    },
  },
  {
    title: "Sistem Informasi Perjalanan Dinas (SIM-SPPD)",
    subtitle: {
      id: "Aplikasi Manajemen Surat Tugas & Anggaran SPPD DPRD Kota Cirebon",
      en: "Official Travel Order & Budget Management Information System for DPRD Cirebon",
    },
    description: {
      id: "Sistem informasi berbasis web yang dikembangkan selama Praktik Kerja Lapangan (PKL) di Sekretariat DPRD Kota Cirebon. Memfasilitasi digitalisasi pengajuan Surat Tugas, alur verifikasi disposisi pimpinan, perhitungan biaya riil perjalanan dinas, serta ekspor laporan rekapitulasi anggaran berkala.",
      en: "Web-based management platform developed during internship at the Secretariat of DPRD Kota Cirebon. Digitized official travel duty orders, hierarchical leadership approval dispositions, real-time allowance calculations, and automated quarterly fiscal budget reporting.",
    },
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "Blade", "Role-Based Access Control"],
    image: "/images/projects/perjalanan-dinas.svg",
    github: "https://github.com/johanhalim7/perjalanan-dinas-dprd",
    features: {
      id: [
        "Digitalisasi siklus penerbitan Surat Tugas (ST) & Surat Perintah Perjalanan Dinas (SPPD)",
        "Manajemen otorisasi multi-role (Pegawai, Pejabat Penandatangan, Bendahara Pengeluaran, Administrator)",
        "Perhitungan otomatis estimasi uang saku, biaya transportasi, dan akomodasi sesuai regulasi resmi",
        "Ekspor otomatis berkas cetak siap tanda tangan dan rekapitulasi laporan anggaran format PDF / Excel",
        "Penerapan validasi data dan pengujian fungsional untuk menjamin integritas data instansi",
      ],
      en: [
        "Full digitization of official Travel Orders and Authorization Workflow from drafting to completion",
        "Multi-tier Role-Based Access Control (Civil Servants, Signing Officers, Treasurer, and Administrators)",
        "Automated per-diem allowances, transportation, and accommodation calculation based on regional regulations",
        "Automated export of printable PDF document templates and comprehensive Excel audit reports",
        "Server-side validation and functional testing ensuring data integrity across records",
      ],
    },
  },
  {
    title: "Personal Portfolio Website",
    subtitle: {
      id: "Website Portofolio Responsif dengan Next.js & Tailwind CSS",
      en: "Responsive Portfolio Website with Next.js & Tailwind CSS",
    },
    description: {
      id: "Website portofolio rekayasa perangkat lunak modern yang responsif untuk menampilkan proyek, keahlian, dan riwayat profesional. Dilengkapi dukungan dwibahasa (ID/EN), peralihan Dark/Light mode instan, dan struktur schema SEO lengkap.",
      en: "A responsive modern software engineering portfolio to showcase projects, technical skills, and professional experience. Built with bilingual support (ID/EN), instant Dark/Light theme toggle, and rich SEO structure.",
    },
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/portfolio.svg",
    github: "https://github.com/johanhalim7/portfolio",
    features: {
      id: [
        "Antarmuka responsif dan modern dengan Next.js dan Tailwind CSS",
        "Dukungan dwibahasa instan (Bahasa Indonesia & English) tanpa memuat ulang halaman",
        "Peralihan Dark Mode & Light Mode halus tersinkronisasi dengan preferensi sistem & localStorage",
        "Struktur data modular berbasis TypeScript untuk kemudahan pemeliharaan konten",
        "Optimasi SEO lengkap dengan Open Graph social card dan semantic HTML",
      ],
      en: [
        "Responsive and modern user interface engineered with Next.js and Tailwind CSS",
        "Instant seamless bilingual toggle (English & Indonesian) without page reload",
        "Smooth Dark/Light theme toggle persistent with localStorage and system preferences",
        "Modular TypeScript architecture for maintainable and scalable content updates",
        "Comprehensive SEO optimization with Open Graph social preview and semantic HTML",
      ],
    },
  },
];
