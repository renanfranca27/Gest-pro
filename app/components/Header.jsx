"use client";
import Image from "next/image";
import React, { useState } from "react";
import menu from "../config/menu";


export default function Header() {
  
  const [open, setOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
const [modalContent, setModalContent] = useState(null);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };


  return (
    <header className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">

    {/* ELIPSE AZUL */}
<div
  className="
    absolute
    rounded-full
    bg-[#00218F]
    w-[210vw]
    h-[195vh]
    -top-[95vh]
    -left-[90vw]
  "
/>

{/* LUZ ESQUERDA */}
<div
  className="
    pointer-events-none
    absolute
    top-[-20%]
    left-[-30%]
    h-full
    w-[500px]
    md:w-[800px]
    rounded-full
    bg-gradient-to-r
    from-white/10
    via-white/5
    md:from-white/40
    md:via-white/20
    to-transparent
    blur-3xl
    z-10
  "
/>

{/* LUZ DIREITA */}
<div
  className="
    pointer-events-none
    absolute
    top-[-20%]
    right-[-30%]
    h-full
    w-[500px]
    md:w-[800px]
    rounded-full
    bg-gradient-to-l
    from-white/10
    via-white/5
    md:from-white/40
    md:via-white/20
    to-transparent
    blur-3xl
    z-10
  "
/>

{/* NAVBAR */}
<nav className="h-20 w-full z-20">
  <div className="mx-auto px-6">
    <div className="flex justify-around items-center h-20">

      {/* LOGO */}
      <div className="flex items-center">
        <Image src="/nova-logo.svg" alt="logo" width={130} height={100} />
      </div>

      {/* MENU */}
      <ul className="hidden md:flex gap-10 text-white font-bevietnam text-[17px]">
        {menu.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleScroll(item.id); }}
              className="hover:opacity-75 transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* AÇÕES */}
      <div className="hidden md:flex gap-4">
        <button className="h-[46px] px-[45px] rounded-lg border border-white/60 text-white hover:bg-white/10 transition">
          Entrar
        </button>
        <button className="h-[50px] px-[52px] rounded-lg bg-white text-purple-600 hover:bg-gray-100 transition">
          Criar Conta
        </button>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-white text-2xl">
          ☰
        </button>
      </div>

    </div>
  </div>

    {open && (
    <div className="md:hidden mx-4 bg-blue-900/95 rounded-xl p-3 z-30">
      <ul className="flex flex-col gap-3 text-white font-bevietnam text-sm">
        {menu.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleScroll(item.id)}
              className="text-left w-full"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col mt-4 gap-3">
        <button className="border border-white/60 text-white py-2 rounded-lg text-sm">
          Entrar
        </button>
        <button className="bg-white text-purple-600 py-3 rounded-lg text-sm font-medium">
          Criar Conta
        </button>
      </div>
    </div>
  )}
</nav>

{/* HERO */}
<div id="inicio" className="relative z-10 text-center pt-10 px-4 max-w-4xl mx-auto">
  <h1 className="text-white font-bold text-3xl md:text-6xl lg:text-7xl leading-tight font-bevietnam">
    Gerencie Seu <span className="text-[#37E2D5]">Negócio</span>
    <br />Com Inteligência
  </h1>

  <p className="mt-4 text-white/90 text-base md:text-xl font-bevietnam">
    O Gest Pro é a solução completa para pequenos e médios comércios.
    <br />
    PDV, CRM, estoque, financeiro e fiscal em uma única plataforma.
  </p>

  <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg text-sm md:text-base font-medium">
      Começar Grátis
    </button>
    <button className="border border-white/60 text-white px-12 py-3 rounded-lg text-sm md:text-base">
      Ver Demo
    </button>
  </div>
</div>

{/* DASHBOARD */}
<div id="segmentos" className="relative z-20 mt-16">
  <Image
    src="/desh.png"
    alt="Dashboard"
    width={1000}
    height={700}
    className="w-full max-w-5xl mx-auto"
  />
</div>

      <main id="recursos" className="bg-white relative z-20 mt-24 py-20 px-4">
  {/* TÍTULO */}
  <div className="max-w-4xl mx-auto text-center mb-14">
    <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold font-bevietnam text-black">
      Nossa Solução Para O Seu Negócio
    </h2>
    <p className="mt-4 text-[#969696] text-base sm:text-lg font-bevietnam">
      Tudo o que você precisa para gerenciar, vender e crescer em uma única
      plataforma intuitiva
    </p>
  </div>

  {/* GRID DE CARDS */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* CARD */}
    {[
      {
        title: "PDV Frente de Caixa",
        desc: "Venda rápido e sem travar. Totalmente online.",
        icon: "/PDV.svg",
        modalText:"Nosso PDV é projetado para velocidade e estabilidade. Realize vendas em segundos, com suporte e leitores de código de barras, balanças e impressoras térmicas. ",
      },
      {
        title: "Controle de Estoque",
        desc: "Saiba exatamente o que tem na prateleira.",
        icon: "/controle-Estoque.svg",
        modalText:"Tenha visão total do seu inventário. Acompanhe entradas e saídas em tempo real, defina estoques mínimos para alertas automáticos de reposição e gerencie múltiplos depósitos. Evite perdas e rupturas com relatórios precisos de giro de estoque.",
      },
      {
        title: "Emissão Fiscal",
        desc: "NFC-e e SAT simples para o dia a dia.",
        icon: "/emissao.svg",
        modalText:"Simplifique sua contabilidade. Emita NFC-e (Cupom Fiscal Eletrônico), NF-e (Nota Grande) e SAT com facilidade. O sistema calcula automaticamente os impostos e gera arquivos XML para seu computador.",
      },
      {
        title: "Gestão Financeira",
        desc: "Contas a pagar, receber e fluxo de caixa.",
        icon: "/gestao-financeira.svg",
        modalText:"Controle cada centavo. Acompanhe seu fluxo de caixa diário, contas a pagar e receber. Saiba exatamente qual é o lucro da sua operação e onde você pode otimizar custos.",
      },
      {
        title: "Gestão de Vendedores",
        desc: "Defina comissões e acompanhe as vendas.",
        icon: "/gestao-vendas.svg",
        modalText:"Gerencie seu time com eficiência. Crie perfis de acesso com permissões personalizadas, controle comissões de vendedores automaticamente e acompanhe o desenvolvimento individual de cada colaborador através de metas e indicadores.",
      },
      {
        title: "Relatórios Fáceis",
        desc: "Saiba quando vendeu e qual seu lucro no dia.",
        icon: "/relatorio-facil.svg",
        modalText:"Tome decisões baseadas em dados. Acesse dashboards intuitivos com curva ABC de produtos, ticket médio, horários de pico, ranking de clientes e lucratividade por categoria. Exporte tudo para o Excel ou PDF com um clique.   ",
      },
    ].map((card) => (
      <div
        key={card.title}
        className="
          bg-white
          rounded-2xl
          p-8
          shadow-xl/30
          inset-shadow-sm
          flex
          flex-col
          justify-between
          hover:-translate-y-1
          hover:shadow-2xl
          transition
        "
      >
        <div>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={card.icon}
              alt={card.title}
              width={56}
              height={56}
            />
            <h3 className="text-lg sm:text-xl font-bold font-bevietnam text-black">
              {card.title}
            </h3>
          </div>

          <p className="text-[#4B4B4B] text-base font-bevietnam">
            {card.desc}
          </p>
        </div>

       <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setModalContent(card);
    setModalOpen(true);
  }}
  className="mt-6 text-[#00218F] font-bevietnam font-medium hover:underline"
>
  Saiba Mais
</a>
      </div>
    ))}
  </div>
