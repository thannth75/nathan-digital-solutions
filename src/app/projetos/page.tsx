"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Brain, TrendingUp, ExternalLink, BookOpen, Zap, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Vida em Cristo",
    tagline: "Devocional digital para fé e crescimento espiritual",
    description: "Aplicação web devocional que oferece leituras diárias, planos de estudo bíblico, versículos do dia e reflexões inspiradoras. Projetada para fortalecer a caminhada espiritual de cada usuário com design moderno e conteúdo relevante.",
    icon: <Heart className="w-8 h-8" />,
    gradient: "from-emerald-500/20 to-teal-900/20",
    accentColor: "#34D399",
    status: "Em desenvolvimento",
    features: [
      "Devocional diário com reflexão",
      "Versículo do dia randomizado",
      "Planos de leitura bíblica",
      "Interface calma e acolhedora",
      "Modo noturno automático",
    ],
    tech: ["Next.js", "Firebase", "PWA"],
  },
  {
    title: "AURA",
    tagline: "Assistente de produtividade pessoal com IA",
    description: "Sistema inteligente de organização pessoal que utiliza inteligência artificial para sugerir prioridades, gerenciar tarefas e otimizar a rotina do usuário. AURA aprende com seus hábitos e entrega insights personalizados.",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-violet-500/20 to-purple-900/20",
    accentColor: "#A78BFA",
    status: "Conceito & Protótipo",
    features: [
      "IA para priorização de tarefas",
      "Dashboard de produtividade",
      "Calendário inteligente",
      "Análise de hábitos",
      "Integração com Google Calendar",
    ],
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
  },
  {
    title: "FinViva",
    tagline: "Educação financeira gamificada para jovens",
    description: "Plataforma educacional que ensina finanças pessoais de forma lúdica e interativa, com quizzes, desafios semanais, simuladores de investimento e trilhas de aprendizado adaptativas para cada nível de conhecimento.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-cyan-500/20 to-blue-900/20",
    accentColor: "#22D3EE",
    status: "Planejamento",
    features: [
      "Trilhas de aprendizado gamificadas",
      "Simulador de investimentos",
      "Quizzes interativos",
      "Ranking e conquistas",
      "Conteúdo para iniciantes a avançados",
    ],
    tech: ["Next.js", "Supabase", "Chart.js", "Gamification API"],
  },
];

export default function ProjetosPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-secondary)]/5 to-transparent z-0" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6">
              <Zap size={14} className="text-[var(--color-accent-neon)]" />
              <span className="text-sm font-medium text-[var(--color-accent-neon)]">Projetos Pessoais & Inovação</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Minhas <span className="text-gradient">Criações</span>
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
              Além dos projetos para clientes, crio soluções que refletem minhas paixões: 
              <strong className="text-white"> fé, inteligência artificial e educação financeira</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="container space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`relative rounded-3xl overflow-hidden glass-panel border border-[var(--color-border)]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
              
              <div className="relative z-10 p-8 md:p-12">
                <div className="grid lg:grid-cols-5 gap-10 items-start">
                  {/* Main Content - 3 cols */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-black/30">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.accentColor }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: project.accentColor }}>
                        {project.status}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center border border-[var(--color-border)]"
                        style={{ backgroundColor: `${project.accentColor}15`, color: project.accentColor }}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">{project.title}</h2>
                        <p className="text-sm font-medium" style={{ color: project.accentColor }}>{project.tagline}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-xs font-mono rounded-lg bg-black/40 border border-[var(--color-border)] text-[var(--color-text-muted)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features - 2 cols */}
                  <div className="lg:col-span-2">
                    <div className="glass-panel p-6 rounded-2xl border border-[var(--color-border)]">
                      <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                        <BookOpen size={18} style={{ color: project.accentColor }} />
                        Funcionalidades
                      </h3>
                      <ul className="space-y-3">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: project.accentColor }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Source / Collaboration CTA */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 md:p-16 rounded-3xl text-center border border-[var(--color-border)]"
          >
            <Globe className="w-12 h-12 mx-auto mb-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Quer colaborar em algum projeto?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto">
              Estou sempre aberto a parcerias, feedbacks e novas ideias. Se algum desses projetos te interessou, vamos conversar!
            </p>
            <a href="https://wa.me/5516993635702?text=Olá Nathan! Vi seus projetos pessoais e gostaria de conversar sobre uma possível colaboração." target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] inline-flex items-center gap-2">
                Entrar em Contato <ArrowRight size={18} />
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
