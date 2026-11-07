import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johanhalim.vercel.app"),
  title: "Johan Halim — Software Engineer | Full-Stack Developer | QA Engineer | AI Engineer",
  description:
    "Portofolio Johan Halim, lulusan S1 Teknik Informatika Universitas Muhammadiyah Cirebon. Berpengalaman dalam pengembangan aplikasi web (PHP/Laravel, Next.js), basis data MySQL, dan teknologi Blockchain.",
  keywords: [
    "Johan Halim",
    "Software Developer",
    "Web Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Solidity",
    "Blockchain Developer",
    "Teknik Informatika",
    "Universitas Muhammadiyah Cirebon",
    "Cirebon",
    "Indonesia",
    "BNSP Junior Web Programmer",
  ],
  authors: [{ name: "Johan Halim", url: "https://github.com/johanhalim7" }],
  creator: "Johan Halim",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Johan Halim — Software Engineer | Full-Stack Developer | QA Engineer | AI Engineer",
    description:
      "Portofolio Johan Halim, Web & Software Developer. Menampilkan proyek web modern, smart contract Ethereum (IjazahChain), dan sistem informasi instansi.",
    url: "https://johanhalim.vercel.app",
    siteName: "Johan Halim Portfolio",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Johan Halim — Software Engineer | Full-Stack Developer | QA Engineer | AI Engineer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Halim — Software Engineer | Full-Stack Developer | QA Engineer | AI Engineer",
    description:
      "Portofolio Johan Halim, Web & Software Developer lulusan S1 Teknik Informatika UMC.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
