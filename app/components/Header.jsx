"use client";

import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full min-h-screen overflow-hidden  bg-cestpro relative overflow-hidden">
{/**                      
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
        <div className=" mx-auto h-20 px-4 flex items-center justify-around">

          {/* LOGO */}
          <div className="flex items-center gap-2 w-100">
            <img src="/logo.svg" alt="logo" />
          </div>

          {/* AÇÕES (desktop) */}
          <div className="flex items-center gap-4 md:order-2">


            {/* ENTRAR E CRIAR CONTA  botão*/}
              < section className="flex gap-8 flex justify-content-between">
              
            <button
              className="text-white bg-transparent border border-white/60 
                         hover:bg-white/10 duration-200
                      font-bevietnampro font-medium rounded-lg text-sm px-5 py-3 w-30 "
            >
              Entrar
            </button>

            {/* CRIAR CONTA */}
            <button
              className="bg-white text-purple-600 font-bevietnampro font-medium 
                         rounded-lg text-sm px-5 py-2 
                         hover:bg-gray-100 duration-200 w-40 "
            >
              Criar Conta
            </button>
              
              
              
              </section>
            {/* ENTRAR */}

            {/* BOTÃO MOBILE  */}
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
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex md:order-1 text-lg ">
            <ul className="flex items-center gap-10 text-white text-16">
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
          <div className="md:hidden bg-blue-800/60 backdrop-blur-sm border-t border-white/10 px-6 pb-5 pt-2">
            <ul className="flex flex-col gap-4 text-white/90 font-medium">
              <li><a href="#" className="hover:text-white">Início</a></li>
              <li><a href="#" className="hover:text-white">Recursos</a></li>
              <li><a href="#" className="hover:text-white">Segmentos</a></li>
              <li><a href="#" className="hover:text-white">Benefícios</a></li>
              <li><a href="#" className="hover:text-white">Preços</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
