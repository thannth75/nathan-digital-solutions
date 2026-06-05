"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Essencial",
    price: "R$ 1.500",
    desc: "Ideal para profissionais liberais e pequenos negócios que precisam de presença digital.",
    features: [
      { text: "Landing Page One-Page", included: true },
      { text: "Design Responsivo (Mobile First)", included: true },
      { text: "Formulário de Contato", included: true },
      { text: "Botão Flutuante WhatsApp", included: true },
      { text: "Integração com Redes Sociais", included: true },
      { text: "SEO Básico", included: true },
      { text: "Painel Administrativo", included: false },
      { text: "Múltiplos Idiomas", included: false },
      { text: "Integração com CRM", included: false },
    ],
    recommended: false,
  },
  {
    name: "Profissional",
    price: "R$ 3.500",
    desc: "A solução completa para empresas que buscam gerar mais autoridade e conversões.",
    features: [
      { text: "Site Multi-páginas (até 5)", included: true },
      { text: "Design Premium & Animações", included: true },
      { text: "Blog/Notícias (CMS)", included: true },
      { text: "Painel Administrativo", included: true },
      { text: "SEO Avançado & Analytics", included: true },
      { text: "Otimização de Performance (LCP)", included: true },
      { text: "E-mail Profissional (Setup)", included: true },
      { text: "Integração com RD Station/Mailchimp", included: true },
      { text: "Múltiplos Idiomas", included: false },
    ],
    recommended: true,
  },
  {
    name: "E-commerce & Sistemas",
    price: "Sob Consulta",
    desc: "Plataformas de vendas robustas e sistemas web complexos desenvolvidos sob medida.",
    features: [
      { text: "Tudo do plano Profissional", included: true },
      { text: "Catálogo de Produtos Ilimitado", included: true },
      { text: "Integração de Pagamento (Pix, Cartão)", included: true },
      { text: "Cálculo de Frete (Correios/Transportadoras)", included: true },
      { text: "Área Logada para Clientes", included: true },
      { text: "Dashboards de Vendas", included: true },
      { text: "Integração ERP/CRM Avançada", included: true },
      { text: "Múltiplos Idiomas", included: true },
      { text: "Suporte e Manutenção Premium", included: true },
    ],
    recommended: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-surface)]">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6"
          >
            <span className="text-sm font-medium text-[var(--color-secondary)]">Investimento</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Planos & <span className="text-gradient">Valores</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--color-text-muted)]"
          >
            Soluções escaláveis que se adaptam ao momento atual do seu negócio. Transparência desde o primeiro contato.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.recommended 
                  ? "bg-gradient-to-b from-[var(--color-primary)]/10 to-[var(--color-surface-elevated)] border border-[var(--color-primary)]/50 shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.1)] lg:-translate-y-4" 
                  : "bg-[var(--color-surface-elevated)] border border-[var(--color-border)]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                    Mais Escolhido
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white font-heading mb-2">{plan.name}</h3>
                <p className="text-[var(--color-text-muted)] text-sm mb-6 h-10">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Sob Consulta" && <span className="text-lg text-[var(--color-text-muted)]">A partir de</span>}
                  <span className="text-4xl font-bold text-white font-heading">{plan.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[var(--color-accent-cyan)] shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-[var(--color-text-muted)] opacity-50 shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-muted)] opacity-50"}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/5516993635702?text=Olá, gostaria de saber mais sobre o plano ${plan.name}.`} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant={plan.recommended ? "primary" : "outline"} className="w-full">
                  Solicitar Orçamento
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
