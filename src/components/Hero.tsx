'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Award, Layers, Terminal, Blocks } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/profile';

function GithubIcon({ size = 16 }: { size?: number }) {
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

const highlightIcons = [
  <Terminal key="terminal" size={22} className="text-blue-500" />,
  <Layers key="layers" size={22} className="text-indigo-500" />,
  <Blocks key="blocks" size={22} className="text-purple-500" />,
  <Award key="award" size={22} className="text-amber-500" />,
];

export default function Hero() {
  const { lang, t } = useLanguage();

  const highlights = profile.highlights[lang];

  return (
    <section
      id="beranda"
      className="pt-28 pb-14 md:pt-32 md:pb-20 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Subtle Background Mesh / Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] opacity-35 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-indigo-100 to-transparent dark:from-blue-900/40 dark:via-indigo-900/20 dark:to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Welcome Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-3"
        >
          <span className="px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/40 border border-blue-200/60 dark:border-blue-800/60 rounded-full shadow-xs">
            {t.hero.welcome}
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
        >
          {lang === 'id' ? 'Halo, saya ' : "Hi, I'm "}
          <span className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        {/* Sharpened Positioning Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8 mx-auto leading-snug lg:whitespace-nowrap"
        >
          {profile.title[lang]}
        </motion.h2>

        {/* Highlights / Metric Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10 text-left"
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-blue-400/50 transition-colors"
            >
              <div className="mb-3">{highlightIcons[idx % highlightIcons.length]}</div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {item.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {item.sublabel}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#proyek"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-md shadow-blue-600/25 active:scale-95"
          >
            {t.hero.viewProjects}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all active:scale-95 shadow-xs"
          >
            <GithubIcon size={16} />
            GitHub
          </a>

          <a
            href={lang === 'en' ? '/documents/CV-Johan-Halim-EN.pdf' : '/documents/CV-Johan-Halim.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all active:scale-95 shadow-xs"
          >
            <Download size={16} />
            {t.hero.downloadCv}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
