"use client";

import Link from "next/link";
import { Instagram, Monitor, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link href="/" className="font-heading font-bold text-2xl tracking-tight">
            Nathan<span className="text-[var(--color-primary)]">.</span>
          </Link>
          <p className="text-[var(--color-text-muted)] max-w-sm">
            Construindo soluções digitais que ajudam pessoas, empresas e profissionais a crescerem.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.linkedin.com/in/nathanpiresdantas/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[var(--glass-bg)] hover:bg-[var(--color-primary)] transition-colors" aria-label="LinkedIn">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/thannth75" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[var(--glass-bg)] hover:bg-[var(--color-primary)] transition-colors" aria-label="GitHub">
              <Monitor size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-white mb-2">Navegação</h3>
          <Link href="/sobre" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Sobre Mim</Link>
          <Link href="/curriculo" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Currículo</Link>
          <Link href="/projetos" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Projetos Pessoais</Link>
          <Link href="/moto-express" className="text-[var(--color-text-muted)] hover:text-white transition-colors">Moto Express</Link>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-white mb-2">Contato</h3>
          <a href="https://wa.me/5516993635702" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-white transition-colors">
            <span className="w-5 h-5 flex items-center justify-center text-[var(--color-primary)]">💬</span>
            (16) 99363-5702
          </a>
          <a href="mailto:contato@exemplo.com" className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-white transition-colors">
            <Mail size={16} className="text-[var(--color-primary)]" />
            E-mail
          </a>
          <div className="flex items-start gap-2 text-[var(--color-text-muted)] mt-2">
            <MapPin size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
            <span>São Carlos - SP<br />Atendimento digital em todo o Brasil</span>
          </div>
        </div>
      </div>

      <div className="container pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
        <p>© {currentYear} Nathan Digital Solutions. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Feito com <span className="text-red-500">❤️</span> e <span className="text-[var(--color-primary)] font-mono">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
