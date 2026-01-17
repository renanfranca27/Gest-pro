"use client";
import React, { useState } from "react";
export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
    return(
 <body className="relative min-h-screen">

  {/* FUNDO */}
  <div className="fixed inset-0 flex flex-col -z-10">
    <div className="h-1/2 bg-blue-600"></div>
    <div className="h-1/2 bg-white"></div>
  </div>

  {/* CONTEÚDO */}
  <main className="relative z-10">
    {/* todo o conteúdo do site aqui */}

    <section>
        <a href=""> Voltar </a>
        <h1 className=" text-2xl font-bold">Seja Bem Vindo!</h1>
        <p>A plataforma completa para gestão <br /> inteligente do seu negócio. </p>
    </section>
  </main>

</body>


    )
}