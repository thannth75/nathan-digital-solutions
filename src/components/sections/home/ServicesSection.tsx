"use client";

import { motion } from "framer-motion";
import { Laptop, Store, Paintbrush, LineChart, Code2, Rocket } from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    description: "Páginas de alta conversão projetadas para transformar visitantes em clientes reais.",
    icon: <Rocket className="w-6 h-6 text-[var(--color-primary)]" />,
  },
  {
    title: "Sites Institucionais",
    description: "Presença digital sólida e profissional para posicionar sua empresa no mercado.",
    icon: <Store className="w-6 h-6 text-[var(--color-secondary)]" />,
  },
  {
    title: "Lojas Virtuais",
    description: "E-commerces modernos, rápidos e otimizados para vendas e conversões.",
    icon: <Laptop className="w-6 h-6 text-[var(--color-accent-cyan)]" />,
  },
  {
    title: "Design UX/UI",
    description: "Interfaces incrivelmente belas e pensadas para a melhor experiência do usuário.",
    icon: <Paintbrush className="w-6 h-6 text-[var(--color-primary)]" />,
  },
  {
    title: "Dashboards & BI",
    description: "Visualização de dados clara e interativa para apoiar a tomada de decisões.",
    icon: <LineChart className="w-6 h-6 text-[var(--color-secondary)]" />,
  },
  {
    title: "Soluções Customizadas",
    description: "Automações e sistemas desenvolvidos sob medida para sua necessidade.",
    icon: <Code2 className="w-6 h-6 text-[var(--color-accent-cyan)]" />,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-surface)]">
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-surface-elevated)] skew-x-[-15deg] transform translate-x-1/4 opacity-20" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6"
          >
            <span className="text-sm font-medium text-[var(--color-accent-cyan)]">O Que Eu Faço</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Soluções Digitais <span className="text-gradient">Completas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--color-text-muted)]"
          >
            Combinando design premium, tecnologia moderna e estratégia de negócios para entregar resultados excepcionais.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-elevated)] flex items-center justify-center mb-6 border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
