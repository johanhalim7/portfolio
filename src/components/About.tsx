'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/profile';

function GithubIcon({ size = 20 }: { size?: number }) {
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

export default function About() {
  const { lang, t } = useLanguage();

  const summaryParagraphs = profile.summary[lang]
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section id="tentang" className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            {t.about.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            {t.about.title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden ring-4 ring-blue-500/20 shadow-2xl shadow-blue-600/15">
                <Image
                  src="/images/FotoJH.jpeg"
                  alt="Foto Johan Halim"
                  width={500}
                  height={500}
                  quality={100}
                  unoptimized
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {lang === 'id' ? 'Tersedia untuk Direkrut' : 'Open to Opportunities'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Info Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 space-y-3.5 text-sm sm:text-base">
              {summaryParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 shadow-xs">
                <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    {t.about.location}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {profile.location}
                  </p>
                </div>
              </div>

              {/* University */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 shadow-xs">
                <div className="p-2.5 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    {t.about.university}
                  </p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {profile.education.degree[lang]}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {profile.education.university} ({profile.education.year})
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 shadow-xs hover:border-blue-400 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 shrink-0">
                  <GithubIcon size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    {t.about.github}
                  </p>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 truncate group-hover:underline">
                    {profile.github}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 shadow-xs hover:border-blue-400 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shrink-0">
                  <ExternalLink size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    {t.about.linkedin}
                  </p>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 truncate group-hover:underline">
                    {profile.linkedin}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
