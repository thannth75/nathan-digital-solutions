import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathan Digital Solutions | Sites Profissionais e Presença Online",
  description: "Construindo soluções digitais que ajudam pessoas, empresas e profissionais a crescerem. Especialista em criação de sites, landing pages, portfólios e lojas virtuais.",
  keywords: ["criação de sites", "desenvolvedor web", "são carlos", "soluções digitais", "presença online", "nathan pires dantas"],
  authors: [{ name: "Nathan Pires Dantas" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nathandigital.com.br",
    title: "Nathan Digital Solutions",
    description: "Sites profissionais e presença online para negócios que querem crescer.",
    siteName: "Nathan Digital Solutions",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d011a", // oklch(0.13 0.01 260) approx
  colorScheme: "dark",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nathan Digital Solutions",
    "url": "https://nathandigitalsolutions.com.br",
    "logo": "https://nathandigitalsolutions.com.br/icon.png",
    "sameAs": [
      "https://www.linkedin.com/in/nathanpiresdantas/",
      "https://github.com/thannth75"
    ],
    "founder": {
      "@type": "Person",
      "name": "Nathan Pires Dantas"
    }
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen pt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
