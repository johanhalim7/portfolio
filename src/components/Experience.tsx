'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="pengalaman" className="bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Pengalaman
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
        </motion.div>

        {/* Compact Left-Aligned Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-4 space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 md:pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-blue-600 dark:bg-blue-400 rounded-full ring-4 ring-white dark:ring-slate-950" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="inline-block text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded-md mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                {exp.company}
              </p>
              
              <ul className="space-y-1.5">
                {exp.descriptions.map((desc, j) => (
                  <li key={j} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-start">
                    <span className="text-blue-400 dark:text-blue-600 mr-2 mt-0.5">•</span>
                    {desc.startsWith('Source Code:') ? (
                      <a href={`https://${desc.replace('Source Code: ', '')}`} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                        {desc}
                      </a>
                    ) : desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
