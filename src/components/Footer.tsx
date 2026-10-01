import { ChevronUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; 2026 Johan Halim. Hak cipta dilindungi.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
              Dibangun dengan Next.js &amp; Tailwind CSS
            </p>
          </div>

          <a
            href="#beranda"
            className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Kembali ke atas
            <ChevronUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
