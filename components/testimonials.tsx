"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Fernández",
    role: "Director de Logística",
    company: "Mercadona",
    content:
      "Transpesantez ha sido un socio fundamental para nuestra cadena de suministro. Su fiabilidad y el control de temperatura que mantienen es excepcional.",
  },
  {
    name: "María López",
    role: "Responsable de Compras",
    company: "Caprabo",
    content:
      "Llevamos más de 10 años trabajando con Transpesantez y la experiencia ha sido siempre impecable. Su equipo es profesional, puntual y muy comprometido.",
  },
  {
    name: "Javier Martínez",
    role: "Gerente de Operaciones",
    company: "Lidl",
    content:
      "La trazabilidad en tiempo real que ofrecen nos da una tranquilidad total. Sabemos exactamente dónde está cada envío y a qué temperatura.",
  },
  {
    name: "Ana García",
    role: "Directora de Calidad",
    company: "Carrefour",
    content:
      "Su compromiso con la seguridad alimentaria está a la altura de nuestras exigencias más estrictas. Transpesantez es sinónimo de confianza.",
  },
]

export function Testimonials() {
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
    <section id="testimonios" className="py-24 sm:py-32 lg:py-44 bg-secondary/50">
      <div ref={ref} className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className={`max-w-2xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-muted-foreground mb-6" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em]">Testimonios</span>
          </div>
          <h2 className="text-3xl font-light leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            Lo que dicen quienes
            <br />
            <span className="font-semibold">trabajan con nosotros</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`group relative bg-white rounded-xl p-7 sm:p-10 transition-all duration-500 hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: inView ? `${200 + i * 100}ms` : "0ms",
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card-hover)" }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)" }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-accent/10 mb-4 sm:mb-6" />

              <blockquote className="text-base font-light leading-relaxed text-foreground/80 sm:text-lg lg:text-[17px]">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-xs font-semibold text-accent shrink-0">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground tracking-[-0.01em]">
                    {testimonial.name}
                  </p>
                  <p className="text-[12px] text-muted-foreground">
                    {testimonial.role}, <span className="font-medium text-foreground/60">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
