import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";
import { getFaqPageSchema } from "@/lib/seoSchemas";

const thesisPoints = [
  "Humanoid robotics has moved from demos into real commercial deployments.",
  "Demand for operational continuity is rising across events, venues, and service environments.",
  "The asset + operations model enables transparent utilization, uptime, and payout tracking.",
];

const economics = [
  { label: "Unit entry price", value: "$44,000" },
  { label: "Base scenario (investor)", value: "$2,464 / month" },
  { label: "Target annual yield", value: "~67%" },
  { label: "Target utilization", value: "10+ days / month" },
];

const risks = [
  {
    risk: "Commercial demand risk",
    mitigation: "Vertical-specific pipeline, partner agreements, and initial focus on high-frequency use cases.",
  },
  {
    risk: "Operational variability",
    mitigation: "Dedicated operator per active day, standard operating playbooks, and preventive maintenance.",
  },
  {
    risk: "Technology reliability risk",
    mitigation: "Remote monitoring, telemetry, and replacement/backup plans by unit.",
  },
  {
    risk: "Compliance and reputation risk",
    mitigation: "Geofencing, supervised operation, privacy policy, and safety protocols.",
  },
];

const competitors = [
  {
    model: "One-off robot rental",
    strengths: "Fast to launch for isolated activations",
    limits: "Low data continuity and limited investor visibility",
  },
  {
    model: "Traditional systems integrator",
    strengths: "Technical depth and customization",
    limits: "Usually project-focused, not recurring asset yield-focused",
  },
  {
    model: "FIRO (asset + operations)",
    strengths: "Cashflow-oriented model with operational and payout tracking",
    limits: "Requires strong operational discipline to scale with quality",
  },
];

const faqs = [
  {
    q: "How is investor payout calculated?",
    a: "We start with monthly gross revenue, subtract operator and operating costs, and then apply the investor share to net results.",
  },
  {
    q: "What happens if utilization drops?",
    a: "Payout declines proportionally. That is why we present scenario ranges (conservative/base/upside) rather than fixed promises.",
  },
  {
    q: "Who runs day-to-day operations?",
    a: "FIRO manages deployment, operator staffing, scheduling, and operating control across active days.",
  },
  {
    q: "Are returns guaranteed?",
    a: "No. These are scenario-based projections with transparent operating assumptions.",
  },
];

export const metadata: Metadata = {
  title: "FIRO Investors | Thesis, unit economics, risks, and FAQ",
  description:
    "Investor brief covering FIRO market thesis, unit economics, risk mitigation, competitive map, and direct investor contact.",
  alternates: {
    canonical: "/investors",
  },
  openGraph: {
    title: "FIRO Investors | Thesis, unit economics, risks, and FAQ",
    description:
      "Explore FIRO investor model with transparent assumptions, risk controls, and contact form.",
    url: "/investors",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "FIRO investor brief",
      },
    ],
  },
};

export default function InvestorsPage() {
  const faqSchema = getFaqPageSchema(
    faqs.map((item) => ({
      question: item.q,
      answer: item.a,
    }))
  );

  return (
    <main id="top">
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-firo-navy via-[#0B1430] to-[#070B14] pb-20 pt-28 text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-firo-blue">Investors</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              FIRO investor brief.
            </h1>
            <p className="mt-5 text-white/75 md:text-lg">
              Reference page for evaluating thesis, unit economics, risk controls,
              competitive map, and direct investor contact.
            </p>
          </div>
        </Container>
      </section>

      <section id="thesis" className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Thesis: why this market now
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
            Model and unit economics
          </h2>
          <p className="mt-4 text-firo-muted">
            Base scenario with managed operations and investor-pocketed monthly focus.
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
            Note: scenario-based projections, not guarantees.
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Risks and mitigations
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
            Competitive map
          </h2>
          <p className="mt-4 text-firo-muted">
            Neutral comparison of current market approaches.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-firo-line bg-white">
            <table className="w-full min-w-[720px] text-left">
              <thead className="border-b border-firo-line bg-firo-bg">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold">Model</th>
                  <th className="px-5 py-4 text-sm font-semibold">Strength</th>
                  <th className="px-5 py-4 text-sm font-semibold">Limitation</th>
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
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Investor FAQ</h2>
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
              Investor contact
            </h2>
            <p className="mt-3 text-firo-muted">
              Share your details and we will send the investor brief with assumptions and next steps.
            </p>

            <form
              id="quote"
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
                Request investor information
              </button>
            </form>

            <div className="mt-4 text-xs text-firo-muted">
              Scenario-based projections. Not a guarantee of returns.
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
