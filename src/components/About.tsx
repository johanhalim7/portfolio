'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section
      id="tentang"
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
            Tentang Saya
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-xl shadow-blue-600/20">
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
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {profile.summary}
            </p>

            <div className="grid gap-4">
              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                    Lokasi
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {profile.location}
                  </p>
                </div>
              </div>

              {/* University */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                    Universitas
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {profile.education.university} — Lulus {profile.education.year}
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                    Lihat Profil
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
