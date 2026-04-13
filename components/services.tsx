import {
  Snowflake,
  Package,
  PackageCheck,
  Route,
  BarChart3,
  Warehouse,
  Truck,
} from "lucide-react"

const services = [
  {
    icon: Snowflake,
    title: "Transporte Refrigerado",
    description:
      "Vehiculos con control de temperatura de -25C a +25C para productos que requieren cadena de frio.",
  },
  {
    icon: Package,
    title: "Transporte en Seco",
    description:
      "Distribucion de productos alimentarios que no requieren temperatura controlada con la misma fiabilidad.",
  },
  {
    icon: PackageCheck,
    title: "Distribucion Capilar",
    description:
      "Entregas punto a punto en supermercados, tiendas y centros de distribucion.",
  },
  {
    icon: Route,
    title: "Rutas Optimizadas",
    description:
      "Planificacion inteligente de rutas para maximizar la eficiencia y reducir tiempos.",
  },
  {
    icon: BarChart3,
    title: "Trazabilidad Completa",
    description:
      "Seguimiento GPS en tiempo real y registro de temperatura de cada envio.",
  },
  {
    icon: Warehouse,
    title: "Almacenaje Temporal",
    description:
      "Instalaciones de almacenamiento refrigerado y en seco de corta y media duracion.",
  },
  {
    icon: Truck,
    title: "Flota Especializada",
    description:
      "Vehiculos de distintas capacidades adaptados a cada necesidad logistica.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-28 lg:py-40 bg-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/40 mb-4 sm:text-xs sm:mb-6">
            Nuestros servicios
          </p>
          <h2 className="text-balance text-2xl font-light leading-[1.15] tracking-tight text-background sm:text-3xl md:text-5xl">
            Soluciones completas en
            <br />
            <span className="font-semibold">logistica alimentaria</span>
          </h2>
        </div>

        {/* Services list */}
        <div className="mt-12 grid gap-px bg-background/10 sm:mt-20">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group flex items-start gap-4 bg-foreground py-6 sm:gap-6 sm:py-8 lg:py-10 transition-all hover:bg-background/5"
            >
              <span className="text-[10px] text-background/25 pt-0.5 w-5 shrink-0 sm:text-xs sm:w-6 sm:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-16">
                <div className="flex items-center gap-3 lg:w-72 shrink-0 sm:gap-4">
                  <service.icon className="h-4 w-4 text-background/40 transition-colors group-hover:text-background sm:h-5 sm:w-5" />
                  <h3 className="text-sm font-medium text-background sm:text-base">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-background/45 sm:text-sm lg:max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
