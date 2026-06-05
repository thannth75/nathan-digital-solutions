"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-surface)]">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6"
            >
              <span className="text-sm font-medium text-[var(--color-primary)]">Vamos Conversar?</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Pronto para evoluir o <span className="text-gradient">Seu Negócio</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[var(--color-text-muted)] mb-10"
            >
              Entre em contato agora mesmo e vamos discutir como posso ajudar você a construir uma presença digital que gera resultados reais.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <a href="https://wa.me/5516993635702" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">WhatsApp Direto</p>
                  <p className="text-white font-medium text-lg">(16) 99363-5702</p>
                </div>
              </a>

              <a href="mailto:contato@exemplo.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">E-mail Profissional</p>
                  <p className="text-white font-medium text-lg">contato@exemplo.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-primary)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Localização & Atendimento</p>
                  <p className="text-white font-medium text-lg">São Carlos, SP — 100% Digital</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-[var(--color-border)] shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">Me envie uma mensagem</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-[var(--color-text-muted)]">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      placeholder="Como posso te chamar?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm text-[var(--color-text-muted)]">WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm text-[var(--color-text-muted)]">O que você precisa?</label>
                  <select 
                    id="service" 
                    className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none"
                  >
                    <option value="">Selecione uma opção...</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="site">Site Institucional</option>
                    <option value="ecommerce">Loja Virtual</option>
                    <option value="sistema">Sistema Customizado</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-[var(--color-text-muted)]">Sua mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                    placeholder="Conte um pouco sobre o seu projeto..."
                  ></textarea>
                </div>

                <Button variant="primary" className="w-full py-4 text-lg mt-4 flex items-center justify-center gap-2">
                  Enviar Mensagem <Send size={18} />
                </Button>
                <p className="text-xs text-center text-[var(--color-text-muted)] mt-4">
                  Eu costumo responder em até 2 horas úteis.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
