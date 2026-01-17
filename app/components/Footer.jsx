'use client';
import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import menu from '../config/menu';

export default function Footer() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.pageYOffset;
      const offset = 80; // ajuste se tiver header fixo
      window.scrollTo({ top: top - offset, behavior: 'smooth' });
    } else {
      console.warn('Elemento não encontrado:', id);
    }
  };
  return (
    <footer className="overflow-hidden ">
      {/* ================== SEÇÃO SEGMENTOS ================== */}
      <div className="bg-[#111827] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#0089ED] font-bold text-xl sm:text-2xl">Feito para o seu negócio</h2>

          <h1 id="segmentos" className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mt-3 mb-6">
            Soluções por Segmento
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto">
            O GestPro se adapta às necessidades específicas da sua empresa. Escolha o módulo ideal
            no momento do cadastro.
          </p>
        </div>

        {/* ================== CARDS ================== */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* CARD 1 */}
          <div className="group relative rounded-2xl bg-[#0E1B2A] border border-white/10 overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src="loja.svg"
                alt="Lojas e Varejo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                Lojas e Varejo
              </h3>
            </div>

            <div className="p-5 text-white flex flex-col flex-1">
              <p className="text-sm text-white/70 mb-4">
                Ideal para roupas, calçados, eletrônicos e bazar.
              </p>

              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Grade de cores e tamanhos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Controle de Crediário
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Etiquetas Personalizadas
                </li>
              </ul>

              <button className="mt-auto w-full rounded-lg border border-white/30 py-2 text-sm font-medium transition hover:bg-white hover:text-[#0E1B2A]">
                Ver Detalhes
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group relative rounded-2xl bg-[#0E1B2A] border border-white/10 overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src="mercado.svg"
                alt="Mercados e Padarias"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                Mercados e Padarias
              </h3>
            </div>

            <div className="p-5 text-white flex flex-col flex-1">
              <p className="text-sm text-white/70 mb-4">
                Agilidade no caixa para alto fluxo de clientes.
              </p>

              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  PDV super rápido
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Integração com balança
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Controle de validade
                </li>
              </ul>

              <button className="mt-auto w-full rounded-lg border border-white/30 py-2 text-sm font-medium transition hover:bg-white hover:text-[#0E1B2A]">
                Ver Detalhes
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group relative rounded-2xl bg-[#0E1B2A] border border-white/10 overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src="bar-restaurante.svg"
                alt="Bares e Restaurantes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                Bares e Restaurantes
              </h3>
            </div>

            <div className="p-5 text-white flex flex-col flex-1">
              <p className="text-sm text-white/70 mb-4">Gestão completa da cozinha ao delivery.</p>

              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Comanda eletrônica
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Sistema KDS (Cozinha)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Gestão de mesas
                </li>
              </ul>

              <button className="mt-auto w-full rounded-lg border border-white/30 py-2 text-sm font-medium transition hover:bg-white hover:text-[#0E1B2A]">
                Ver Detalhes
              </button>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group relative rounded-2xl bg-[#0E1B2A] border border-white/10 overflow-hidden shadow-lg flex flex-col">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src="salao-barbearia.svg"
                alt="Salões e Barbearias"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                Salões e Barbearias
              </h3>
            </div>

            <div className="p-5 text-white flex flex-col flex-1">
              <p className="text-sm text-white/70 mb-4">Organize sua agenda e fidelize clientes.</p>

              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Agendamento online
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Cálculo de comissões
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                  Pacotes de serviços
                </li>
              </ul>

              <button className="mt-auto w-full rounded-lg border border-white/30 py-2 text-sm font-medium transition hover:bg-white hover:text-[#0E1B2A]">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================== FOOTER FINAL ================== */}
      <div className="bg-[#00218F]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-white">

<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
  <Image
    src="/nova-logo.svg"
    alt="logo"
    width={170}
    height={150}
  />

  <p className="mt-6 max-w-xs text-[15px] text-white leading-relaxed">
    A plataforma definitiva para gestão de comércios, restaurantes e serviços.
  </p>
</div>

            <div>
              <h2 className="font-semibold mb-4">Navegação</h2>
              <ul className="space-y-3 text-sm text-white/80">
                {menu.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="hover:text-white cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4">Contato</h2>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <span className="block font-medium text-white">Email</span>
                  contato@gestpro.com
                </li>
                <li>
                  <span className="block font-medium text-white">WhatsApp</span>
                  (83) 99999-9999
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4">Siga-nos</h2>
              <p className="text-sm text-white/80 mb-4">
                Acompanhe nossas novidades e dicas nas redes sociais.
              </p>

              <div className="flex items-center gap-4 text-white">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-80"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-80"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="hover:opacity-80"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/60">
            ©2025 GestPro. Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}
