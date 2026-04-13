"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Clientes", href: "#clientes" },
  { label: "Reseñas", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
]

function EcuadorStripes({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[3px] ${className ?? ""}`}>
      <span className="block h-[2.5px] w-6 rounded-full" style={{ backgroundColor: '#d4a017' }} />
      <span className="block h-[2.5px] w-6 rounded-full" style={{ backgroundColor: '#1a3c6e' }} />
      <span className="block h-[2.5px] w-6 rounded-full" style={{ backgroundColor: '#c41e2a' }} />
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-6 lg:py-5">
          <Link href="#inicio" className="flex items-center gap-2.5">
            <EcuadorStripes className="hidden lg:flex" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Transpesantez
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contacto"
            className="hidden text-xs uppercase tracking-[0.15em] text-foreground border-b border-foreground pb-0.5 transition-opacity hover:opacity-60 lg:inline"
          >
            Presupuesto
          </Link>

          <button
            className="lg:hidden p-2 -mr-2 transition-opacity active:opacity-60"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <EcuadorStripes />
            )}
          </button>
        </nav>
      </header>

      {/* Fullscreen mobile overlay — outside header */}
      <div
        className={`fixed inset-0 z-[60] bg-white dark:bg-neutral-950 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            href="#inicio"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Transpesantez
          </Link>
          <button
            className="p-2 -mr-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menu"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <div className="flex flex-col justify-between px-8 pt-8" style={{ height: "calc(100svh - 60px)" }}>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-baseline gap-4 py-4 border-b border-border transition-opacity active:opacity-60"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-xs text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl font-light tracking-tight text-foreground">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pb-10">
            <Link
              href="#contacto"
              className="inline-flex w-full items-center justify-center bg-foreground text-background py-4 text-sm font-medium uppercase tracking-[0.15em] transition-opacity active:opacity-80"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar Presupuesto
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <EcuadorStripes />
              <span className="text-xs text-muted-foreground">Desde Ecuador al mundo</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
