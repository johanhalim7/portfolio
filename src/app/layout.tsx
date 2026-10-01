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
  title: "Johan Halim — Software Engineer Portfolio",
  description:
    "Portfolio Johan Halim, lulusan S1 Teknik Informatika Universitas Muhammadiyah Cirebon. Berpengalaman dalam PHP/Laravel, MySQL, JavaScript, dan Blockchain.",
  keywords: [
    "Johan Halim",
    "Software Engineer",
    "Portfolio",
    "Laravel",
    "Blockchain",
    "Web Developer",
    "Cirebon",
    "Fresh Graduate",
    "Teknik Informatika",
  ],
  authors: [{ name: "Johan Halim" }],
  openGraph: {
    title: "Johan Halim — Software Engineer Portfolio",
    description:
      "Lulusan S1 Teknik Informatika UMC. Berpengalaman dalam PHP/Laravel, MySQL, JavaScript, dan Blockchain.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
