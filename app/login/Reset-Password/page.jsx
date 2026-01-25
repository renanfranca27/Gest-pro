"use client";
import React, { useState } from "react";                
import Image from "next/image"; 

export default function ForgotPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
return(
   <>
     <div className="fixed inset-0 -z-10">
        <div className="h-1/2 bg-[#1E40AF]" />
        <div className="h-1/2 bg-white" />
      </div>
   <main className=" w-full  flex items-center justify-center px-2 sm:px-6 lg:px-8 min-h-screen relative z-10 ">
    
                <div
  className="
    w-full
    sm:max-w-md
    lg:max-w-lg
    lg:w-1/2
    bg-white
    p-6 sm:p-8
    rounded-3xl
    shadow-2xl
    text-black
    flex
    items-center
    justify-center
  "
>
  {/* WRAPPER INTERNO */}
  <div className="flex flex-col items-center mb-4 -mt-15 gap-2">

{/* TÍTULO  e LOGO*/}

<section className="flex flex-col items-center ">


  <Image
    src="/nova-logo.svg"
    alt="logo-login"
    width={380}
    height={60}
  />

<div className=" flex flex-col text-center -mt-10">

  <h2 className=" text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight ">
   Redefinir Senha
  </h2>
 


</div>
</section>

    {/* FORM */}
    <form className="w-full flex flex-col gap-4 sm:mt-3 mb-2 p-3">

      {/* EMAIL */}
      <div> 
        <label className="block text-xs font-medium text-gray-900 mb-1.5">
        Nova Senha
        </label>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua nova senha"
            className="
              bg-[#F1F3F6]
              w-full
              rounded-lg
              text-xs sm:text-sm
              py-2 sm:py-2.5
              pl-3 sm:pl-4
              pr-9 sm:pr-10
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              transition
              font-light
             
            "
          />
           <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-600 p-2.5 rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
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
        {/* Confirmar Senha */}
      <div>
        <label className="block text-xs font-medium text-gray-900 mb-1.5">
          Confirmar Senha
        </label>
        <div className="relative">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua nova senha"
            className="
              bg-[#F1F3F6]
              w-full
              rounded-lg
              text-xs sm:text-sm
              py-2 sm:py-3
              pl-3 sm:pl-4
              pr-9 sm:pr-10
              outline-none
              focus:ring-2
              focus:ring-indigo-500
              transition
              font-light
            "
          />
          <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-600 p-2.5 rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
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
          {/* BOTÃO */}
      <button
        type="submit"
        className="
          w-full
          h-9 sm:h-10
          bg-indigo-600
          text-white
          font-semibold
          text-xs sm:text-sm
          rounded-lg
          hover:bg-indigo-500
          transition
          mt-2
        "
      >
        Redefinir Senha
      </button>
    {/* CADASTRO */}
    
    </form>


  </div>
  </div>
   </main>
   
   
   
   
   </> 
     
); }