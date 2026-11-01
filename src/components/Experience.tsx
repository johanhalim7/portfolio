'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, MapPin } from 'lucide-react';
import { experiences } from '@/data/experience';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { lang, t } = useLanguage();

  return (
    <section id="pengalaman" className="bg-white dark:bg-slate-950 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            {t.experience.title}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            {lang === 'id' ? 'Pengalaman Profesional & Organisasi' : 'Professional & Leadership Experience'}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 md:pl-8"
            >
              {/* Timeline Dot with Icon */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white dark:ring-slate-950 shadow-md">
                {exp.type === 'kerja' ? <Briefcase size={14} /> : <Users size={14} />}
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-1">
                      {exp.type === 'kerja' ? t.experience.work : t.experience.organization}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.title[lang]}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/60 shrink-0 self-start sm:self-auto">
                    <Calendar size={13} className="text-blue-500" />
                    {exp.period}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  <span>{exp.company}</span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-normal">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.descriptions[lang].map((desc, j) => (
                    <li
                      key={j}
                      className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-blue-500 shrink-0 mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
