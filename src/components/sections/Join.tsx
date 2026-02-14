import Container from "../ui/Container";

export default function Join() {
  return (
    <section id="join" className="bg-white py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold text-firo-blue">Investor action</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Invest in the robotics economy.
              </h2>
              <p className="mt-3 text-firo-muted">
                Join the investor waitlist to receive scenario assumptions, payout modeling, and onboarding details.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:hello@firo.ai?subject=FIRO%20Owner%20Waitlist"
                className="rounded-2xl bg-white p-6 shadow-soft hover:opacity-95"
              >
                <div className="text-lg font-semibold">Join the Investor Waitlist</div>
                <div className="mt-1 text-firo-muted">
                  I want investor documents, expected payout scenarios, and next-step onboarding.
                </div>
              </a>

              <a
                href="mailto:hello@firo.ai?subject=FIRO%20Event%20Quote"
                className="rounded-2xl bg-firo-navy p-6 text-white shadow-soft hover:opacity-95"
              >
                <div className="text-lg font-semibold">I’m a deployment partner</div>
                <div className="mt-1 text-white/70">
                  I can place robots and want to discuss demand, contracts, and scheduling.
                </div>
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            For qualified investors. Projections shown are scenario-based and not guarantees.
          </div>
        </div>
      </Container>
    </section>
  );
}
