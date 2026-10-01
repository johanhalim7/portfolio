'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Contact() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('https://formspree.io/f/xvkgnpdl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
      setForm({ nama: '', email: '', pesan: '' });
    } catch {
      // handle error silently
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="kontak"
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
            Kontak
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Tertarik untuk bekerja sama atau ingin bertanya? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="p-8 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
                <p className="text-green-700 dark:text-green-400 font-medium">
                  Terima kasih! Pesan Anda telah terkirim. 🎉
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="nama"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Nama
                  </label>
                  <input
                    id="nama"
                    type="text"
                    required
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pesan"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="pesan"
                    required
                    rows={5}
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors shadow-lg shadow-blue-600/25"
                >
                  <Send size={18} />
                  {submitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group"
            >
              <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group"
            >
              <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                  Telepon
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>

            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow group"
            >
              <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
