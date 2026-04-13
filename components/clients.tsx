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
  { value: "+500", label: "Entregas diarias" },
  { value: "+50", label: "Vehiculos en flota" },
  { value: "+20", label: "Anos de experiencia" },
  { value: "100%", label: "Satisfaccion" },
]

export function Clients() {
  return (
    <section id="clientes" className="py-16 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:text-xs sm:mb-6">
              Nuestros clientes
            </p>
            <h2 className="text-balance text-2xl font-light leading-[1.15] tracking-tight text-foreground sm:text-3xl md:text-5xl">
              Marcas que confian
              <br />
              <span className="font-semibold">en nosotros</span>
            </h2>
          </div>
          <div className="flex items-end mt-2 lg:mt-0">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-md">
              Trabajamos con los principales supermercados y distribuidores
              alimentarios, garantizando siempre la maxima calidad en cada
              entrega.
            </p>
          </div>
        </div>

        {/* Client names - typographic grid */}
        <div className="mt-10 grid grid-cols-2 gap-px bg-border sm:mt-20 sm:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center bg-background py-8 sm:py-12 lg:py-16 transition-colors hover:bg-secondary"
            >
              <span className="text-sm font-medium tracking-tight text-foreground sm:text-lg lg:text-xl">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:mt-20 sm:gap-8 lg:grid-cols-4 lg:gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-light text-foreground sm:text-3xl lg:text-4xl">{stat.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-muted-foreground sm:mt-2 sm:text-xs sm:tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
