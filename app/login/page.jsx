"use client";
import React, { useState } from "react";
export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
    return(
 <body >

  {/* FUNDO */}
  <div className="fixed inset-0 flex flex-col -z-10">
    <div className="h-1/2 bg-blue-600"></div>
    <div className="h-1/2 bg-white"></div>
  </div>

  {/* CONTEÚDO */}
  <main className="relative z-10 ">
    {/* todo o conteúdo do site aqui */}

 <div className=" mt-14 flex flex-col gap-10 px-14 ">

      <a className=" font-light" href="#">VOLTAR</a>
      <section className=" mt-4 ">
        <h1 className="font-bold text-lg text-[40px] " >Seja Bem Vindo!</h1>
        <p className="font-light">A plataforma completa para gestão <br /> inteligente do seu negócio.</p>
      </section>
 </div>
  </main>

</body>


    )
}