import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About FIRO | Thesis and leasing operating model",
  description:
    "Learn what FIRO is, who it serves, the problem it solves, how the leasing model works, and why robotics cashflow is a timely opportunity.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About FIRO | Thesis and leasing operating model",
    description:
      "FIRO overview for investors and technology enthusiasts: market thesis, operations model, risks, and contact.",
    url: "/about",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "FIRO company and model overview",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main id="top">
      <Nav />

      <section className="bg-gradient-to-b from-firo-navy via-[#0B1430] to-[#070B14] pb-20 pt-28 text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-firo-blue">About FIRO</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Humanoid robotics, structured for leasing-backed cashflow.
            </h1>
            <p className="mt-5 text-white/75 md:text-lg">
              FIRO converts humanoid robots into leasing-backed operating assets: clear deployment,
              transparent metrics, and scenario-based investor payouts.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-firo-line bg-firo-bg p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Who FIRO is for</h2>
              <p className="mt-3 text-firo-muted">
                Investors looking for exposure to robotics cashflow, and technology enthusiasts
                who want to participate in the transition toward robotic operations.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-firo-bg p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Problem we solve</h2>
              <p className="mt-3 text-firo-muted">
                Robotics demand is increasing, but operating execution and financing are fragmented.
                FIRO unifies leasing structure, deployment, operator workflows, risk controls, and payout visibility.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="thesis" className="bg-firo-bg py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How it works (high-level)
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">1. Finance lease</div>
              <p className="mt-2 text-firo-muted">
                Investor enters by funding a monthly lease structure.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">2. Deploy</div>
              <p className="mt-2 text-firo-muted">
                FIRO places units in demand environments with operator-led execution.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">3. Track & payout</div>
              <p className="mt-2 text-firo-muted">
                Gross, operating net, lease coverage, and payout splits are tracked monthly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="roi" className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Current status
          </h2>
          <p className="mt-4 max-w-3xl text-firo-muted">
            We are currently onboarding investors and prioritizing deployment in the events industry,
            while opening conversations with strategic capital partners and operators.
          </p>
          <h3 className="mt-10 text-2xl font-semibold tracking-tight">Thesis / vision</h3>
          <p className="mt-3 max-w-3xl text-firo-muted">
            Robotics will become core operating infrastructure. Our thesis is that leasing-backed
            financing plus disciplined operations creates durable, transparent, and scalable cashflow.
          </p>
        </Container>
      </section>

      <section id="quote" className="bg-white py-20">
        <Container>
          <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Contact FIRO
            </h2>
            <p className="mt-3 text-firo-muted">
              Share your details and we will send the investor overview and next steps.
            </p>

            <form
              action="https://formsubmit.co/santiagopsa@gmail.com"
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              <input type="hidden" name="_subject" value="FIRO About Page Contact" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                name="name"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Name"
              />
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Email"
              />
              <input
                name="phone"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Phone"
              />

              <button
                type="submit"
                className="md:col-span-3 rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Join investor waitlist
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
