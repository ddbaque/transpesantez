"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Target, Leaf, Users, Cpu } from "lucide-react"

const values = [
  {
    icon: Target,
    number: "01",
    title: "Compromiso",
    description:
      "Cada entrega se realiza con la maxima precision y puntualidad para cumplir con las exigencias de nuestros clientes.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Sostenibilidad",
    description:
      "Flota de vehiculos con bajas emisiones y rutas optimizadas para reducir nuestra huella de carbono.",
  },
  {
    icon: Users,
    number: "03",
    title: "Equipo Profesional",
    description:
      "Conductores formados en manipulacion de alimentos y protocolos de seguridad alimentaria.",
  },
  {
    icon: Cpu,
    number: "04",
    title: "Innovacion",
    description:
      "Tecnologia GPS y sensores de temperatura en tiempo real para un control absoluto de cada envio.",
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function About() {
  const { ref: sectionRef, inView } = useInView(0.15)

  return (
    <section id="nosotros" className="py-24 sm:py-32 lg:py-44">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground mb-6">
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em]">Sobre nosotros</span>
            </div>
            <h2 className="text-3xl font-light leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
              Mas de dos decadas
              <br />
              <span className="font-semibold">moviendo lo que importa</span>
            </h2>
          </div>
          <div className={`flex items-end transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:max-w-md lg:text-lg">
              Desde nuestros inicios, Transpesantez se ha dedicado al
              transporte de alimentos — tanto refrigerado como en seco —
              convirtiendose en un referente del sector a nivel internacional.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className={`mt-14 relative aspect-[16/9] sm:mt-20 sm:aspect-[21/9] overflow-hidden rounded-2xl transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/warehouse.jpg`}
            alt="Interior de almacen frigorifico de Transpesantez"
            fill
            className="object-cover transition-transform duration-[3000ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </div>

        {/* Values */}
        <div className="mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`group relative bg-white rounded-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: inView ? `${400 + i * 100}ms` : "0ms",
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card-hover)" }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center transition-colors group-hover:bg-accent/10">
                  <value.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground/30">{value.number}</span>
              </div>
              <h3 className="text-base font-semibold text-foreground sm:text-lg tracking-[-0.01em]">
                {value.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
