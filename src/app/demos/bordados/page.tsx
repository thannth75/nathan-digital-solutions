"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Scissors, Check, MessageSquare, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const services = [
  { name: "Bordado em Camisetas", price: "R$ 25", desc: "Logos ou artes pequenas" },
  { name: "Bordado em Toalhas", price: "R$ 35", desc: "Nomes e monogramas" },
  { name: "Enxoval Personalizado", price: "a partir de R$ 200", desc: "Kits de bebê completos" },
  { name: "Bordado Corporativo", price: "Sob consulta", desc: "Uniformes para empresas" },
  { name: "Patch/Emblema", price: "R$ 15", desc: "Patches termocolantes" },
  { name: "Bordado em Boné", price: "R$ 20", desc: "Frente ou lateral" },
  { name: "Monograma", price: "R$ 30", desc: "Iniciais elegantes" },
  { name: "Bordado Artístico", price: "Sob consulta", desc: "Obras de arte em tecido" },
];

export default function BordadosDemo() {
  const [productType, setProductType] = useState("camiseta");
  const [quantity, setQuantity] = useState(1);
  const [complexity, setComplexity] = useState(1); // 1 = Simple, 2 = Medium, 3 = Complex

  // Budget Calculation Logic
  const calculateEstimate = () => {
    let basePrice = 0;
    if (productType === "camiseta") basePrice = 15;
    if (productType === "toalha") basePrice = 25;
    if (productType === "bone") basePrice = 10;
    if (productType === "jaleco") basePrice = 30;

    const complexityMultiplier = complexity === 1 ? 1 : complexity === 2 ? 1.5 : 2.5;
    
    // Volume discount
    let volumeDiscount = 1;
    if (quantity > 10) volumeDiscount = 0.9;
    if (quantity > 50) volumeDiscount = 0.8;

    return (basePrice * complexityMultiplier * quantity * volumeDiscount).toFixed(2);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F172A] text-slate-200">
      {/* Voltar para Demos */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/demos">
          <Button variant="outline" className="bg-slate-900/50 backdrop-blur-md border-blue-400/30 text-white/70 hover:text-white rounded-full p-3 h-auto">
            <ArrowLeft size={20} />
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        
        <div className="container relative z-10 max-w-5xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Palette className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">
              Bordados Premium
            </h1>
            <p className="text-blue-300 tracking-[0.2em] uppercase text-sm font-bold mb-8">
              Arte em cada ponto
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Transformamos tecido em arte. Enxovais exclusivos, uniformes corporativos e presentes personalizados com o mais alto padrão de qualidade e precisão.
            </p>
            
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              SOLICITAR ORÇAMENTO
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Simulador */}
      <section className="py-24 px-6 relative">
        <div className="container max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
            <h2 className="text-3xl font-bold mb-2 font-heading text-blue-400">Simulador de Orçamento</h2>
            <p className="text-slate-400 mb-8">Tenha uma estimativa na hora para o seu projeto.</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Tipo de Peça</label>
                  <select 
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="camiseta">Camiseta / Polo</option>
                    <option value="toalha">Toalha</option>
                    <option value="bone">Boné</option>
                    <option value="jaleco">Jaleco / Uniforme</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Quantidade: <span className="text-blue-400 font-bold">{quantity} uni.</span></label>
                  <input 
                    type="range" 
                    min="1" max="100" 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>1</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Complexidade da Arte</label>
                  <div className="flex gap-3">
                    {[
                      { val: 1, label: "Simples (Texto/Logo Básica)" },
                      { val: 2, label: "Média (Logo Detalhada)" },
                      { val: 3, label: "Complexa (Arte Cheia)" }
                    ].map((comp) => (
                      <button
                        key={comp.val}
                        onClick={() => setComplexity(comp.val)}
                        className={`flex-1 py-2 px-1 text-xs rounded border transition-colors ${
                          complexity === comp.val 
                            ? 'bg-blue-500/20 border-blue-500 text-blue-400' 
                            : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'
                        }`}
                      >
                        {comp.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 flex flex-col justify-center items-center text-center">
                <p className="text-slate-400 mb-2">Valor Estimado</p>
                <div className="text-5xl font-bold text-white mb-2">
                  <span className="text-2xl text-blue-400 align-top">R$</span> {calculateEstimate()}
                </div>
                <p className="text-xs text-slate-500 mb-8">*Valor aproximado. Sujeito a avaliação da arte.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar via WhatsApp <MessageSquare size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-heading">Como Funciona</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-0" />
            
            {[
              { title: "Briefing", desc: "Você nos envia a arte e a peça." },
              { title: "Digitalização", desc: "Transformamos a imagem em pontos." },
              { title: "Produção", desc: "Bordado nas máquinas industriais." },
              { title: "Entrega", desc: "Peça finalizada e embalada." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center bg-slate-900 px-4 py-6 md:w-1/4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500 text-blue-400 flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços List */}
      <section className="py-24 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-heading">Tabela de Serviços</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((item, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 flex justify-between items-center hover:border-blue-500/50 transition-colors">
                <div>
                  <h3 className="font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
                <div className="font-bold text-blue-400 whitespace-nowrap ml-4 bg-blue-500/10 px-3 py-1 rounded">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
