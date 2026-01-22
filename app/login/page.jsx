"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



const notificationMethods = [
  { id: 'ativo-conta', title: 'Manter conectado' },
]

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
      <div className=" flex gap-30 justify-center ">
       <Image
    src="/casa-login.svg"
    alt="casa-login"
    width={750}
    height={450}
    
  />
          { /* FORMULÁRIO DE LOGIN */   }
        <div className="   flex flex-col bg-white p-10 rounded-3xl max-w-md text-black  shadow-xl/30 w-[30vw] "  > 

              <Image
      src="/nova-logo.svg"
      alt="logo-login"
      width={300}
      height={60}
    />
        <senction className=" text-center my-1 ">
          <h1 className=" text-4xl font-bold leading-9 tracking-tight text-gray-900"> Entrar</h1>
            <p className="font-light">Acesse o painel de gestão do Gest Pro</p>
        </senction>
        { /* FORMULÁRIO */ }
            <form action="" method="post">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        E-mail
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>

        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Senha
      </label>
      <div className="mt-4">
        <input
          type="password"
          name="password"
          id="password"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="********"
        />
      </div>

      {/* RADIO BUTTONS */}
     <div className=" flex  justify-between items-center ">
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === 'ativo-conta'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
              <section className="mt-4">
                <a href="esqueceu?" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Esqueceu?
                </a>
              </section>
    </div>

      <div className="mt-6">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer h-12 text-center items-center"
        >
          Entrar no Sistema
        </button>
      </div>
          </form>

        </div>
      </div>
 </div>
  </main>

</body>


    )
}