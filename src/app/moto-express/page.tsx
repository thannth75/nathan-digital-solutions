"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calculator, MapPin, Clock, ShieldCheck, Phone, CheckCircle2, Package, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function MotoExpressPage() {
  const [distance, setDistance] = useState<number>(5);
  
  // Exemplo simples de cálculo de frete
  const basePrice = 8;
  const pricePerKm = 1.5;
  const estimatedPrice = basePrice + (distance * pricePerKm);

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-[var(--color-surface)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-transparent z-0" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 mb-6 text-[#FFD700]">
                <Package size={16} />
                <span className="text-sm font-bold">Entrega Rápida e Segura</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-white uppercase italic tracking-tight">
                Moto <span className="text-[#FFD700]">Express</span>
              </h1>
              <p className="text-xl text-[var(--color-text-muted)] mb-8 max-w-lg">
                Serviço de motofrete ágil para empresas e pessoas físicas. 
                Sua encomenda no destino certo, no tempo combinado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5516993635702?text=Olá, preciso de um motoboy!" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#FFD700] hover:bg-[#F2C800] text-black font-bold border-none w-full sm:w-auto px-8 py-4 gap-2">
                    Chamar Motoboy <ArrowRight size={18} />
                  </Button>
                </a>
                <a href="#simulador">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-4 border-[#FFD700]/30 text-white hover:bg-[#FFD700]/10">
                    Simular Frete
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden glass-panel border-2 border-[#FFD700]/20"
            >
              <Image 
                src="/images/moto-express.png" 
                alt="Moto Express" 
                fill 
                className="object-contain relative z-10 p-4" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-[var(--color-surface-elevated)]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="text-[#FFD700] w-8 h-8" />, title: "Agilidade", desc: "Coleta em até 30 minutos na região central." },
              { icon: <ShieldCheck className="text-[#FFD700] w-8 h-8" />, title: "Segurança", desc: "Garantia de integridade para suas encomendas." },
              { icon: <MapPin className="text-[#FFD700] w-8 h-8" />, title: "Rastreio Real", desc: "Acompanhe a localização exata do motoboy." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulador Interativo */}
      <section id="simulador" className="py-24 relative">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
              Simulador de <span className="text-[#FFD700]">Frete</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg">
              Estime o valor da sua entrega rapidamente.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-[#FFD700]/30 shadow-[0_0_50px_rgba(255,215,0,0.05)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Calculator size={120} className="text-[#FFD700]" />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="flex justify-between text-sm font-medium text-white mb-4">
                    <span>Distância Estimada</span>
                    <span className="text-[#FFD700] font-bold text-lg">{distance} km</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={distance}
                    onChange={(e) => setDistance(parseInt(e.target.value))}
                    className="w-full h-2 bg-[var(--color-surface)] rounded-lg appearance-none cursor-pointer accent-[#FFD700]"
                  />
                  <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-2">
                    <span>1 km</span>
                    <span>50 km</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-white">Serviços Inclusos:</p>
                  {[
                    "Coleta no local",
                    "Entrega em mãos",
                    "Comprovante digital",
                    "Seguro carga básico"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
                      <CheckCircle2 size={16} className="text-[#FFD700]" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center items-center p-8 bg-[var(--color-surface)] rounded-2xl border border-[#FFD700]/20 text-center">
                <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider font-bold mb-2">Valor Estimado</p>
                <div className="flex items-start justify-center gap-1 mb-6 text-[#FFD700]">
                  <span className="text-2xl font-bold mt-2">R$</span>
                  <span className="text-6xl font-black font-heading tracking-tighter">
                    {estimatedPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-8 max-w-[200px]">
                  *O valor final pode variar dependendo do volume e horário de pico.
                </p>

                <a href={`https://wa.me/5516993635702?text=Olá, simulei uma entrega de ${distance}km e gostaria de solicitar um motoboy.`} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-[#FFD700] hover:bg-[#F2C800] text-black font-bold gap-2">
                    Solicitar Agora <Phone size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
