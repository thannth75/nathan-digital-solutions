"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Barbearia Don Carlos",
    category: "Agendamento & Serviços",
    image: "/images/demos/barbearia.jpg", // Placeholder
    link: "/demos/barbearia",
    color: "from-amber-500/20 to-orange-900/20",
  },
  {
    title: "Doce Encanto",
    category: "Doceria & Encomendas",
    image: "/images/demos/doceria.jpg", // Placeholder
    link: "/demos/doceria",
    color: "from-pink-500/20 to-rose-900/20",
  },
  {
    title: "Padaria Artesanal",
    category: "Catálogo & Delivery",
    image: "/images/demos/padaria.jpg", // Placeholder
    link: "/demos/padaria",
    color: "from-yellow-500/20 to-amber-900/20",
  },
  {
    title: "Bordados Premium",
    category: "Orçamento Interativo",
    image: "/images/demos/bordados.jpg", // Placeholder
    link: "/demos/bordados",
    color: "from-blue-500/20 to-indigo-900/20",
  },
  {
    title: "Loja Virtual NextGen",
    category: "E-commerce Completo",
    image: "/images/demos/ecommerce.jpg", // Placeholder
    link: "/demos/loja-virtual",
    color: "from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-surface)]">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6"
            >
              <span className="text-sm font-medium text-[var(--color-accent-neon)]">Portfólio & Demonstrações</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Projetos Que <span className="text-gradient">Inspiram</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[var(--color-text-muted)]"
            >
              Explore demonstrações interativas de negócios reais construídos com tecnologia de ponta.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="outline" className="gap-2">
              Ver todos os projetos <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col h-[400px]"
            >
              {/* Image Container with Fallback solid color while images aren't ready */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-0`} />
              
              <div className="relative h-full flex-grow overflow-hidden bg-black/40 z-10">
                {/* Placeholder pattern since images don't exist yet */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] opacity-50 font-mono text-xs">
                  {project.image}
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={project.link}>
                    <Button variant="premium" className="gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Visualizar Demo <ExternalLink size={16} />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Content Box */}
              <div className="relative z-20 bg-[var(--color-surface-elevated)] p-6 border-t border-[var(--color-border)]">
                <div className="text-sm font-medium text-[var(--color-accent-cyan)] mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
