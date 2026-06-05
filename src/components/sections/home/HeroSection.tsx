"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-neon)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--color-text-muted)]">
              Disponível para novos projetos
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Nathan <br />
            <span className="text-gradient">Digital Solutions</span>
          </h1>

          <p className="text-lg lg:text-xl text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            Sites profissionais, soluções digitais e presença online para negócios que querem crescer.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button variant="premium" size="lg" className="w-full sm:w-auto text-base">
              Solicitar orçamento
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto text-base">
              Ver projetos
            </Button>
            <Button variant="link" className="w-full sm:w-auto text-[var(--color-text-muted)] hover:text-white">
              Conhecer minha história &rarr;
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-8 pt-8 border-t border-[var(--color-border)]">
            <div>
              <div className="text-3xl font-bold text-white">4+</div>
              <div className="text-sm text-[var(--color-text-muted)]">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-[var(--color-text-muted)]">Foco em Resultados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-[var(--color-text-muted)]">Suporte Premium</div>
            </div>
          </div>
        </motion.div>

        {/* Image/Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Photo Container */}
          <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] rounded-3xl glass-panel p-2 z-10 animate-float">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-black/40">
              <Image 
                src="/images/nathan-profile.png" 
                alt="Nathan Pires Dantas" 
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -right-8 lg:-right-12 top-1/4 glass-panel p-4 z-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
                {"</>"}
              </div>
              <div>
                <div className="text-sm font-bold text-white">Clean Code</div>
                <div className="text-xs text-[var(--color-text-muted)]">Alta Performance</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-8 lg:-left-12 bottom-1/4 glass-panel p-4 z-20 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-cyan)] flex items-center justify-center text-black font-bold">
                UI
              </div>
              <div>
                <div className="text-sm font-bold text-white">Design Premium</div>
                <div className="text-xs text-[var(--color-text-muted)]">Foco em Conversão</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
