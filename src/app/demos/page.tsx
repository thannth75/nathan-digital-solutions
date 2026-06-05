"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Scissors, Cake, CroissantIcon, Palette, ShoppingCart } from "lucide-react";

const demos = [
  {
    title: "Barbearia Don Carlos",
    category: "Agendamento & Serviços",
    description: "Uma barbearia premium com sistema de agendamento online, galeria de cortes e avaliações de clientes.",
    link: "/demos/barbearia",
    icon: <Scissors className="w-8 h-8" />,
    gradient: "from-amber-500/30 to-orange-900/30",
    accentColor: "#D4A574",
    borderColor: "border-amber-700/30",
  },
  {
    title: "Doce Encanto",
    category: "Confeitaria & Encomendas",
    description: "Confeitaria artesanal com catálogo visual de doces, sistema de encomendas e depoimentos de clientes.",
    link: "/demos/doceria",
    icon: <Cake className="w-8 h-8" />,
    gradient: "from-pink-500/30 to-rose-900/30",
    accentColor: "#F472B6",
    borderColor: "border-pink-700/30",
  },
  {
    title: "Padaria Artesanal",
    category: "Catálogo & Delivery",
    description: "Padaria com menu digital interativo, pedidos via WhatsApp e informações de funcionamento.",
    link: "/demos/padaria",
    icon: <CroissantIcon className="w-8 h-8" />,
    gradient: "from-yellow-500/30 to-amber-900/30",
    accentColor: "#FBBF24",
    borderColor: "border-yellow-700/30",
  },
  {
    title: "Bordados Premium",
    category: "Orçamento Interativo",
    description: "Ateliê de bordados com portfólio visual, simulador de orçamento e galeria de trabalhos realizados.",
    link: "/demos/bordados",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-blue-500/30 to-indigo-900/30",
    accentColor: "#60A5FA",
    borderColor: "border-blue-700/30",
  },
  {
    title: "Loja Virtual NextGen",
    category: "E-commerce Completo",
    description: "Loja virtual moderna com catálogo de produtos, carrinho, checkout e integração com pagamento.",
    link: "/demos/loja-virtual",
    icon: <ShoppingCart className="w-8 h-8" />,
    gradient: "from-violet-500/30 to-purple-900/30",
    accentColor: "#A78BFA",
    borderColor: "border-violet-700/30",
  },
];

export default function DemosIndexPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent z-0" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6">
              <span className="text-sm font-medium text-[var(--color-accent-neon)]">Portfólio de Demonstrações</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Demos <span className="text-gradient">Interativos</span>
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Explore demonstrações funcionais de sites reais construídos para diferentes nichos de negócio. 
              Cada demo é uma vitrine do que a <strong className="text-white">Nathan Digital Solutions</strong> pode criar para você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={demo.link} className="block group h-full">
                  <div className={`relative rounded-3xl overflow-hidden glass-panel ${demo.borderColor} hover:border-opacity-60 transition-all duration-500 h-full flex flex-col`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 p-8 flex flex-col flex-grow">
                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[var(--color-border)] group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${demo.accentColor}15`, color: demo.accentColor }}
                      >
                        {demo.icon}
                      </div>

                      {/* Category Badge */}
                      <span className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: demo.accentColor }}>
                        {demo.category}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-white font-heading mb-3 group-hover:text-white transition-colors">
                        {demo.title}
                      </h2>

                      {/* Description */}
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-8 flex-grow">
                        {demo.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                        Explorar Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 md:p-16 rounded-3xl text-center border border-[var(--color-border)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Gostou do que viu?
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto">
                Cada demo acima pode ser adaptado para o seu negócio. Vamos conversar?
              </p>
              <a href="https://wa.me/5516993635702?text=Olá, vi os demos no site e gostaria de um orçamento!" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)]">
                  Solicitar Orçamento via WhatsApp
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
