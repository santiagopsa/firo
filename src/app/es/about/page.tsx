import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Sobre FIRO | Tesis y modelo operativo con leasing",
  description:
    "Conoce que es FIRO, para quien es, que problema resuelve, como funciona el modelo con leasing y la vision de crecimiento en activos roboticos.",
  alternates: {
    canonical: "/es/about",
  },
  openGraph: {
    locale: "es_ES",
    title: "Sobre FIRO | Tesis y modelo operativo con leasing",
    description:
      "Resumen de FIRO para inversionistas y entusiastas: tesis de mercado, operacion y contacto.",
    url: "/es/about",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Resumen de FIRO y su modelo operativo",
      },
    ],
  },
};

export default function AboutPageEs() {
  return (
    <main id="top">
      <Nav locale="es" />

      <section className="bg-gradient-to-b from-firo-navy via-[#0B1430] to-[#070B14] pb-20 pt-28 text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-firo-blue">Sobre FIRO</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Robotica humanoide estructurada para cashflow con leasing.
            </h1>
            <p className="mt-5 text-white/75 md:text-lg">
              FIRO convierte robots humanoides en activos operativos con leasing:
              despliegue claro, metricas transparentes y pagos por escenarios.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-firo-line bg-firo-bg p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Para quien es FIRO</h2>
              <p className="mt-3 text-firo-muted">
                Para inversionistas que buscan exposicion a cashflow en robotica, y para
                entusiastas de tecnologia que quieren participar en esta transicion.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-firo-bg p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Problema que resolvemos</h2>
              <p className="mt-3 text-firo-muted">
                La demanda existe, pero el financiamiento y la operacion estan fragmentados.
                FIRO integra estructura de leasing, despliegue, operacion, control de riesgo y visibilidad de pagos.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="thesis" className="bg-firo-bg py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Como funciona (alto nivel)
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">1. Financiar leasing</div>
              <p className="mt-2 text-firo-muted">
                El inversionista entra financiando una estructura de leasing mensual.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">2. Despliegue</div>
              <p className="mt-2 text-firo-muted">
                FIRO coloca unidades en ambientes de demanda con operacion supervisada.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">3. Seguimiento y pago</div>
              <p className="mt-2 text-firo-muted">
                Se registran bruto, neto operativo, cobertura de leasing y reparto mensual.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="roi" className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Estado actual
          </h2>
          <p className="mt-4 max-w-3xl text-firo-muted">
            Hoy estamos buscando inversionistas, idealmente vinculados a la industria de eventos
            y capitalistas estrategicos para escalar despliegue comercial.
          </p>
          <h3 className="mt-10 text-2xl font-semibold tracking-tight">Tesis / vision</h3>
          <p className="mt-3 max-w-3xl text-firo-muted">
            La robotica sera infraestructura operativa. Nuestra tesis es que el financiamiento
            por leasing + operacion disciplinada construye cashflow escalable y transparente.
          </p>
        </Container>
      </section>

      <section id="quote" className="bg-white py-20">
        <Container>
          <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Contacto
            </h2>
            <p className="mt-3 text-firo-muted">
              Deja tus datos y te compartimos resumen, supuestos y siguientes pasos.
            </p>

            <form
              action="https://formsubmit.co/santiagopsa@gmail.com"
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              <input type="hidden" name="_subject" value="FIRO About Page Contact (ES)" />
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
                Contactar a FIRO
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
