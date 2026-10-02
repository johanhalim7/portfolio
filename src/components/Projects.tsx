'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitFork } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="proyek" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Proyek
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <ul className="mb-5 space-y-1.5 flex-grow">
                  {project.features.map((feature, j) => {
                    const isLink = feature.includes('Live:') || feature.includes('Repository:');
                    return (
                      <li key={j} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-[3px] opacity-70">▹</span>
                        {isLink ? (
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        ) : (
                          feature
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                {project.techStack.map((t, j) => (
                  <span
                    key={j}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
