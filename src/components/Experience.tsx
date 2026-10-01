'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section
      id="pengalaman"
      className="bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Pengalaman
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-6 md:gap-12`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full ring-4 ring-white dark:ring-slate-950 -translate-x-1.5 md:-translate-x-1.5 mt-6 md:mt-0 z-10" />

                {/* Content card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    <ul
                      className={`space-y-2 ${
                        i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      {exp.descriptions.map((desc, j) => (
                        <li
                          key={j}
                          className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
