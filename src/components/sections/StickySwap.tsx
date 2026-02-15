"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Leasing model", desc: "Structured leasing, clear utilization, measurable uptime." },
  { title: "Demand placement", desc: "We place robots where budgets already exist: events first." },
  { title: "Operations moat", desc: "Maintenance, remote ops, compliance and scheduling." },
  { title: "Capability unlocks", desc: "More tasks over time via software + playbooks." },
];
const cardsEs = [
  { title: "Modelo de leasing", desc: "Leasing estructurado, utilizacion clara y uptime medible." },
  { title: "Colocacion de demanda", desc: "Ubicamos robots donde ya existe presupuesto: primero eventos." },
  { title: "Moat operativo", desc: "Mantenimiento, operacion remota, cumplimiento y agenda." },
  { title: "Desbloqueos de capacidad", desc: "Mas tareas con el tiempo via software y playbooks." },
];

type StickySwapProps = {
  locale?: "en" | "es";
};

export default function StickySwap({ locale = "en" }: StickySwapProps) {
  const isEs = locale === "es";
  const cardsToRender = isEs ? cardsEs : cards;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-swap-item]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="text-sm font-semibold text-firo-blue">{isEs ? "La tesis" : "The thesis"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "La proxima clase de activos es operativa." : "The next asset class is operational."}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "Empezamos en entornos controlados con presupuestos claros (eventos), luego expandimos capacidades a medida que maduran los playbooks de software."
                : "We start in controlled environments with clear budgets (events), then expand capabilities as software playbooks mature."}
            </p>
          </div>

          <div className="grid gap-4">
            {cardsToRender.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-firo-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
