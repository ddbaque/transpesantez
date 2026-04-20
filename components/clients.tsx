"use client"

import { useEffect, useRef, useState } from "react"

const clients = [
  "Mercadona",
  "Caprabo",
  "Lidl",
  "Carrefour",
  "Aldi",
  "Dia",
  "Eroski",
  "Consum",
]

const stats = [
  { value: "+100", label: "Entregas diarias" },
  { value: "+20", label: "Vehículos en flota" },
  { value: "+20", label: "Años de experiencia" },
  { value: "10", label: "Rutas fijas diarias" },
]

function AnimatedStat({ value, label, delay, inView }: { value: string; label: string; delay: number; inView: boolean }) {
  const [count, setCount] = useState(0)
  const numMatch = value.match(/\d+/)
  const target = numMatch ? parseInt(numMatch[0]) : 0
  const prefix = value.slice(0, value.indexOf(String(target)))
  const suffix = value.slice(value.indexOf(String(target)) + String(target).length)

  useEffect(() => {
    if (!inView) return
    const timeout = setTimeout(() => {
      let current = 0
      const step = Math.max(1, Math.floor(target / 30))
      const timer = setInterval(() => {
        current = Math.min(current + step, target)
        setCount(current)
        if (current >= target) clearInterval(timer)
      }, 30)
      return () => clearInterval(timer)
    }, delay)
    return () => clearTimeout(timeout)
  }, [inView, target, delay])

  return (
    <div>
      <p className="text-3xl font-light tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl tabular-nums">
        {prefix}{inView ? count : 0}{suffix}
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
        {label}
      </p>
    </div>
  )
}

export function Clients() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="clientes" className="py-24 sm:py-32 lg:py-44">
      <div ref={ref} className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className={`grid gap-6 lg:grid-cols-2 lg:gap-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground mb-6">
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em]">Nuestros clientes</span>
            </div>
            <h2 className="text-3xl font-light leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
              Marcas que confían
              <br />
              <span className="font-semibold">en nosotros</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:max-w-md lg:text-lg">
              Trabajamos con los principales supermercados y distribuidores
              alimentarios, garantizando siempre la máxima calidad en cada
              entrega.
            </p>
          </div>
        </div>

        {/* Marquee of client names */}
        <div className={`mt-14 sm:mt-20 relative overflow-hidden transition-all duration-700 delay-200 ${inView ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center py-10 border-y border-border">
            <div className="animate-marquee flex items-center gap-16 shrink-0 pr-16">
              {[...clients, ...clients].map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="text-lg font-medium tracking-[-0.01em] text-foreground/70 whitespace-nowrap hover:text-foreground transition-colors sm:text-xl lg:text-2xl"
                >
                  {client}
                </span>
              ))}
            </div>
            <div className="animate-marquee flex items-center gap-16 shrink-0 pr-16" aria-hidden>
              {[...clients, ...clients].map((client, i) => (
                <span
                  key={`dup-${client}-${i}`}
                  className="text-lg font-medium tracking-[-0.01em] text-foreground/70 whitespace-nowrap hover:text-foreground transition-colors sm:text-xl lg:text-2xl"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
          {/* Fade edges */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-8 sm:mt-20 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={i * 150}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
