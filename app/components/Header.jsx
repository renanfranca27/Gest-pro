import React from 'react';


export default function Header() {
  return (
    <header className="relative w-full min-h-screen overflow-hidden">

      {/* Fundo azul com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B399B] via-[#1B399B] to-[#0044C4]"></div>

      {/* BOLA / CURVA BRANCA (igual à imagem) */}
      <div className="
        absolute 
        bottom-[-200px] 
        right-[-200px] 
        w-[700px] 
        h-[700px] 
        bg-white 
        rounded-full
      "></div>

      {/* Corte branco diagonal */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-white -skew-y-6 origin-bottom"></div> 
      {/* Conteúdo do header */}
      <nav className="relative z-10 flex items-center justify-between px-5 py-6 text-white">
        <div className="logo text-xl font-bold">LOGO</div>

        <ul className="nav-links flex gap-10 font-medium">
          <li><a href="#">Início</a></li>
          <li><a href="#">Recursos</a></li>
          <li><a href="#">Segmentos</a></li>
          <li><a href="#">  Benefícios</a></li>
          <li><a href="#">Preços</a></li>
        </ul>



        <div className="buttons flex gap-4">
      <section>
          <button className="bg-white text-[#1B399B] px-4 py-2  font-semibold hover:bg-gray-200 transition rounded-sm ">
            Entrar
          </button>
        </section>


        <section>
          <button className="bg-white text-[#1B399B] px-4 py-2  font-semibold hover:bg-gray-200 transition rounded-sm ">
            Criar Conta
          </button>
        </section>

        </div>

      </nav>

    </header>
  );
}

