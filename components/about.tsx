"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { HeartHandshake, Quote, Sparkles, Truck } from "lucide-react"

const milestones = [
  {
    year: "2000",
    title: "Un nuevo comienzo",
    description:
      "Patricio llegó a España con experiencia en el transporte desde Ecuador, un oficio que ya formaba parte de su historia familiar.",
  },
  {
    year: "2004",
    title: "El primer camión",
    description:
      "Compró su primer Renault y empezó a trabajar en la ZAL. Fue el inicio de Transpesantez sobre la carretera.",
  },
  {
    year: "2006",
    title: "Primer crecimiento",
    description:
      "Con mucho esfuerzo pudo sumar otro vehículo y seguir creciendo paso a paso hasta alcanzar tres camiones.",
  },
  {
    year: "2007-2010",
    title: "Resistir en plena crisis",
    description:
      "La crisis económica frenó el crecimiento, pero no detuvo el compromiso con el equipo, los clientes y el trabajo bien hecho.",
  },
  {
    year: "Hoy",
    title: "Una flota consolidada",
    description:
      "Con el apoyo de su mujer, sus hijos y un equipo fiel, la empresa sigue creciendo tras más de 20 años en el sector.",
  },
]

const principles = [
  {
    icon: Truck,
    title: "Oficio",
    description: "El transporte no empezó como una oportunidad: empezó como una forma de vida.",
  },
  {
    icon: HeartHandshake,
    title: "Familia",
    description: "La empresa creció con apoyo familiar, trabajo constante y personas que llevan años formando parte del camino.",
  },
  {
    icon: Sparkles,
    title: "Ambición",
    description: "Buscar, analizar y encontrar soluciones ha sido siempre parte de la manera de trabajar.",
  },
]

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
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
    <section id="nosotros" className="py-24 sm:py-32 lg:py-44 bg-secondary/40">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-muted-foreground mb-6" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em]">Nuestra historia</span>
            </div>

            <h2 className="text-3xl font-light leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
              Más de dos décadas
              <br />
              <span className="font-semibold">levantando camino</span>
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:max-w-md lg:text-lg">
              <p>
                La historia de Transpesantez empieza con Patricio, que llegó a España en el año 2000 con el transporte ya muy presente en su vida: en Ecuador, su padre también se dedicaba a este oficio.
              </p>
              <p>
                Su primer sueño fue tener un camión propio. Después quiso crecer, sumar vehículos y construir una empresa capaz de responder cuando el cliente más lo necesita.
              </p>
            </div>

            <div className="mt-8 min-h-[184px] rounded-2xl bg-[#0a1628] p-6 text-white sm:p-8" style={{ boxShadow: "var(--shadow-lg)" }}>
              <Quote className="h-7 w-7 text-blue-300/40" />
              <blockquote className="mt-5 text-xl font-light leading-snug tracking-[-0.02em] sm:text-2xl">
                “En la vida hay que ser ambiciosos.”
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                Una frase que resume su forma de trabajar: no rendirse, analizar cada situación y encontrar siempre la mejor solución.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white p-3" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/10]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/camion-1.jpeg`}
                  alt="Camión de Transpesantez"
                  fill
                  className="object-cover transition-transform duration-[3000ms] hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {principles.map((principle, i) => (
                <div
                  key={principle.title}
                  className={`min-h-[184px] rounded-xl bg-white p-5 transition-all duration-500 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    boxShadow: "var(--shadow-card)",
                    transitionDelay: inView ? `${350 + i * 100}ms` : "0ms",
                  }}
                >
                  <principle.icon className="h-5 w-5 text-accent/70" />
                  <h3 className="mt-4 text-sm font-semibold tracking-[-0.01em] text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="relative lg:hidden">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />
            <div className="space-y-6">
              {milestones.map((milestone, i) => {
                const isRight = i % 2 === 0

                return (
                  <div
                    key={`${milestone.year}-${milestone.title}-mobile`}
                    className={`relative grid grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] items-start transition-all duration-500 ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: inView ? `${500 + i * 100}ms` : "0ms",
                    }}
                  >
                    {!isRight && (
                      <article className="relative h-full rounded-2xl border border-border/70 bg-white p-4 shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/20 hover:shadow-[var(--shadow-card-hover)] sm:p-5">
                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent sm:text-xs">
                          {milestone.year}
                        </span>
                        <h3 className="mt-3 text-sm font-semibold tracking-[-0.01em] text-foreground sm:text-base">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {milestone.description}
                        </p>
                      </article>
                    )}

                    <div className="relative col-start-2 flex justify-center pt-6">
                      <span className="relative z-10 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-sm" />
                    </div>

                    {isRight && (
                      <article className="col-start-3 relative h-full rounded-2xl border border-border/70 bg-white p-4 shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/20 hover:shadow-[var(--shadow-card-hover)] sm:p-5">
                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent sm:text-xs">
                          {milestone.year}
                        </span>
                        <h3 className="mt-3 text-sm font-semibold tracking-[-0.01em] text-foreground sm:text-base">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {milestone.description}
                        </p>
                      </article>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="hidden gap-4 lg:grid lg:grid-cols-5">
            {milestones.map((milestone, i) => (
              <div
                key={`${milestone.year}-${milestone.title}`}
                className={`transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: inView ? `${500 + i * 100}ms` : "0ms",
                }}
              >
                <article className="relative h-full overflow-hidden rounded-2xl border border-border/70 bg-white p-6 shadow-[var(--shadow-card)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent/20 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-[-0.01em] text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
