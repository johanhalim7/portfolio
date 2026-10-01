'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-wide text-sm uppercase">
            Selamat Datang
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Halo, saya{' '}
          <span className="text-blue-600 dark:text-blue-400">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base text-slate-500 dark:text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#proyek"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-600/25"
          >
            Lihat Proyek
          </a>
          <a
            href="/documents/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
