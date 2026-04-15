"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Thermometer, ShieldCheck, Clock } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
const heroImages = [`${basePath}/images/camion-1.jpeg`, `${basePath}/images/camion-2.jpeg`]

function AnimatedCounter({ value }: { value: string }) {
  return <span>{value}</span>
}

const stats = [
  { icon: ShieldCheck, value: "100%", label: "Seguridad alimentaria" },
  { icon: Thermometer, value: "-25/+25C", label: "Control temperatura" },
  { icon: Clock, value: "24/7", label: "Disponibilidad total" },
]

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Camion de transporte alimentario Transpesantez"
            fill
            className={`object-cover transition-opacity duration-[2500ms] ease-in-out ${
              i === activeIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ transition: "opacity 2.5s ease-in-out, transform 8s ease-out" }}
            priority={i === 0}
          />
        ))}
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-[#0a1628]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-36 sm:px-8 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">
              Transporte alimentario de confianza
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up stagger-1 text-balance text-4xl font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[72px]">
            Tu cadena de frio,
            <br />
            <span className="font-semibold bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
              nuestra responsabilidad
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up stagger-2 mt-6 max-w-xl text-[15px] leading-relaxed text-white/50 sm:mt-8 sm:text-base lg:text-lg">
            Mas de 20 anos garantizando la seguridad alimentaria en
            transporte refrigerado y seco para los principales supermercados.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up stagger-3 mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1628] px-7 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)] hover:-translate-y-0.5"
            >
              Solicitar Presupuesto
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#nosotros"
              className="inline-flex items-center gap-2 text-[13px] text-white/50 transition-colors hover:text-white/80 self-start sm:self-center"
            >
              <span className="h-px w-8 bg-white/20 transition-all group-hover:w-12" />
              Conocer mas
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="animate-fade-in-up stagger-4 mt-16 sm:mt-24">
          <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 ${
                  i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8 sm:ml-8" : ""
                }`}
              >
                <stat.icon className="hidden sm:block h-5 w-5 text-blue-400/60" />
                <div>
                  <p className="text-xl font-light tracking-[-0.02em] text-white sm:text-2xl lg:text-3xl tabular-nums">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
    </section>
  )
}
