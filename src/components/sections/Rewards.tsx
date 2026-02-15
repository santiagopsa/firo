import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="rewards" className="bg-firo-navy py-24 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-firo-blue">{isEs ? "Retornos" : "Rewards"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Retornos para inversionistas bajo modelo leasing." : "Investor returns under a leasing-first model."}
            </h2>
            <p className="mt-4 text-white/70">
              {isEs
                ? "En lugar de comprar el robot, el inversionista financia un leasing mensual y FIRO opera para generar ingresos. El escenario base asume 10 dias/mes, operador dedicado y costos operativos visibles."
                : "Instead of buying the robot, the investor funds a monthly lease and FIRO runs operations to generate income. Base case assumes 10 days/month, a dedicated operator, and transparent operating costs."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title={isEs ? "Leasing mensual (base)" : "Monthly lease (base)"} value="$1,500" />
              <Loot title={isEs ? "Contrato minimo" : "Minimum contract"} value={isEs ? "24 meses" : "24 months"} />
              <Loot title={isEs ? "Neto inversionista (base)" : "Investor net (base)"} value="$1,414" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[40px] bg-firo-blue/15 blur-3xl" />
            <Image
              src="/assets/hero/dashboard.png"
              alt="FIRO dashboard"
              width={1400}
              height={900}
              className="relative w-full rounded-3xl shadow-soft"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Loot({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-semibold text-white/60">{title}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
