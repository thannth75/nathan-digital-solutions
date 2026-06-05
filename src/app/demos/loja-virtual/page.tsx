"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Package, Truck, Shield, Search, Menu, X, ArrowLeft, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const products = [
  { id: 1, name: "Fone Bluetooth Pro X", price: 199.90, oldPrice: 299.90, image: "bg-gradient-to-tr from-violet-500 to-fuchsia-500", rating: 4.8 },
  { id: 2, name: "Smartwatch Ultra", price: 449.00, oldPrice: 599.00, image: "bg-gradient-to-tr from-blue-500 to-cyan-500", rating: 5.0 },
  { id: 3, name: "Camiseta Tech Anti-Odor", price: 149.90, oldPrice: null, image: "bg-gradient-to-tr from-emerald-500 to-teal-500", rating: 4.5 },
  { id: 4, name: "Mochila Executiva 30L", price: 259.00, oldPrice: null, image: "bg-gradient-to-tr from-slate-600 to-slate-800", rating: 4.9 },
  { id: 5, name: "Tênis Runner Cloud", price: 329.90, oldPrice: 399.90, image: "bg-gradient-to-tr from-orange-400 to-rose-500", rating: 4.7 },
  { id: 6, name: "Óculos Polarizado UV", price: 189.00, oldPrice: null, image: "bg-gradient-to-tr from-yellow-400 to-amber-600", rating: 4.6 },
];

export default function LojaVirtualDemo() {
  const [cartCount, setCartCount] = useState(0);
  const [isAdded, setIsAdded] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setCartCount(prev => prev + 1);
    setIsAdded(id);
    setTimeout(() => setIsAdded(null), 1000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#050505] text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/demos">
              <Button variant="ghost" size="icon" className="text-white/50 hover:text-white" aria-label="Voltar">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <Link href="#" className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">N</div>
              NextGen<span className="text-violet-500">Store</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center bg-white/5 rounded-full px-4 py-2 w-96 border border-white/10 focus-within:border-violet-500/50 transition-colors">
            <Search size={16} className="text-white/40 mr-2" />
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              className="bg-transparent border-none focus:outline-none text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <ShoppingCart size={24} className="text-white/80 hover:text-white transition-colors" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-violet-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 hidden md:block" />
            <Menu className="md:hidden text-white/80" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 rounded-3xl p-8 md:p-16 border border-violet-500/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10 max-w-xl mb-10 md:mb-0">
              <span className="inline-block py-1 px-3 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 border border-violet-500/30">
                Lançamento
              </span>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
                O futuro do áudio <br />já chegou.
              </h1>
              <p className="text-white/60 text-lg mb-8">
                Experimente o novo Headphone Max com cancelamento de ruído ativo e 40h de bateria.
              </p>
              <Button className="bg-white text-black hover:bg-white/90 font-bold px-8 py-6 rounded-xl">
                COMPRAR AGORA
              </Button>
            </div>

            <div className="relative z-10 w-full max-w-sm aspect-square bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-2xl shadow-2xl shadow-violet-500/20 flex items-center justify-center -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer">
               <span className="font-bold text-white/50 text-2xl">Imagem do Produto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {["Ofertas", "Eletrônicos", "Moda", "Acessórios", "Casa Inteligente", "Esporte"].map((cat, i) => (
              <button key={i} className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-medium border transition-colors ${i === 0 ? 'bg-violet-600 border-violet-500 text-white' : 'bg-[#111] border-white/10 text-white/70 hover:bg-white/5 hover:text-white'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vitrine */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Destaques da Semana</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-4 hover:border-violet-500/30 transition-colors group">
                <div className={`w-full aspect-square ${product.image} rounded-xl mb-4 relative overflow-hidden flex items-center justify-center`}>
                  {product.oldPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </div>
                  )}
                  <span className="text-white/30 font-bold mix-blend-overlay">IMG</span>
                </div>
                
                <div className="mb-2">
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs text-white/60">{product.rating}</span>
                  </div>
                  <h3 className="font-medium text-white/90 truncate">{product.name}</h3>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div>
                    {product.oldPrice && <p className="text-xs text-white/40 line-through">R$ {product.oldPrice.toFixed(2)}</p>}
                    <p className="text-xl font-bold text-violet-400">R$ {product.price.toFixed(2)}</p>
                  </div>
                  
                  <Button 
                    onClick={() => handleAddToCart(product.id)}
                    className={`h-10 w-10 rounded-full p-0 flex items-center justify-center transition-all ${isAdded === product.id ? 'bg-green-500 hover:bg-green-600' : 'bg-white/10 hover:bg-violet-600 text-white'}`}
                  >
                    {isAdded === product.id ? <Check size={18} /> : <ShoppingCart size={18} />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Truck size={24} />, title: "Frete Grátis", desc: "Para compras acima de R$199" },
              { icon: <Package size={24} />, title: "Troca Fácil", desc: "Até 30 dias após o recebimento" },
              { icon: <Shield size={24} />, title: "Pagamento Seguro", desc: "Até 12x no cartão" },
              { icon: <Menu size={24} />, title: "Suporte 24/7", desc: "Atendimento humano" },
            ].map((feat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-violet-400">
                  {feat.icon}
                </div>
                <h4 className="font-bold mb-1">{feat.title}</h4>
                <p className="text-xs text-white/50">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
