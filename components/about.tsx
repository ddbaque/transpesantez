import Image from "next/image"

const values = [
  {
    number: "01",
    title: "Compromiso",
    description:
      "Cada entrega se realiza con la maxima precision y puntualidad para cumplir con las exigencias de nuestros clientes.",
  },
  {
    number: "02",
    title: "Sostenibilidad",
    description:
      "Flota de vehiculos con bajas emisiones y rutas optimizadas para reducir nuestra huella de carbono.",
  },
  {
    number: "03",
    title: "Equipo Profesional",
    description:
      "Conductores formados en manipulacion de alimentos y protocolos de seguridad alimentaria.",
  },
  {
    number: "04",
    title: "Innovacion",
    description:
      "Tecnologia GPS y sensores de temperatura en tiempo real para un control absoluto de cada envio.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:text-xs sm:mb-6">
              Sobre nosotros
            </p>
            <h2 className="text-balance text-2xl font-light leading-[1.15] tracking-tight text-foreground sm:text-3xl md:text-5xl">
              Mas de dos decadas
              <br />
              <span className="font-semibold">moviendo lo que importa</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-md">
              Desde nuestros inicios, Transpesantez se ha dedicado al
              transporte de alimentos — tanto refrigerado como en seco —
              convirtiendose en un referente del sector a nivel internacional.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 relative aspect-[16/9] sm:mt-16 sm:aspect-[21/9] overflow-hidden">
          <Image
            src="/images/warehouse.jpg"
            alt="Interior de almacen frigorifico de Transpesantez"
            fill
            className="object-cover"
          />
        </div>

        {/* Values */}
        <div className="mt-10 grid gap-px bg-border sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="bg-background px-5 py-6 sm:p-8 lg:p-10">
              <span className="text-xs text-muted-foreground/50">{value.number}</span>
              <h3 className="mt-3 text-base font-medium text-foreground sm:mt-4 sm:text-lg">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
