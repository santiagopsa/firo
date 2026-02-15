import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-white py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-sm font-semibold text-firo-blue">{isEs ? "Accion para inversionistas" : "Investor action"}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs ? "Financia leasing en la economia robotica." : "Fund leasing in the robotics economy."}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Unete a la lista para recibir escenarios de leasing, supuestos operativos y detalles de onboarding para inversionistas (contrato minimo de 24 meses)."
                  : "Join the waitlist to receive leasing scenarios, operating assumptions, and investor onboarding details (24-month minimum contract)."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <form
                action="https://formsubmit.co/santiagopsa@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="FIRO Investor Waitlist" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="email">
                    {isEs ? "Correo electronico" : "Email"}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "tu@email.com" : "you@email.com"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="phone">
                    {isEs ? "Telefono" : "Phone"}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "+57 300 000 0000" : "+1 (555) 000-0000"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  {isEs ? "Unirme a la lista de inversionistas" : "Join the Investor Waitlist"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Para inversionistas calificados. Las proyecciones se basan en escenarios y no son garantias."
              : "For qualified investors. Projections shown are scenario-based and not guarantees."}
          </div>
        </div>
      </Container>
    </section>
  );
}
