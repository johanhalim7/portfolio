'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section
      id="beranda"
      className="min-h-[85vh] flex items-center justify-center pt-20 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Subtle Background Mesh / Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
            Selamat Datang
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
        >
          Halo, saya <span className="text-blue-600 dark:text-blue-500">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl font-medium text-slate-600 dark:text-slate-400 mb-6 max-w-none mx-auto sm:whitespace-nowrap flex flex-wrap justify-center gap-1.5"
        >
          {profile.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[15px] md:text-base text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed space-y-4"
        >
          {profile.summary.split('\\n\\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#proyek"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-md shadow-blue-600/20 active:scale-95"
          >
            Lihat Proyek
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/documents/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all active:scale-95 shadow-sm"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
