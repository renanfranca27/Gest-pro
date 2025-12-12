"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full min-h-screen overflow-hidden">


      {/* Elipse gigante de fundo (Tailwind puro) */}
      <div className="absolute rounded-full bg-[#00218F] w-[6151px] h-[4105px] -top-[3016px] -left-[2976px]"></div>

{/**                      
 * 
 * 
 * 

 <div className="absolute inset-0 bg-gradient-to-r  from-blue-900 to-blue-700"></div>


 <div
   className="
   absolute 
   bottom-[-200px] 
   right-[-200px] 
   w-[700px] 
   h-[700px] 
   bg-white 
   rounded-full
 "
 ></div>
 /}

      {/* NAVBAR */}
      <nav className="fixed w-full z-20 top-3 start-0">
  <div className="mx-auto h-20 px-4 flex items-center justify-around flex-wrap">

    {/* LOGO */}
    <div className="flex items-center gap-2 w-100">
      <Image src="/logo.svg" alt="logo" width={130} height={100} />
    </div>

    {/* AÇÕES DESKTOP */}
    <div className="hidden md:flex items-center gap-4 md:order-2">
      <section className="flex gap-8">
        {/* ENTRAR */}
        <button
          className="text-white bg-transparent border border-white/60 
                     hover:bg-white/10 duration-200
                     font-bevietnampro font-medium rounded-lg text-sm px-5 py-3 w-30"
        >
          Entrar
        </button>

        {/* CRIAR CONTA */}
        <button
          className="bg-white text-purple-600 font-bevietnampro font-medium 
                     rounded-lg text-sm px-5 py-2 
                     hover:bg-gray-100 duration-200 w-40"
        >
          Criar Conta
        </button>
      </section>
    </div>

    {/* BOTÃO MOBILE */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 duration-200"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* MENU DESKTOP */}
    <div className="hidden md:flex md:order-1 text-lg flex-wrap">
      <ul className="flex items-center gap-15 text-white text-16" >
        <li><a href="#" className="hover:text-white duration-200">Início</a></li>
        <li><a href="#" className="hover:text-white duration-200">Recursos</a></li>
        <li><a href="#" className="hover:text-white duration-200">Segmentos</a></li>
        <li><a href="#" className="hover:text-white duration-200">Benefícios</a></li>
        <li><a href="#" className="hover:text-white duration-200">Preços</a></li>
      </ul>
    </div>
  </div>

  {/* MOBILE MENU */}
  {open && (
    <div className="md:hidden bg-blue-800/60 backdrop-blur-sm border-t border-white/10 px-6 pb-5 pt-2 rounded-lg">
      <ul className="flex flex-col gap-6 text-white/90 font-bevietnampro">
        <li><a href="#" className="hover:text-white">Início</a></li>
        <li><a href="#" className="hover:text-white">Recursos</a></li>
        <li><a href="#" className="hover:text-white">Segmentos</a></li>
        <li><a href="#" className="hover:text-white">Benefícios</a></li>
        <li><a href="#" className="hover:text-white">Preços</a></li>
      </ul>

      {/* BOTÕES MOBILE */}
      <div className="flex flex-col gap-4 mt-6">
        <button
          className="text-white bg-transparent border border-white/60 
                     hover:bg-white/10 duration-200
                     font-bevietnampro font-medium rounded-lg text-sm px-5 py-3"
        >
          Entrar
        </button>

        <button
          className="bg-white text-purple-600 font-bevietnampro font-medium 
                     rounded-lg text-sm px-5 py-3 hover:bg-gray-100 duration-200"
        >
          Criar Conta
        </button>
      </div>
    </div>
  )}
</nav>
<a href=""></a>
      <div id="conteudo" className="relative z-20 flex gap-4 flex-col items-center justify-center text-center pt-60 px-6">
            
          <section>
            <h2 className="text-white font-bevietnampro font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Gerencie Seu <a href="" className=" text-[#37E2D5] after:content-['_✔']  underline underline-offset-8">Negócio</a> <br/> Com Inteligência
            </h2>
          </section>
          <section>
            <p className="text-white font-bevietnampro text-lg md:text-xl mb-8 p-8  tracking-wider leading-relaxed">
             O Gest Pro é a solução completa para pequenos e médios comércios.
              <br/>PDV, CRM, estoque, financeiro e fiscal em uma única plataforma.
            </p>
          </section>


            {/* BOTÕES Demo E  Começar Grátis */}
            <div id="botao-demo" className="flex flex-col md:flex-row gap-8 justify-center">

        <button
          className="bg-white text-purple-600 font-bevietnampro font-medium 
                     rounded-lg text-sm px-5 py-3 hover:bg-gray-100 duration-200 w-50"
        >
          Começar Grátis
        </button>

               <button
          className="text-white bg-transparent border border-white/60 
                     hover:bg-white/10 duration-200
                     font-bevietnampro font-medium rounded-lg text-sm px-8 py-4 w-40"
        >
          Ver Demo
        </button>
            </div>


      </div>
      <div className=" relative z-1 flex justify-content-center items-center mt-10 gap-1 ">
        <Image src="/desh.svg" alt="dest" width={599} height={777} />
        <Image src="/desh2.svg" alt="decoracao" width={599} height={777}/>

      </div>
    </header>
  );
}
