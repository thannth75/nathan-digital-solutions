"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Code, Terminal, Palette, Award, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

const experiences = [
  {
    role: "Desenvolvedor Full-Stack Sênior",
    company: "Freelance / Autônomo",
    period: "2022 - Presente",
    description: "Desenvolvimento de aplicações web completas, landing pages de alta conversão, e-commerces e sistemas sob medida para empresas de diversos nichos.",
    techs: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
  },
  {
    role: "UX/UI Designer",
    company: "Agências & Startups",
    period: "2020 - 2022",
    description: "Criação de interfaces web com foco em usabilidade e conversão. Prototipação no Figma, testes A/B e elaboração de Design Systems.",
    techs: ["Figma", "Adobe XD", "Framer", "CSS/SASS"]
  },
  {
    role: "Desenvolvedor Front-End",
    company: "Tech Solutions",
    period: "2018 - 2020",
    description: "Implementação de interfaces responsivas, consumo de APIs REST e otimização de performance (Core Web Vitals) em aplicações SPAs.",
    techs: ["JavaScript", "React", "Redux", "Styled Components"]
  }
];

const skills = [
  {
    category: "Front-End",
    icon: <Globe className="w-5 h-5 text-[var(--color-primary)]" />,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
  },
  {
    category: "Back-End & Cloud",
    icon: <Terminal className="w-5 h-5 text-[var(--color-secondary)]" />,
    items: ["Node.js", "Express", "RESTful APIs", "Vercel", "AWS (Basic)", "Firebase"]
  },
  {
    category: "Banco de Dados",
    icon: <Database className="w-5 h-5 text-[var(--color-accent-cyan)]" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Supabase"]
  },
  {
    category: "Design & UX",
    icon: <Palette className="w-5 h-5 text-[var(--color-primary)]" />,
    items: ["Figma", "Prototipagem", "Wireframing", "Design Systems", "Acessibilidade"]
  }
];

export default function CurriculoPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero Section - Currículo */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-[var(--color-surface-elevated)] border-b border-[var(--color-border)]">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6">
                <span className="text-sm font-medium text-[var(--color-secondary)]">Curriculum Vitae</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">
                Minha <span className="text-gradient">Experiência</span>
              </h1>
              <p className="text-xl text-[var(--color-text-muted)]">
                Um resumo da minha jornada profissional, habilidades técnicas e acadêmicas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* O href aponta para um PDF na pasta public/ que você pode colocar depois */}
              <a href="/curriculo-nathan-dantas.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="premium" className="gap-2 px-8 py-4">
                  Baixar PDF <Download size={18} />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container pt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Column - Experiência */}
          <div className="lg:col-span-2 space-y-12">
            
            <div>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--color-border)]">
                <Briefcase className="w-6 h-6 text-[var(--color-primary)]" />
                <h2 className="text-2xl font-bold font-heading text-white">Experiência Profissional</h2>
              </div>
              
              <div className="space-y-12 relative">
                {/* Timeline Line */}
                <div className="absolute top-0 bottom-0 left-3 w-[2px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent opacity-30 hidden md:block" />
                
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-0 md:pl-10"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[8px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] hidden md:block shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.8)]" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white font-heading">{exp.role}</h3>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-accent-cyan)] whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-[var(--color-primary)] mb-4">{exp.company}</p>
                    <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techs.map((tech, tIndex) => (
                        <span key={tIndex} className="text-xs px-2 py-1 rounded-md bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Educação */}
            <div className="pt-8">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--color-border)]">
                <Award className="w-6 h-6 text-[var(--color-secondary)]" />
                <h2 className="text-2xl font-bold font-heading text-white">Formação Acadêmica</h2>
              </div>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel p-6 border border-[var(--color-border)] rounded-2xl"
                >
                  <h3 className="text-lg font-bold text-white">Ciência da Computação (ou equivalente)</h3>
                  <p className="text-[var(--color-primary)] mb-2">Universidade Exemplo</p>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">Conclusão: 2021</p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Foco em engenharia de software, estrutura de dados e algoritmos avançados.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass-panel p-6 border border-[var(--color-border)] rounded-2xl"
                >
                  <h3 className="text-lg font-bold text-white">Pós-Graduação em UI/UX Design</h3>
                  <p className="text-[var(--color-primary)] mb-2">Instituto de Tecnologia</p>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">Conclusão: 2023</p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Especialização focada na experiência do usuário, interfaces acessíveis e CRO.
                  </p>
                </motion.div>
              </div>
            </div>

          </div>

          {/* Sidebar - Skills */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-[var(--color-border)] sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-6 h-6 text-[var(--color-accent-neon)]" />
                <h2 className="text-2xl font-bold font-heading text-white">Habilidades Técnicas</h2>
              </div>
              
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {skillGroup.icon}
                      <h3 className="text-lg font-medium text-white">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, iIndex) => (
                        <span 
                          key={iIndex} 
                          className="px-3 py-1.5 text-sm bg-black/40 border border-[var(--color-border)] rounded-lg text-[var(--color-text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-lg font-medium text-white mb-4">Idiomas</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">Português</span>
                      <span className="text-[var(--color-primary)]">Nativo</span>
                    </div>
                    <div className="h-1.5 w-full bg-[var(--color-surface)] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] w-full rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">Inglês</span>
                      <span className="text-[var(--color-primary)]">Avançado</span>
                    </div>
                    <div className="h-1.5 w-full bg-[var(--color-surface)] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] w-[85%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
