"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
 const router = useRouter();
    return (
    <>
        {/* FUNDO */}
        <div className="fixed left-0 top-0 h-screen w-1/3 bg-[#1E40AF] -z-10">  

            <header className="fixed left-0 top-0 w-full p-4 flex flex-col  z-10">
                <div className=" fixed flex flex-col ">
              <Image
                src="/nova-logo.svg"
                alt="logo"
                width={360}
                height={100}
                
              />
              <section className="  p-5">

                <h2 className="text-white font-bold font-bevietnam text-4xl">
                    Gestão profissional para o seu <br /> negócio.
                </h2 >
                <p className="p-5 font-light font-bevietnam text-2xl">junte-se a centenas de empresas que usam o <br /> GestPro para vender mais e gerenciar melhor.</p>
              </section>


                </div>
            </header>





          </div>
        


        </>
  );      
}   