"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Briefcase, GraduationCap, Target } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero Section - Sobre */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent z-0" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              A Mente Por Trás <br/>
              <span className="text-gradient">Do Código</span>
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Desenvolvedor Full-Stack, Designer e Estrategista Digital focado em resultados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História & Jornada */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-[var(--color-border)]"
            >
              <Image 
                src="/images/nathan-profile.png" 
                alt="Nathan Pires Dantas" 
                fill 
                className="object-cover relative z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel">
                <span className="text-sm font-medium text-[var(--color-accent-cyan)]">Minha Trajetória</span>
              </div>
              <h2 className="text-3xl font-bold font-heading text-white">
                De entusiasta a especialista na criação de <span className="text-gradient">produtos digitais</span>
              </h2>
              
              <div className="text-[var(--color-text-muted)] space-y-4 leading-relaxed">
                <p>
                  Sempre acreditei que a tecnologia deve servir às pessoas, e não o contrário. 
                  Minha jornada começou com a curiosidade de entender como a web funcionava e rapidamente se transformou 
                  na missão de construir experiências digitais memoráveis.
                </p>
                <p>
                  Com anos de experiência em desenvolvimento Full-Stack, Design UX/UI e Estratégia de Negócios, 
                  entendi que o código perfeito só tem valor se trouxer resultados reais: mais vendas, 
                  mais engajamento e melhor percepção de marca.
                </p>
                <p>
                  Hoje, ajudo empresas e profissionais a se destacarem em um mercado cada vez mais competitivo, 
                  unindo estética cinematográfica, performance absurda e conversão estratégica.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-border)] mt-8">
                <div>
                  <h4 className="text-3xl font-bold text-white font-heading mb-1">5+</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Anos de Experiência</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white font-heading mb-1">50+</h4>
                  <p className="text-sm text-[var(--color-text-muted)]">Projetos Entregues</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores / Pilares */}
      <section className="py-24 bg-[var(--color-surface-elevated)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Meus <span className="text-gradient">Pilares</span></h2>
            <p className="text-[var(--color-text-muted)]">Os princípios que guiam cada linha de código e pixel desenhado.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target />, title: "Foco no Resultado", desc: "Design bonito não basta. Tem que converter, vender e engajar." },
              { icon: <Award />, title: "Excelência Técnica", desc: "Clean code, arquitetura escalável e as melhores tecnologias do mercado." },
              { icon: <Briefcase />, title: "Profissionalismo", desc: "Prazos cumpridos, comunicação clara e transparência total." },
              { icon: <GraduationCap />, title: "Evolução Contínua", desc: "Sempre estudando e aplicando as tendências mais modernas do mundo." }
            ].map((pilar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 text-center rounded-2xl group hover:border-[var(--color-primary)]/50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">
                  {pilar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pilar.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
