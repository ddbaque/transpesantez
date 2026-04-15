import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Clientes", href: "#clientes" },
      { label: "Testimonios", href: "#testimonios" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Transporte Refrigerado", href: "#servicios" },
      { label: "Distribucion Capilar", href: "#servicios" },
      { label: "Almacenaje", href: "#servicios" },
      { label: "Trazabilidad", href: "#servicios" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "+593 99 123 4567", href: "tel:+593991234567" },
      { label: "info@transpesantez.com", href: "mailto:info@transpesantez.com" },
      { label: "Llica de Vall, Barcelona", href: "#contacto" },
    ],
  },
]

function EcuadorStripes() {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="block h-[2px] w-4 rounded-full bg-[#d4a017]" />
      <span className="block h-[2px] w-4 rounded-full bg-[#1a3c6e]" />
      <span className="block h-[2px] w-4 rounded-full bg-[#c41e2a]" />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0a1628]">
      {/* CTA banner */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative -mt-16 rounded-2xl bg-gradient-to-br from-[#0f2340] to-[#162d50] p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }} />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-light tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
                Listo para <span className="font-semibold">empezar?</span>
              </h3>
              <p className="mt-3 text-sm text-white/40 max-w-lg lg:text-base">
                Contactanos hoy y descubre como podemos optimizar tu cadena de suministro alimentario.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1628] px-7 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] shrink-0 self-start"
            >
              Solicitar Presupuesto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-flex items-center gap-3 group">
              <EcuadorStripes />
              <span className="text-[13px] font-semibold uppercase tracking-[0.25em] text-white">
                Transpesantez
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
              Mas de 20 anos transportando alimentos con la maxima seguridad y
              confianza. Tu cadena de frio, nuestra responsabilidad.
            </p>
            {/* Social */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Facebook", "Instagram", "LinkedIn", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/40 transition-all hover:bg-white/[0.08] hover:text-white/60"
                  aria-label={`Transpesantez en ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3 lg:gap-12">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
                  {group.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/30 transition-colors hover:text-white/60"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Transpesantez. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/25 transition-colors hover:text-white/50">
              Politica de Privacidad
            </Link>
            <Link href="#" className="text-xs text-white/25 transition-colors hover:text-white/50">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
