"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
const heroImages = [`${basePath}/images/camion-1.jpeg`, `${basePath}/images/camion-2.jpeg`]

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-end">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Camion de transporte alimentario Transpesantez"
            fill
            className={`object-cover transition-opacity duration-[2000ms] ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-foreground/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10 pt-32 sm:px-6 sm:pb-16 lg:pb-28">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-5 sm:text-xs sm:mb-8">
            Transporte alimentario desde Ecuador al mundo
          </p>
          <h1 className="text-balance text-3xl font-light leading-[1.1] tracking-tight text-background sm:text-4xl md:text-6xl lg:text-7xl">
            Tu cadena de frio,
            <br />
            <span className="font-semibold">nuestra responsabilidad</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-background/60 sm:mt-8 sm:text-base">
            Mas de 20 anos garantizando la seguridad alimentaria en
            transporte refrigerado y seco para los principales supermercados.
            Mercadona, Caprabo y muchos mas confian en nosotros.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-7 py-3.5 text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
            >
              Solicitar Presupuesto
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#nosotros"
              className="text-xs uppercase tracking-[0.15em] text-background/70 border-b border-background/30 pb-0.5 transition-colors hover:text-background hover:border-background/60 self-start"
            >
              Conocer mas
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-3 gap-6 sm:mt-20 sm:flex sm:flex-wrap sm:gap-12 lg:gap-16">
          {[
            { value: "100%", label: "Seguridad alimentaria" },
            { value: "-25/+25C", label: "Control temperatura" },
            { value: "24/7", label: "Disponibilidad" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-light text-background sm:text-2xl lg:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-background/40 sm:text-xs sm:tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
