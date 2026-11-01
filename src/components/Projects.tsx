'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import CaseStudyModal from '@/components/CaseStudyModal';
import type { Project } from '@/types';

function GithubIcon({ size = 15 }: { size?: number }) {
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

export default function Projects() {
  const { lang, t } = useLanguage();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  return (
    <section id="proyek" className="bg-slate-50/70 dark:bg-slate-900/40 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            {t.projects.title}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            {lang === 'id' ? 'Karya Rekayasa & Portofolio Proyek' : 'Featured Engineering Projects'}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto md:mx-0" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured
                  ? 'ring-2 ring-blue-500/30 dark:ring-blue-400/30'
                  : ''
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Mockup Preview */}
                <div className="lg:col-span-6 bg-slate-950 flex items-center justify-center relative overflow-hidden group">
                  <div className="w-full h-full relative aspect-video lg:aspect-auto lg:min-h-[360px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold shadow-md backdrop-blur-xs">
                      <Sparkles size={12} />
                      {t.projects.featuredTag}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    {project.subtitle && (
                      <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                        {project.subtitle[lang]}
                      </p>
                    )}

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {project.description[lang]}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                        {t.projects.keyFeatures}
                      </p>
                      <ul className="space-y-2">
                        {project.features[lang].map((feat, j) => (
                          <li
                            key={j}
                            className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-blue-500 shrink-0 mt-0.5"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dedicated Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    {/* Live Demo Button */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors active:scale-95"
                      >
                        <ExternalLink size={14} />
                        {t.projects.liveDemo}
                      </a>
                    )}

                    {/* GitHub Repo Button */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-750 text-xs font-semibold transition-colors active:scale-95"
                      >
                        <GithubIcon size={14} />
                        {t.projects.sourceCode}
                      </a>
                    )}

                    {/* Case Study Button */}
                    {project.caseStudy && (
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-xs font-semibold transition-colors cursor-pointer active:scale-95 ml-auto"
                      >
                        <Sparkles size={13} className="text-indigo-500" />
                        {t.projects.caseStudyBtn}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
