"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo demora para um site ficar pronto?",
    answer: "O prazo varia de acordo com a complexidade do projeto. Uma Landing Page pode levar de 7 a 15 dias, enquanto um E-commerce ou Sistema customizado pode levar de 30 a 60 dias. Tudo é definido e acordado no planejamento inicial."
  },
  {
    question: "Vocês trabalham com templates prontos?",
    answer: "Não. Cada projeto é desenhado e desenvolvido de forma exclusiva para atender aos objetivos específicos do seu negócio. Isso garante não apenas um visual único, mas também performance e SEO otimizados."
  },
  {
    question: "O site vai funcionar bem no celular?",
    answer: "Sim, 100%. Todos os projetos são desenvolvidos com a abordagem 'Mobile First', o que significa que eles são pensados primeiramente para a experiência em dispositivos móveis, e depois adaptados para tablets e desktops."
  },
  {
    question: "Terei suporte após o projeto ser entregue?",
    answer: "Com certeza. Todos os planos incluem um período de suporte inicial para garantir que tudo funcione perfeitamente. Também oferecemos planos de manutenção contínua caso você precise de atualizações frequentes."
  },
  {
    question: "Vocês cuidam do domínio e hospedagem?",
    answer: "Posso auxiliar na contratação do domínio (ex: seunome.com.br) e oferecer soluções de hospedagem de alta performance (como Vercel, AWS ou Hostinger), além de configurar tudo para você."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-surface-elevated)]">
      <div className="container relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6"
          >
            <span className="text-sm font-medium text-[var(--color-primary)]">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Dúvidas <span className="text-gradient">Frequentes</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel border border-[var(--color-border)] rounded-2xl overflow-hidden transition-colors hover:border-[var(--color-primary)]/50"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--color-text-muted)] transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[var(--color-primary)]" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[var(--color-text-muted)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
