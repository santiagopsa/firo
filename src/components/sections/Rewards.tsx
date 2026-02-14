import Image from "next/image";
import Container from "../ui/Container";

export default function Rewards() {
  return (
    <section id="rewards" className="bg-firo-navy py-24 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-firo-blue">Rewards</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Investor returns with transparent operations.
            </h2>
            <p className="mt-4 text-white/70">
              Pricing is modeled in scenarios with one operator per active robot day. Base case
              assumes 10 days/month and focuses on healthy investor margins from real deployments.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title="Target annual yield" value="~76%" />
              <Loot title="Operator model" value="1 per active day" />
              <Loot title="Investor payout (base)" value="$2,464" />
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
