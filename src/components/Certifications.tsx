'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { useLanguage } from '@/context/LanguageContext';

export default function Certifications() {
  const { lang, t } = useLanguage();

  return (
    <section id="sertifikasi" className="bg-white dark:bg-slate-950 py-16 md:py-[4.5rem]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-9"
        >
          <div className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
            {t.certifications.title}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            {lang === 'id' ? 'Sertifikasi & Kredensial Resmi' : 'Official Certifications & Credentials'}
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-blue-50/20 dark:from-slate-900 dark:via-slate-800/90 dark:to-blue-950/20 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Official BNSP Emblem Badge */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 p-2 flex items-center justify-center shadow-xs">
                  <Image
                    src="/images/certifications/bnsp-badge.svg"
                    alt="BNSP Indonesia Seal"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50">
                      <ShieldCheck size={13} />
                      {t.certifications.verifyBadge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Tahun {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                    {cert.field[lang]}
                  </p>

                  {cert.credentialId && (
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/80 dark:border-slate-700/60">
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <span className="text-slate-400 dark:text-slate-500 font-sans mr-1">
                          {t.certifications.credentialIdLabel}
                        </span>
                        <strong className="text-slate-700 dark:text-slate-200">
                          {cert.credentialId}
                        </strong>
                      </div>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Verifikasi di BNSP
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
