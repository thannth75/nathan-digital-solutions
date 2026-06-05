"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Phone, ArrowLeft, Clock, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const menu = [
  { name: "Pão Francês Quentinho", price: "R$ 0,80", tag: "Fornada a cada 2h" },
  { name: "Pão de Queijo Mineiro", price: "R$ 3,00", tag: "Mais vendido" },
  { name: "Croissant Tradicional", price: "R$ 8,00", tag: "Manteiga francesa" },
  { name: "Bolo Caseiro (Fatia)", price: "R$ 7,00", tag: "Fubá, Cenoura, Laranja" },
  { name: "Café Espresso", price: "R$ 5,00", tag: "Grãos 100% Arábica" },
  { name: "Cappuccino Especial", price: "R$ 9,00", tag: "Com raspas de chocolate" },
  { name: "Pão Integral Rústico", price: "R$ 12,00", tag: "Fermentação natural" },
  { name: "Broa de Milho", price: "R$ 10,00", tag: "Receita da avó" },
];

export default function PadariaDemo() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#2A1F1A] text-[#F3E8E0]">
      {/* Voltar para Demos */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/demos">
          <Button variant="outline" className="bg-black/50 backdrop-blur-md border-[#FBBF24]/30 text-white/70 hover:text-white rounded-full p-3 h-auto">
            <ArrowLeft size={20} />
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b-8 border-[#FBBF24]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        
        <div className="container relative z-10 max-w-4xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#FBBF24] text-[#2A1F1A] p-4 rounded-full inline-block mb-8 shadow-xl">
              <Coffee size={40} strokeWidth={2} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-[#FBBF24]" style={{ fontFamily: "serif" }}>
              Padaria Artesanal
            </h1>
            <p className="text-xl text-[#F3E8E0]/80 max-w-2xl mx-auto mb-10 italic">
              Desde 1998 servindo pão quente, café fresco e as melhores memórias para a sua família.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#FBBF24] hover:bg-[#dca41b] text-[#2A1F1A] font-bold px-8 py-6 text-lg rounded-xl flex items-center gap-2">
                <ShoppingBag /> Pedir Delivery
              </Button>
              <Button variant="outline" className="border-[#F3E8E0]/20 text-[#F3E8E0] hover:bg-[#F3E8E0]/10 px-8 py-6 text-lg rounded-xl">
                Ver Cardápio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre nós */}
      <section className="py-20 px-6 bg-[#3A2C24]">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-[#2A1F1A] rounded-3xl border-4 border-[#FBBF24]/20 relative overflow-hidden flex items-center justify-center">
              <span className="text-[#FBBF24]/50 font-serif italic text-2xl">Foto da Fachada</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#FBBF24] font-serif">Nossa História</h2>
              <p className="text-lg leading-relaxed text-[#F3E8E0]/80">
                Tudo começou com as receitas da Vó Maria. Há mais de 20 anos, acordamos todos os dias às 4 da manhã para garantir que o seu café da manhã seja sempre especial.
              </p>
              <p className="text-lg leading-relaxed text-[#F3E8E0]/80">
                Nossos pães de fermentação natural levam até 48 horas para ficarem prontos. Acreditamos que coisas boas levam tempo, e você pode sentir essa dedicação em cada mordida.
              </p>
              <div className="pt-4 flex gap-8 border-t border-[#F3E8E0]/10">
                <div>
                  <p className="text-3xl font-black text-[#FBBF24]">20+</p>
                  <p className="text-sm text-[#F3E8E0]/60">Anos de Tradição</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#FBBF24]">50+</p>
                  <p className="text-sm text-[#F3E8E0]/60">Tipos de Pães</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section className="py-24 px-6 relative">
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBBF24] opacity-5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-[#FBBF24]">Cardápio Diário</h2>
            <p className="text-[#F3E8E0]/60">Os queridinhos da nossa vitrine.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {menu.map((item, index) => (
              <div key={index} className="flex justify-between items-end border-b-2 border-[#3A2C24] pb-4 border-dashed">
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <span className="text-xs bg-[#FBBF24]/20 text-[#FBBF24] px-2 py-1 rounded">{item.tag}</span>
                </div>
                <div className="text-2xl font-bold text-[#FBBF24] whitespace-nowrap ml-4">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info footer */}
      <section className="py-16 px-6 bg-[#FBBF24] text-[#2A1F1A]">
        <div className="container max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <Clock size={32} />
            <div>
              <p className="font-bold text-lg">Horário de Funcionamento</p>
              <p>Segunda a Domingo: 06h às 20h</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={32} />
            <div>
              <p className="font-bold text-lg">Localização</p>
              <p>Rua do Pão Quente, 42 - São Carlos</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={32} />
            <div>
              <p className="font-bold text-lg">Delivery & Encomendas</p>
              <p>(16) 99999-9999</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
