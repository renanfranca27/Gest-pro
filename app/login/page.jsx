"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* FUNDO */}
      <div className="fixed inset-0 -z-10">
        <div className="h-1/2 bg-[#1E40AF]" />
        <div className="h-1/2 bg-white" />
      </div>

      {/* CONTEÚDO */}
      <main className="relative z-10 min-h-screen px-14 pt-7">

        {/* TOPO */}
        <section className="flex items-center gap-2 hover:underline cursor-pointer w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <a className="font-light mt-1">VOLTAR</a>
        </section>

        {/* TEXTO */}
        <section className="mt-6 mb-12">
          <h1 className="font-bold text-[50px]">Seja Bem Vindo!</h1>
          <p className="font-light text-xl">
            A plataforma completa para gestão <br />
            inteligente do seu negócio.
          </p>
        </section>

        {/* CONTEÚDO CENTRAL */}
        <section className=" absolute flex justify-center gap-40 items-center">

          {/* IMAGEM */}
          <Image
            src="/casa-login.svg"
            alt="casa-login"
            width={850}
            height={550}
            priority
          />

          {/* FORMULÁRIO */}
          <div className="flex flex-col bg-white p-10 rounded-3xl shadow-2xl text-black w-[26vw] h-[70vh] ">

            {/* LOGO */}
            <div className=" flex flex-col justify-center items-center ">

            
              <Image
                src="/nova-logo.svg"
                alt="logo-login"
                width={400}
                height={70}
              />
            

            {/* TÍTULO */}
         <section className="text-center mb-5 space-y-2">
  <h2 className="text-4xl font-bold text-gray-900">Entrar</h2>
  <p className="font-light text-gray-500">
    Acesse o painel de gestão do Gest Pro
  </p>
</section>


            </div>

            {/* FORM */}
            <form className="space-y-4">

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  E-mail
                </label>
                <div className="relative mt-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    className=" bg-[#F1F3F6] w-full rounded-md py-3 pl-4 pr-12 ring-1focus:ring-2 focus:ring-indigo-500 transition font-light"
                  />
                 <span className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 p-3 rounded-md text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
</span>

                </div>
              </div>

              {/* SENHA */}
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Senha
                </label>
                <div className="relative mt-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    className=" bg-[#F1F3F6] w-full rounded-md py-3 pl-4 pr-12 ring-1focus:ring-2 focus:ring-indigo-500 transition font-light"
                  />
                 <span className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 p-3 rounded-md text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
</span>

                </div>
              </div>

              {/* OPÇÕES */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 font-light">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 cursor-pointer font-light"
                  />
                  Manter conectado
                </label>

                <a className="text-sm font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Esqueceu?
                </a>
              </div>

              {/* BOTÃO */}
              <button
                type="submit"
                className="w-full h-12 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition cursor-pointer"
              >
                Entrar no Sistema
              </button>
            </form>

            {/* CADASTRO */}


            <p className="mt-6 text-center text-sm text-gray-500 font-light">
              Não tem uma conta?{" "}
              <a className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Faça seu cadastro
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
