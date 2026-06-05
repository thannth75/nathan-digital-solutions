"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[var(--color-surface)]">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-secondary)]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-heading font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--color-surface-elevated)] opacity-20">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">
                Página não encontrada
              </h2>
            </div>
          </div>
          
          <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-lg mx-auto">
            A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] flex items-center justify-center gap-2">
                <Home size={18} />
                Voltar para a Home
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-surface-elevated)] hover:bg-[var(--color-border)] text-white font-bold rounded-xl border border-[var(--color-border)] transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Página Anterior
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
