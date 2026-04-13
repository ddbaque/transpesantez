import Link from "next/link"

const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Clientes", href: "#clientes" },
      { label: "Reseñas", href: "#testimonios" },
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
      { label: "Carrer Indústria, 08185 Lliçà de Vall, Barcelona", href: "#contacto" },
    ],
  },
]

function EcuadorStripes() {
  return (
    <div className="flex flex-col gap-[2px]">
      <span className="block h-[2px] w-4 rounded-full" style={{ backgroundColor: '#d4a017' }} />
      <span className="block h-[2px] w-4 rounded-full" style={{ backgroundColor: '#1a3c6e' }} />
      <span className="block h-[2px] w-4 rounded-full" style={{ backgroundColor: '#c41e2a' }} />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-2.5">
              <EcuadorStripes />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-background">
                Transpesantez
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-background/60 sm:mt-6 sm:text-sm">
              Mas de 20 anos transportando alimentos con la maxima seguridad y
              confianza. Tu cadena de frio, nuestra responsabilidad.
            </p>
            {/* Social */}
            <div className="mt-6 flex flex-wrap gap-4 sm:mt-8 sm:gap-6">
              {["Facebook", "Instagram", "LinkedIn", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-background/60 transition-colors hover:text-background/80"
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
                <h4 className="text-[10px] font-medium uppercase tracking-[0.15em] text-background/70 sm:text-xs">
                  {group.title}
                </h4>
                <ul className="mt-3 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-background/55 transition-colors hover:text-background/80 sm:text-sm"
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
        <div className="mt-12 flex flex-col gap-3 border-t border-background/10 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-8">
          <p className="text-[10px] text-background/50 sm:text-xs">
            &copy; {new Date().getFullYear()} Transpesantez. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-[10px] text-background/50 transition-colors hover:text-background/70 sm:text-xs">
              Politica de Privacidad
            </Link>
            <Link href="#" className="text-[10px] text-background/50 transition-colors hover:text-background/70 sm:text-xs">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
