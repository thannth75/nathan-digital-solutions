"use client";

import { motion } from "framer-motion";
import { Scissors, Clock, MapPin, Star, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  { name: "Corte Masculino", price: "R$ 45", time: "45 min" },
  { name: "Barba Terapia", price: "R$ 30", time: "30 min" },
  { name: "Corte + Barba", price: "R$ 65", time: "1h 15 min" },
  { name: "Degradê Navalhado", price: "R$ 50", time: "50 min" },
  { name: "Platinado/Luzes", price: "R$ 120", time: "2h" },
  { name: "Design de Sobrancelha", price: "R$ 20", time: "15 min" },
  { name: "Hidratação Profunda", price: "R$ 40", time: "20 min" },
  { name: "Day Use Completo", price: "R$ 150", time: "2h 30 min" },
];

export default function BarbeariaDemo() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#111111] text-white">
      {/* Voltar para Demos */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/demos">
          <Button variant="outline" className="bg-black/50 backdrop-blur-md border-white/10 text-white/70 hover:text-white rounded-full p-3 h-auto">
            <ArrowLeft size={20} />
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-[#111111]" />
        
        <div className="container relative z-10 max-w-5xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Scissors className="w-12 h-12 text-[#D4A574] mx-auto mb-6" />
            <h1 className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>
              Don Carlos
            </h1>
            <p className="text-[#D4A574] tracking-[0.3em] uppercase text-sm font-bold mb-8">
              Barbearia Clássica & Premium
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
              Tradição, estilo e o melhor atendimento da cidade. Agende seu horário e viva uma experiência premium.
            </p>
            
            <Button className="bg-[#D4A574] hover:bg-[#b88c5d] text-black font-bold px-10 py-6 text-lg">
              AGENDAR HORÁRIO
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 px-6 bg-[#151515]">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Nossos Serviços</h2>
            <div className="w-16 h-1 bg-[#D4A574] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {services.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between border-b border-white/5 pb-4 group"
              >
                <div>
                  <h3 className="text-lg font-bold group-hover:text-[#D4A574] transition-colors">{item.name}</h3>
                  <span className="text-sm text-white/40 flex items-center gap-1 mt-1">
                    <Clock size={12} /> {item.time}
                  </span>
                </div>
                <div className="text-xl font-bold text-[#D4A574]">{item.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>O Que Dizem</h2>
            <div className="w-16 h-1 bg-[#D4A574] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Roberto M.", text: "Melhor degradê que já fiz. Atendimento espetacular e ambiente muito top, cerveja gelada." },
              { name: "Lucas S.", text: "A barboterapia é uma experiência que todo homem deveria ter. Excelente profissional!" },
              { name: "Carlos D.", text: "Corto o cabelo aqui faz 2 anos, nunca decepciona. Sistema de agendamento é super prático." }
            ].map((review, i) => (
              <div key={i} className="bg-[#1A1A1A] p-8 rounded-xl border border-white/5">
                <div className="flex gap-1 text-[#D4A574] mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic mb-6">"{review.text}"</p>
                <p className="font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="bg-black py-16 px-6 border-t border-[#D4A574]/20">
        <div className="container max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <Scissors className="w-8 h-8 text-[#D4A574] mx-auto md:mx-0 mb-4" />
            <h3 className="text-xl font-bold mb-2">Don Carlos</h3>
            <p className="text-white/50 text-sm">A barbearia que entende o seu estilo.</p>
          </div>
          <div>
            <h4 className="text-[#D4A574] font-bold uppercase tracking-wider mb-4 flex items-center justify-center md:justify-start gap-2">
              <Clock size={16} /> Horários
            </h4>
            <p className="text-white/70">Segunda a Sábado</p>
            <p className="font-bold">09:00 - 20:00</p>
            <p className="text-white/70 mt-2">Domingo</p>
            <p className="font-bold text-red-400">Fechado</p>
          </div>
          <div>
            <h4 className="text-[#D4A574] font-bold uppercase tracking-wider mb-4 flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} /> Localização
            </h4>
            <p className="text-white/70">Rua Exemplo, 123</p>
            <p className="text-white/70">Centro, São Carlos - SP</p>
            <Button variant="outline" className="mt-4 border-[#D4A574]/30 text-[#D4A574] hover:bg-[#D4A574] hover:text-black w-full md:w-auto">
              Como Chegar
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
