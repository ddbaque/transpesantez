"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

function EcuadorStripes({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[2.5px] ${className ?? ""}`}>
      <span className="block h-[2px] w-5 rounded-full bg-[#d4a017]" />
      <span className="block h-[2px] w-5 rounded-full bg-[#1a3c6e]" />
      <span className="block h-[2px] w-5 rounded-full bg-[#c41e2a]" />
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_4px_12px_rgba(15,23,42,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 lg:py-5">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <EcuadorStripes className="transition-transform duration-300 group-hover:scale-110" />
            <span className={`text-[13px] font-semibold uppercase tracking-[0.25em] transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-white"
            }`}>
              Transpesantez
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-[13px] rounded-lg transition-all duration-300 ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#contacto"
            className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-300 hover:shadow-md ${
              scrolled
                ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                : "bg-white text-[#0a1628] hover:bg-white/90"
            }`}
          >
            Presupuesto
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 -mr-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-secondary" : "hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? (
              <X className={`h-5 w-5 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <EcuadorStripes />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="#inicio"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <EcuadorStripes />
            <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-foreground">
              Transpesantez
            </span>
          </Link>
          <button
            className="p-2 -mr-2 rounded-lg hover:bg-secondary"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <div className="flex flex-col justify-between px-6 pt-8" style={{ height: "calc(100svh - 64px)" }}>
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-5 py-5 border-b border-border/60 transition-all active:opacity-60 group"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-[11px] font-mono text-muted-foreground/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[22px] font-light tracking-[-0.02em] text-foreground group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pb-10 space-y-5">
            <Link
              href="#contacto"
              className="flex items-center justify-center gap-3 w-full bg-foreground text-primary-foreground py-4 rounded-xl text-sm font-medium tracking-wide transition-all active:scale-[0.98]"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar Presupuesto
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-center gap-3">
              <EcuadorStripes />
              <span className="text-xs text-muted-foreground">Desde Ecuador al mundo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
