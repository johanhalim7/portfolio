'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useLanguage } from '@/context/LanguageContext';

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="keahlian" className="bg-slate-50/70 dark:bg-slate-900/40 py-16 md:py-[4.5rem]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            {t.skills.title}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            {lang === 'id' ? 'Kompetensi & Teknologi Rekayasa' : 'Engineering Skills & Tech Stack'}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-xs hover:border-blue-400/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-slate-700/50">
                  {group.category[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 shadow-xs"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
