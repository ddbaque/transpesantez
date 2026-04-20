"use client"

import { useEffect, useRef, useState } from "react"
import {
  Snowflake,
  PackageCheck,
  Truck,
  MapPinned,
  Warehouse,
  Sparkles,
  Zap,
} from "lucide-react"

const services = [
  {
    icon: Snowflake,
    title: "Transporte Refrigerado",
    description:
      "Vehículos frigoríficos con control de temperatura negativa y positiva para productos que requieren cadena de frío.",
    tag: "Principal",
  },
  {
    icon: PackageCheck,
    title: "Entregas y Recogidas Paletizadas",
    description:
      "Movemos cualquier tipo de producto paletizado, con recogida y entrega punto a punto.",
    tag: null,
  },
  {
    icon: Truck,
    title: "Mercancía Pesada o Voluminosa",
    description:
      "Flota adaptada para cargas de gran tonelaje y dimensiones, hasta 24.000 kg por tráiler.",
    tag: null,
  },
  {
    icon: MapPinned,
    title: "Transporte Intercomunitario",
    description:
      "Rutas entre comunidades autónomas con cobertura nacional y tiempos de entrega optimizados.",
    tag: null,
  },
  {
    icon: Warehouse,
    title: "Almacenaje Temporal",
    description:
      "Instalaciones para almacenamiento de corta y media duración mientras planificamos tu ruta.",
    tag: null,
  },
  {
    icon: Sparkles,
    title: "Soluciones a Medida",
    description:
      "Estudiamos cada proyecto para ofrecer la solución logística que mejor encaje con tu operativa.",
    tag: "Empresas",
  },
  {
    icon: Zap,
    title: "Servicios Urgentes y Exprés",
    description:
      "Cuando el tiempo aprieta, priorizamos tu envío con disponibilidad inmediata y ruta directa.",
    tag: null,
  },
]

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="relative py-24 sm:py-32 lg:py-44 bg-[#0a1628] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "64px 64px"
      }} />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className={`max-w-2xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="h-1 w-1 rounded-full bg-blue-400" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">Nuestros servicios</span>
          </div>
          <h2 className="text-3xl font-light leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
            Soluciones completas
            <br />
            <span className="font-semibold">en transporte y logística</span>
          </h2>
        </div>

        {/* Services grid - 2 columns on desktop */}
        <div className="mt-14 sm:mt-20 grid gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.1] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${i === services.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-0.5rem)]" : ""}`}
              style={{ transitionDelay: inView ? `${200 + i * 80}ms` : "0ms" }}
            >
              <div className="flex items-start gap-5">
                <div className="h-10 w-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-blue-500/10 group-hover:border-blue-400/20">
                  <service.icon className="h-5 w-5 text-white/30 transition-colors group-hover:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[15px] font-medium text-white sm:text-base tracking-[-0.01em]">
                      {service.title}
                    </h3>
                    {service.tag && (
                      <span className="text-[9px] uppercase tracking-[0.1em] text-blue-400/70 bg-blue-400/10 px-2 py-0.5 rounded-full">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/35 group-hover:text-white/50 transition-colors">
                    {service.description}
                  </p>
                </div>
                <span className="hidden sm:block text-[11px] font-mono text-white/10 pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
