const testimonials = [
  {
    name: "Carlos Fernandez",
    role: "Director de Logistica, Mercadona",
    content:
      "Transpesantez ha sido un socio fundamental para nuestra cadena de suministro. Su fiabilidad y el control de temperatura que mantienen es excepcional.",
  },
  {
    name: "Maria Lopez",
    role: "Responsable de Compras, Caprabo",
    content:
      "Llevamos mas de 10 anos trabajando con Transpesantez y la experiencia ha sido siempre impecable. Su equipo es profesional, puntual y muy comprometido.",
  },
  {
    name: "Javier Martinez",
    role: "Gerente de Operaciones, Lidl",
    content:
      "La trazabilidad en tiempo real que ofrecen nos da una tranquilidad total. Sabemos exactamente donde esta cada envio y a que temperatura.",
  },
  {
    name: "Ana Garcia",
    role: "Directora de Calidad, Carrefour",
    content:
      "Su compromiso con la seguridad alimentaria esta a la altura de nuestras exigencias mas estrictas. Transpesantez es sinonimo de confianza.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-28 lg:py-40 bg-secondary">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:text-xs sm:mb-6">
            Reseñas
          </p>
          <h2 className="text-balance text-2xl font-light leading-[1.15] tracking-tight text-foreground sm:text-3xl md:text-5xl">
            Lo que dicen quienes
            <br />
            <span className="font-semibold">trabajan con nosotros</span>
          </h2>
        </div>

        {/* Testimonials cards */}
        <div className="mt-10 grid gap-px bg-border sm:mt-20 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="bg-secondary px-5 py-8 flex flex-col justify-between sm:p-10 lg:p-14"
            >
              <div>
                <span className="text-[10px] text-muted-foreground/40 sm:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <blockquote className="mt-4 text-base font-light leading-relaxed text-foreground sm:mt-6 sm:text-lg lg:text-xl">
                  {`"${testimonial.content}"`}
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-3 sm:mt-10 sm:gap-4">
                <div className="h-9 w-9 flex items-center justify-center bg-foreground text-background text-[10px] font-medium rounded-full shrink-0 sm:h-10 sm:w-10 sm:text-xs">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground sm:text-xs">
                    {testimonial.role}
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
