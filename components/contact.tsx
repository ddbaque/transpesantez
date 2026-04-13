"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+593 99 123 4567",
    href: "tel:+593991234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@transpesantez.com",
    href: "mailto:info@transpesantez.com",
  },
  {
    icon: MapPin,
    label: "Direccion",
    value: "Carrer Indústria, 08185 Lliçà de Vall, Barcelona",
    href: null,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 7:00 - 21:00",
    href: null,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
    <section id="contacto" className="py-16 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:text-xs sm:mb-6">
            Contacto
          </p>
          <h2 className="text-balance text-2xl font-light leading-[1.15] tracking-tight text-foreground sm:text-3xl md:text-5xl">
            Hablemos de
            <br />
            <span className="font-semibold">tu proyecto</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-12 sm:mt-20 sm:gap-20 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-col sm:gap-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-3 sm:gap-4">
                  <item.icon className="h-4 w-4 text-muted-foreground/50 shrink-0 mt-0.5 sm:h-5 sm:w-5" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-0.5 sm:text-xs sm:mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-xs text-foreground transition-opacity hover:opacity-60 sm:text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs text-foreground sm:text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 pt-6 border-t border-border sm:mt-8 sm:pt-8">
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-3 sm:text-xs sm:mb-4">
                Redes sociales
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {[
                  { name: "Facebook", href: "#" },
                  { name: "Instagram", href: "#" },
                  { name: "LinkedIn", href: "#" },
                  { name: "X", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`Seguir a Transpesantez en ${social.name}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center sm:py-20">
                <CheckCircle2 className="h-7 w-7 text-foreground mb-5 sm:h-8 sm:w-8 sm:mb-6" />
                <h3 className="text-lg font-light text-foreground sm:text-xl">
                  Mensaje enviado
                </h3>
                <p className="mt-2 text-xs text-muted-foreground max-w-sm sm:mt-3 sm:text-sm">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
                <button
                  className="mt-6 text-xs uppercase tracking-[0.15em] text-foreground border-b border-foreground pb-0.5 transition-opacity hover:opacity-60 sm:mt-8"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
                      Nombre completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      className="border-0 border-b border-border rounded-none bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground h-10"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <Label htmlFor="company" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      className="border-0 border-b border-border rounded-none bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground h-10"
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="border-0 border-b border-border rounded-none bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground h-10"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
                      Telefono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+593 000 000 000"
                      className="border-0 border-b border-border rounded-none bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground h-10"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuentanos que necesitas..."
                    rows={4}
                    required
                    className="border-0 border-b border-border rounded-none bg-transparent px-0 text-sm focus-visible:ring-0 focus-visible:border-foreground resize-none"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500">
                    Error al enviar. Intentalo de nuevo.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="self-stretch sm:self-start inline-flex items-center justify-center gap-3 bg-foreground text-background px-7 py-3.5 text-sm font-medium tracking-wide transition-opacity hover:opacity-80 active:opacity-70 disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
