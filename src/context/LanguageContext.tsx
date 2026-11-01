'use client';

import React, { createContext, useContext, useSyncExternalStore, useCallback } from 'react';
import type { Language } from '@/types';

interface UIStrings {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    certifications: string;
    contact: string;
  };
  hero: {
    welcome: string;
    viewProjects: string;
    downloadCv: string;
    contactMe: string;
  };
  about: {
    title: string;
    subtitle: string;
    location: string;
    university: string;
    graduated: string;
    github: string;
    linkedin: string;
    viewProfile: string;
  };
  experience: {
    title: string;
    work: string;
    organization: string;
  };
  projects: {
    title: string;
    featuredTag: string;
    liveDemo: string;
    sourceCode: string;
    caseStudyBtn: string;
    keyFeatures: string;
  };
  caseStudyModal: {
    title: string;
    close: string;
    problemTitle: string;
    solutionTitle: string;
    architectureTitle: string;
    qaTitle: string;
    viewGithub: string;
  };
  skills: {
    title: string;
  };
  certifications: {
    title: string;
    verifyBadge: string;
    credentialIdLabel: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMessage: string;
    emailDirect: string;
    phoneDirect: string;
    githubDirect: string;
    linkedinDirect: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
    backToTop: string;
  };
}

const translations: Record<Language, UIStrings> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek',
      skills: 'Keahlian',
      certifications: 'Sertifikasi',
      contact: 'Kontak',
    },
    hero: {
      welcome: 'Selamat Datang',
      viewProjects: 'Lihat Proyek',
      downloadCv: 'Unduh CV',
      contactMe: 'Hubungi Saya',
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Profil & Latar Belakang Profesional',
      location: 'Lokasi',
      university: 'Pendidikan',
      graduated: 'Lulus',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      viewProfile: 'Kunjungi Profil',
    },
    experience: {
      title: 'Pengalaman',
      work: 'Kerja / Magang',
      organization: 'Organisasi',
    },
    projects: {
      title: 'Proyek Pilihan',
      featuredTag: 'Proyek Unggulan',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      caseStudyBtn: 'Studi Kasus & Arsitektur',
      keyFeatures: 'Fitur Utama & Implementasi',
    },
    caseStudyModal: {
      title: 'Studi Kasus Arsitektur & Implementasi Sistem',
      close: 'Tutup',
      problemTitle: '1. Masalah & Latar Belakang',
      solutionTitle: '2. Solusi Blockchain & AI OCR',
      architectureTitle: '3. Alur Kerja Arsitektur Sistem',
      qaTitle: '4. Pengujian Sistem & Validasi',
      viewGithub: 'Buka Repositori Proyek',
    },
    skills: {
      title: 'Keahlian Teknis',
    },
    certifications: {
      title: 'Sertifikasi Resmi',
      verifyBadge: 'Kredensial Terverifikasi',
      credentialIdLabel: 'Nomor Sertifikat / Reg:',
    },
    contact: {
      title: 'Kontak',
      subtitle: 'Tertarik untuk berkolaborasi atau mendiskusikan peluang karir? Jangan ragu untuk menghubungi saya.',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Masukkan nama Anda',
      emailLabel: 'Alamat Email',
      emailPlaceholder: 'email@contoh.com',
      messageLabel: 'Pesan',
      messagePlaceholder: 'Tuliskan pesan atau penawaran kerja sama di sini...',
      sendBtn: 'Kirim Pesan',
      sendingBtn: 'Mengirim...',
      successMessage: 'Terima kasih! Pesan Anda telah berhasil terkirim. 🎉',
      emailDirect: 'Email',
      phoneDirect: 'Telepon / WhatsApp',
      githubDirect: 'GitHub Profil',
      linkedinDirect: 'LinkedIn Profil',
    },
    footer: {
      copyright: 'Hak cipta dilindungi.',
      builtWith: 'Dibangun dengan Next.js 16, React 19 & Tailwind CSS v4',
      backToTop: 'Kembali ke atas',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Welcome to my portfolio',
      viewProjects: 'Explore Projects',
      downloadCv: 'Download CV',
      contactMe: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      subtitle: 'Professional Profile & Background',
      location: 'Location',
      university: 'Education',
      graduated: 'Graduated',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      viewProfile: 'View Profile',
    },
    experience: {
      title: 'Experience',
      work: 'Professional Experience',
      organization: 'Leadership & Activities',
    },
    projects: {
      title: 'Featured Projects',
      featuredTag: 'Featured Project',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      caseStudyBtn: 'Case Study & Architecture',
      keyFeatures: 'Key Features & Capabilities',
    },
    caseStudyModal: {
      title: 'System Architecture & Implementation Case Study',
      close: 'Close',
      problemTitle: '1. Problem Statement',
      solutionTitle: '2. Blockchain & AI OCR Solution',
      architectureTitle: '3. Technical Architecture Workflow',
      qaTitle: '4. System Testing & Validation Results',
      viewGithub: 'View Repository on GitHub',
    },
    skills: {
      title: 'Technical Skills',
    },
    certifications: {
      title: 'Certifications & Credentials',
      verifyBadge: 'Verified Credential',
      credentialIdLabel: 'Certificate / Reg No:',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Interested in working together or discussing engineering opportunities? Feel free to reach out.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@domain.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message or inquiry here...',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successMessage: 'Thank you! Your message has been sent successfully. 🎉',
      emailDirect: 'Email',
      phoneDirect: 'Phone / WhatsApp',
      githubDirect: 'GitHub Profile',
      linkedinDirect: 'LinkedIn Profile',
    },
    footer: {
      copyright: 'All rights reserved.',
      builtWith: 'Built with Next.js 16, React 19 & Tailwind CSS v4',
      backToTop: 'Back to top',
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: UIStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribeLang(callback: () => void) {
  window.addEventListener('portfolio_lang_change', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('portfolio_lang_change', callback);
    window.removeEventListener('storage', callback);
  };
}

function getLangSnapshot(): Language {
  const saved = localStorage.getItem('portfolio_lang') as Language;
  if (saved === 'id' || saved === 'en') return saved;
  return navigator.language.startsWith('id') ? 'id' : 'en';
}

function getServerLangSnapshot(): Language {
  return 'id';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getServerLangSnapshot);

  const setLang = useCallback((newLang: Language) => {
    localStorage.setItem('portfolio_lang', newLang);
    window.dispatchEvent(new Event('portfolio_lang_change'));
  }, []);

  const toggleLang = useCallback(() => {
    const current = getLangSnapshot();
    const next = current === 'id' ? 'en' : 'id';
    setLang(next);
  }, [setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
