'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  return (
    <section
      id="sertifikasi"
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
            Sertifikasi
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {cert.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
