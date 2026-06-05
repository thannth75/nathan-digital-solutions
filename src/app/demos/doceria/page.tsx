"use client";

import { motion } from "framer-motion";
import { Cake, Heart, Star, Gift, Clock, Instagram, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const products = [
  { name: "Brigadeiros Gourmet", price: "R$ 4", desc: "Unidade. Sabores: Tradicional, Ninho c/ Nutella, Churros" },
  { name: "Trufas Artesanais", price: "R$ 6", desc: "Chocolate belga recheado com cremes artesanais" },
  { name: "Bolos Decorados", price: "a partir de R$ 120", desc: "Bolos de festa com decorações personalizadas" },
  { name: "Docinhos para Festa", price: "R$ 180", desc: "O cento. Sortidos a sua escolha" },
  { name: "Tortas Especiais", price: "R$ 90", desc: "Aro 20cm. Limão, Morango, Holandesa" },
  { name: "Kit Presente", price: "R$ 85", desc: "Caixa luxo com 20 brigadeiros variados" },
];

export default function DoceriaDemo() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1F1118] text-white">
      {/* Voltar para Demos */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/demos">
          <Button variant="outline" className="bg-black/50 backdrop-blur-md border-[#F472B6]/30 text-white/70 hover:text-white rounded-full p-3 h-auto">
            <ArrowLeft size={20} />
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F1118]" />
        
        <div className="container relative z-10 max-w-5xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-[#F472B6]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cake className="w-10 h-10 text-[#F472B6]" />
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Doce Encanto
            </h1>
            <p className="text-[#F472B6] tracking-widest uppercase text-sm font-bold mb-8">
              Confeitaria Artesanal
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Transformando açúcar e amor em momentos inesquecíveis. 
              Doces finos, bolos decorados e kits presente para sua celebração.
            </p>
            
            <Button className="bg-[#F472B6] hover:bg-[#db66a3] text-white font-bold px-10 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(244,114,182,0.4)]">
              FAZER ENCOMENDA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-6 bg-[#2B1721]">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Heart />, title: "1. Escolha com Amor", desc: "Navegue pelo nosso cardápio recheado de opções deliciosas." },
              { icon: <Clock />, title: "2. Encomende Cedo", desc: "Faça seu pedido com pelo menos 48h de antecedência." },
              { icon: <Gift />, title: "3. Receba a Magia", desc: "Entregamos no seu evento ou você retira em nosso ateliê." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#1F1118] border border-[#F472B6]/30 flex items-center justify-center text-[#F472B6] mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-24 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Nosso Cardápio</h2>
            <div className="w-16 h-1 bg-[#F472B6] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2B1721] p-6 rounded-3xl border border-[#F472B6]/10 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#F472B6]">{item.name}</h3>
                  <span className="font-bold bg-[#1F1118] px-3 py-1 rounded-full text-sm">{item.price}</span>
                </div>
                <p className="text-white/60 text-sm mb-4">{item.desc}</p>
                <button className="text-[#F472B6] text-sm font-bold flex items-center gap-1 hover:underline">
                  <ShoppingBag size={14} /> Adicionar ao Pedido
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / Galeria */}
      <section className="py-24 px-6 bg-[#2B1721]">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                <Instagram className="text-[#F472B6]" /> Siga no Instagram
              </h2>
              <p className="text-white/60">@doceencanto.artesanal</p>
            </div>
            <Button variant="outline" className="border-[#F472B6]/50 text-[#F472B6] hover:bg-[#F472B6] hover:text-white rounded-full">
              Ver mais fotos
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-[#1F1118] rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity">
                  <Heart className="text-white fill-[#F472B6]" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