</main>


{modalOpen && modalContent && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
    
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setModalOpen(false)}
    />

    {/* Modal */}
    <div
      className="
        relative
        w-full
        max-w-[534px]
        h-[530px]
        bg-white
        rounded-[40px]
        shadow-2xl
        z-10
        flex
        flex-col
        overflow-hidden
      "
    >
      
      {/* Botão fechar */}
      <button
        onClick={() => setModalOpen(false)}
        className="absolute top-6 right-6 text-black hover:text-gray-600 text-2xl"
      >
        ✕
      </button>

      {/* Header */}
      <div className="px-10 pt-10">
        <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-6">
          <Image
            src={modalContent.icon}
            alt={modalContent.title}
            width={65}
            height={30}
          />
        </div>

        <h2 className="text-[28px] font-bold font-bevietnam text-black">
          {modalContent.title}
        </h2>
      </div>

      {/* Conteúdo (responsivo + quebra) */}
      <div className="flex-1 px-10 mt-4 overflow-y-auto">
        <p
          className="
            text-[#667085]
            text-[18px]
            leading-[28px]
            font-bevietnam
            break-words
          "
        >
          {modalContent.modalText}
        </p>
      </div>

      {/* Footer */}
      <div className="px-10 pb-10 flex  justify-end items-center gap-10">
        <button
          onClick={() => setModalOpen(false)}
          className="text-[#667085] text-sm font-bevietnam hover:text-black cursor-pointer"
        >
          Fechar
        </button>

        <button
          className="
            bg-[#1E40AF]
            hover:bg-[#1E3A8A]
            text-white
            px-8
            py-4
            rounded-xl
            text-sm
            font-bevietnam 
            cursor-pointer
          "
        >
          Experimente Agora
        </button>
      </div>
    </div>
  </div>
)}




    </header>
  );
}
