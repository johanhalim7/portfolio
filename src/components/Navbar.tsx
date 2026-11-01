'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/profile';

function subscribeTheme(callback: () => void) {
  window.addEventListener('theme_change', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('theme_change', callback);
    window.removeEventListener('storage', callback);
  };
}

function getThemeSnapshot(): boolean {
  const stored = localStorage.getItem('theme');
  return stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

function getServerThemeSnapshot(): boolean {
  return false;
}

// Clean SVG for GitHub icon
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  const navItems = [
    { label: t.nav.home, href: '#beranda' },
    { label: t.nav.about, href: '#tentang' },
    { label: t.nav.experience, href: '#pengalaman' },
    { label: t.nav.projects, href: '#proyek' },
    { label: t.nav.skills, href: '#keahlian' },
    { label: t.nav.certifications, href: '#sertifikasi' },
    { label: t.nav.contact, href: '#kontak' },
  ];

  useEffect(() => {
    const isDark = getThemeSnapshot();
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !getThemeSnapshot();
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    window.dispatchEvent(new Event('theme_change'));
  };

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Personal Brand */}
          <a
            href="#beranda"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              JH
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight hidden sm:inline">
              Johan Halim
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1.5" />

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
              title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            >
              <Globe size={14} className="text-blue-500" />
              <span className="uppercase">{lang}</span>
            </button>

            {/* GitHub Profile Icon */}
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle tema"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={dark ? 'Tema Terang' : 'Tema Gelap'}
            >
              {dark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              <Globe size={13} className="text-blue-500" />
              <span className="uppercase">{lang}</span>
            </button>

            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300"
            >
              <GithubIcon size={18} />
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle tema"
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300"
            >
              {dark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
