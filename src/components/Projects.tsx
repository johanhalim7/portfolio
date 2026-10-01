'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitFork } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="proyek"
      className="bg-slate-50 dark:bg-slate-900"
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
            Proyek
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      aria-label="GitHub"
                    >
                      <GitFork size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <ul className="mb-4 space-y-1.5">
                  {project.features.map((feature, j) => (
                    <li
                      key={j}
                      className="text-xs text-slate-500 dark:text-slate-500 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
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
