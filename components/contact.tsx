"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono fijo",
    value: "938 437 200",
    href: "tel:+34938437200",
  },
  {
    icon: Phone,
    label: "Teléfono móvil",
    value: "647 94 27 60",
    href: "tel:+34647942760",
  },
  {
    icon: Mail,
    label: "Email",
    value: "trafico@ttranspesantez.com",
    href: "mailto:trafico@ttranspesantez.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Llica de Vall, Barcelona",
    href: null,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun-Jue: 9-13h / 15-18h · Vie: 8-13h / 15-17h",
    href: null,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", "abcc38fc-704d-447c-b170-4f1265c51cae")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-20 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className={`max-w-2xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground mb-6">
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em]">Contacto</span>
          </div>
          <h2 className="text-3xl font-light leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            Hablemos de
            <br />
            <span className="font-semibold">tu proyecto</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-5 lg:gap-16">
          {/* Contact info */}
          <div className={`lg:col-span-2 order-2 lg:order-1 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="group flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent/10">
                    <item.icon className="h-4.5 w-4.5 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 order-1 lg:order-2 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="bg-white rounded-2xl p-6 sm:p-10" style={{ boxShadow: "var(--shadow-lg)" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center sm:py-16">
                  <div className="h-14 w-14 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-7 w-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground tracking-[-0.01em]">
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                  </p>
                  <button
                    className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-sm font-medium text-foreground transition-all hover:bg-secondary/80"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        required
                        className="h-11 rounded-lg border-border bg-secondary/50 px-4 text-sm placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:border-accent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        className="h-11 rounded-lg border-border bg-secondary/50 px-4 text-sm placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:border-accent transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="h-11 rounded-lg border-border bg-secondary/50 px-4 text-sm placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:border-accent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+34 000 000 000"
                        className="h-11 rounded-lg border-border bg-secondary/50 px-4 text-sm placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:border-accent transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos qué necesitas..."
                      rows={4}
                      required
                      className="rounded-lg border-border bg-secondary/50 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:border-accent resize-none transition-all"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-destructive bg-destructive/5 px-4 py-2.5 rounded-lg">
                      Error al enviar. Inténtalo de nuevo.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="self-stretch sm:self-start inline-flex items-center justify-center gap-3 bg-foreground text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
