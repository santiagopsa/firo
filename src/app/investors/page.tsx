import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";

const thesisPoints = [
  "La robotica humanoide ya salio de la fase demo y entro en despliegues productivos.",
  "La demanda por continuidad operativa crece en eventos, venues y servicios presenciales.",
  "El modelo activo + operacion permite medir utilizacion, uptime y pagos con transparencia.",
];

const economics = [
  { label: "Ticket por unidad", value: "$44,000" },
  { label: "Escenario base (inversionista)", value: "$2,464 / mes" },
  { label: "Rendimiento anual objetivo", value: "~67%" },
  { label: "Uso objetivo", value: "10+ dias / mes" },
];

const risks = [
  {
    risk: "Demanda comercial insuficiente",
    mitigation: "Pipeline por vertical, acuerdos con partners y foco inicial en casos de alta rotacion.",
  },
  {
    risk: "Variabilidad operativa",
    mitigation: "Operador dedicado por dia activo, SOPs y mantenimiento preventivo.",
  },
  {
    risk: "Riesgo tecnologico",
    mitigation: "Monitoreo remoto, telemetria y planes de reemplazo/backup por unidad.",
  },
  {
    risk: "Cumplimiento y reputacion",
    mitigation: "Geofencing, operacion supervisada, politicas de privacidad y protocolos de seguridad.",
  },
];

const competitors = [
  {
    model: "Renta puntual de robot",
    strengths: "Rapida para activaciones aisladas",
    limits: "Baja continuidad de datos y poca visibilidad para inversionista",
  },
  {
    model: "Integrador tradicional",
    strengths: "Experiencia tecnica y customizacion",
    limits: "Suele priorizar proyecto, no rendimiento recurrente de activo",
  },
  {
    model: "FIRO (activo + operacion)",
    strengths: "Modelo orientado a cashflow con tracking operativo y de pagos",
    limits: "Requiere disciplina operativa para escalar con calidad",
  },
];

const faqs = [
  {
    q: "Como se calcula el pago al inversionista?",
    a: "Partimos de ingreso bruto mensual, restamos operador y costos operativos, y sobre el neto aplicamos el porcentaje del inversionista.",
  },
  {
    q: "Que pasa si baja la utilizacion?",
    a: "El payout baja proporcionalmente. Por eso mostramos escenarios (conservador/base/optimista) y no promesas fijas.",
  },
  {
    q: "Quien ejecuta la operacion diaria?",
    a: "FIRO gestiona despliegue, operador, agenda y control operativo en cada jornada activa.",
  },
  {
    q: "Este retorno es garantizado?",
    a: "No. Son proyecciones basadas en escenarios y supuestos operativos visibles.",
  },
];

export default function InvestorsPage() {
  return (
    <main id="top">
      <Nav />

      <section className="bg-gradient-to-b from-firo-navy via-[#0B1430] to-[#070B14] pb-20 pt-28 text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-firo-blue">Inversionistas</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Resumen de inversion FIRO.
            </h1>
            <p className="mt-5 text-white/75 md:text-lg">
              Pagina de referencia para evaluar tesis, unit economics, riesgos, mapa competitivo
              y contacto directo con el equipo.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Tesis: por que este mercado ahora
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {thesisPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-firo-line bg-firo-bg p-5">
                <p className="text-firo-text">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-firo-bg py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Modelos y unit economics
          </h2>
          <p className="mt-4 text-firo-muted">
            Escenario base con operacion gestionada y enfoque en neto mensual para inversionista.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {economics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-firo-muted">{item.label}</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-firo-muted">
            Nota: proyecciones por escenarios, no garantias.
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Riesgos y mitigaciones
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {risks.map((item) => (
              <div key={item.risk} className="rounded-2xl border border-firo-line bg-firo-bg p-6">
                <div className="text-lg font-semibold">{item.risk}</div>
                <div className="mt-2 text-firo-muted">{item.mitigation}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-firo-bg py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Mapa competitivo
          </h2>
          <p className="mt-4 text-firo-muted">
            Comparacion neutral de modelos actuales en el mercado.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-firo-line bg-white">
            <table className="w-full min-w-[720px] text-left">
              <thead className="border-b border-firo-line bg-firo-bg">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold">Modelo</th>
                  <th className="px-5 py-4 text-sm font-semibold">Fortaleza</th>
                  <th className="px-5 py-4 text-sm font-semibold">Limitacion</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr key={c.model} className="border-b border-firo-line last:border-b-0">
                    <td className="px-5 py-4 font-medium">{c.model}</td>
                    <td className="px-5 py-4 text-firo-muted">{c.strengths}</td>
                    <td className="px-5 py-4 text-firo-muted">{c.limits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">FAQ inversionista</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-firo-line bg-firo-bg p-6">
                <div className="text-lg font-semibold">{item.q}</div>
                <p className="mt-2 text-firo-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contacto" className="bg-firo-bg py-20">
        <Container>
          <div className="rounded-3xl border border-firo-line bg-white p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Contacto para inversionistas
            </h2>
            <p className="mt-3 text-firo-muted">
              Deja tus datos y te enviamos el resumen completo con supuestos y pasos de onboarding.
            </p>

            <form
              action="https://formsubmit.co/santiagopsa@gmail.com"
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              <input type="hidden" name="_subject" value="FIRO Investors Page Contact" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                name="name"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Nombre"
              />
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Correo electronico"
              />
              <input
                name="phone"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Telefono"
              />

              <button
                type="submit"
                className="md:col-span-3 rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Solicitar informacion para inversionistas
              </button>
            </form>

            <div className="mt-4 text-xs text-firo-muted">
              Proyecciones basadas en escenarios. No constituyen garantia de rendimiento.
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
