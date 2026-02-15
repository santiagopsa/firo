import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";
import { getFaqPageSchema } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "FIRO Inversionistas | Tesis de leasing, unit economics, riesgos y FAQ",
  description:
    "Resumen para inversionistas de FIRO: tesis de leasing, unit economics, mitigaciones de riesgo, mapa competitivo y contacto.",
  alternates: {
    canonical: "/es/investors",
  },
  openGraph: {
    locale: "es_ES",
    title: "FIRO Inversionistas | Tesis de leasing, unit economics, riesgos y FAQ",
    description:
      "Modelo de inversion FIRO con enfoque leasing, supuestos transparentes, riesgos y formulario de contacto.",
    url: "/es/investors",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Resumen de inversion FIRO",
      },
    ],
  },
};

const thesisPoints = [
  "La robotica humanoide ya salio de la fase demo y entro en despliegues productivos.",
  "El leasing reduce la exposicion directa a la depreciacion acelerada del hardware.",
  "FIRO opera de punta a punta para que el inversionista se enfoque en financiar y cobrar neto mensual.",
];

const economics = [
  { label: "Leasing mensual (base)", value: "$1,500" },
  { label: "Escenario base (neto inversionista)", value: "$1,414 / mes" },
  { label: "Plazo minimo de contrato", value: "24 meses" },
  { label: "Ventana de permanencia dura", value: "12 meses" },
];

const risks = [
  {
    risk: "Demanda comercial insuficiente",
    mitigation: "Pipeline por vertical, acuerdos con partners y foco inicial en casos de alta rotacion.",
  },
  {
    risk: "Riesgo de obligacion de leasing",
    mitigation: "Exigimos contrato minimo de 24 meses, monitoreamos cobertura de leasing mensualmente y priorizamos contratos que sostengan umbrales base.",
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
    model: "FIRO (leasing + operacion)",
    strengths: "Modelo leasing + operacion orientado a cashflow con tracking operativo y de pagos",
    limits: "Requiere disciplina operativa para mantener cobertura de leasing y consistencia de payouts",
  },
];

const faqs = [
  {
    q: "Como se calcula el pago al inversionista?",
    a: "Partimos del ingreso bruto mensual, restamos operador y costos operativos, luego restamos el leasing mensual. Sobre ese neto distribuible aplicamos el porcentaje del inversionista.",
  },
  {
    q: "Por que leasing y no compra directa del robot?",
    a: "El leasing reduce exposicion a depreciacion de corto plazo y mantiene la opcion de capturar flujo operativo con menor riesgo estructural.",
  },
  {
    q: "Que pasa si baja la utilizacion?",
    a: "El payout baja porque cae el neto operativo y la cobertura del leasing. Por eso mostramos escenarios conservador/base/optimista y no promesas fijas.",
  },
  {
    q: "Existe plazo minimo para el inversionista?",
    a: "Si. Exigimos contrato minimo de 24 meses con permanencia dura de 12 meses para sostener obligaciones de leasing y predictibilidad operativa.",
  },
  {
    q: "Quien ejecuta la operacion diaria?",
    a: "FIRO gestiona despliegue, operador, agenda, mantenimiento y control operativo en cada jornada activa.",
  },
  {
    q: "Este retorno es garantizado?",
    a: "No. Son proyecciones por escenarios con supuestos visibles.",
  },
];

export default function InvestorsPageEs() {
  const faqSchema = getFaqPageSchema(
    faqs.map((item) => ({
      question: item.q,
      answer: item.a,
    }))
  );

  return (
    <main id="top">
      <Nav locale="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-firo-navy via-[#0B1430] to-[#070B14] pb-20 pt-28 text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-firo-blue">Inversionistas</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Resumen de inversion FIRO.
            </h1>
            <p className="mt-5 text-white/75 md:text-lg">
              Pagina de referencia para evaluar la tesis leasing-first de FIRO, unit economics, riesgos, mapa competitivo
              y contacto directo con el equipo.
            </p>
          </div>
        </Container>
      </section>

      <section id="thesis" className="bg-white py-20">
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

      <section id="roi" className="bg-firo-bg py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Modelos y unit economics
          </h2>
          <p className="mt-4 text-firo-muted">
            Escenario base donde el inversionista financia leasing mensual y FIRO gestiona operacion.
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
              id="quote"
              action="https://formsubmit.co/santiagopsa@gmail.com"
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              <input type="hidden" name="_subject" value="FIRO Investors Page Contact (ES)" />
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
