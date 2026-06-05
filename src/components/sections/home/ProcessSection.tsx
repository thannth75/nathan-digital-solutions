"use client";

import { motion } from "framer-motion";
import { MessageSquare, LayoutTemplate, FileSignature, Code, CheckCircle, ThumbsUp, Globe, Headset } from "lucide-react";

const processes = [
  { step: "01", title: "Conversa Inicial", desc: "Entendimento do seu negócio e objetivos.", icon: <MessageSquare className="w-5 h-5" /> },
  { step: "02", title: "Planejamento", desc: "Estruturação e definição de escopo.", icon: <LayoutTemplate className="w-5 h-5" /> },
  { step: "03", title: "Orçamento", desc: "Proposta transparente e sem surpresas.", icon: <FileSignature className="w-5 h-5" /> },
  { step: "04", title: "Desenvolvimento", desc: "Código limpo e design premium.", icon: <Code className="w-5 h-5" /> },
  { step: "05", title: "Revisão", desc: "Ajustes finos e testes rigorosos.", icon: <CheckCircle className="w-5 h-5" /> },
  { step: "06", title: "Aprovação", desc: "Validação final do projeto completo.", icon: <ThumbsUp className="w-5 h-5" /> },
  { step: "07", title: "Publicação", desc: "Deploy otimizado em produção.", icon: <Globe className="w-5 h-5" /> },
  { step: "08", title: "Suporte", desc: "Acompanhamento inicial garantido.", icon: <Headset className="w-5 h-5" /> },
];

export function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-surface-elevated)]">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6"
          >
            <span className="text-sm font-medium text-[var(--color-primary)]">Como Funciona</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Um Processo <span className="text-gradient">Transparente</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--color-text-muted)]"
          >
            Do primeiro contato até o site no ar, cada etapa é pensada para garantir a melhor experiência e resultado.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line connecting steps (visible on lg screens) */}
          <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-0.5 bg-[var(--color-border)] z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 relative z-10">
            {processes.map((proc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] flex items-center justify-center mb-6 relative transition-colors duration-300 shadow-xl">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {proc.step}
                  </div>
                  {/* Icon */}
                  <div className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {proc.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white font-heading mb-2">
                  {proc.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] max-w-[200px]">
                  {proc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
