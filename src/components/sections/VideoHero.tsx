"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type VideoHeroProps = {
  locale?: "en" | "es";
};

export default function VideoHero({ locale = "en" }: VideoHeroProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-counter]",
        { innerText: 0 },
        {
          innerText: 2464,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: root.current!, start: "top 70%" },
        } as any
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100vh] overflow-hidden bg-firo-navy text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/firo-hero-poster.jpg"
      >
        <source src="/video/firo-hero.webm" type="video/webm" />
        <source src="/video/firo-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-firo-navy/85" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,.9) 0, rgba(255,255,255,.9) 1px, transparent 2px, transparent 7px)",
        }}
      />

      <Container>
        <div className="relative z-10 flex min-h-[100vh] items-center py-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs text-white/70">
              <a
                href="/"
                className={`rounded-md px-2 py-1 hover:text-white ${
                  !isEs ? "bg-white/10 text-white" : ""
                }`}
              >
                EN
              </a>
              <a
                href="/es"
                className={`rounded-md px-2 py-1 hover:text-white ${
                  isEs ? "bg-white/10 text-white" : ""
                }`}
              >
                ES
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-firo-blue" />
              {isEs ? "Activos Robóticos FIRO" : "FIRO Robotic Assets"}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {isEs ? (
                <>
                  Despliega.{" "}
                  <span className="text-firo-blue drop-shadow-[0_0_22px_rgba(37,99,255,.45)]">
                    Opera.
                  </span>{" "}
                  Gana.
                </>
              ) : (
                <>
                  Deploy.{" "}
                  <span className="text-firo-blue drop-shadow-[0_0_22px_rgba(37,99,255,.45)]">
                    Operate.
                  </span>{" "}
                  Earn.
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {isEs
                ? "Las unidades gestionadas comienzan alrededor de $44k. Los retornos se muestran como escenarios objetivo, no como garantías, e incluyen un operador dedicado por cada día activo del robot."
                : "Managed units typically start around $44k. Returns are shown as scenario targets, not guarantees, and include a dedicated operator on every active robot day."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/investors"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                {isEs ? "Ver resumen para inversionistas" : "View investor brief"}
              </a>
              <a
                href="#roi"
                className="rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-95"
              >
                {isEs ? "Simular ROI para inversionistas" : "Run investor ROI simulation"}
              </a>
              <a
                href="#join"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                {isEs ? "Unirme a la lista de inversionistas" : "Join the investor waitlist"}
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
              <Metric
                label={isEs ? "Ingreso mensual estimado" : "Estimated monthly revenue"}
                value={
                  <span>
                    $<span data-counter>0</span>
                  </span>
                }
              />
              <Metric label={isEs ? "Retorno objetivo" : "Target payback"} value={isEs ? "~16 meses" : "~16 months"} />
              <Metric label={isEs ? "Uso objetivo" : "Target use"} value={isEs ? "10+ dias/mes" : "10+ days/mo"} />
            </div>

            <p className="mt-3 text-xs text-white/55">
              {isEs
                ? "Para inversionistas calificados. Proyecciones basadas en escenarios, no garantías."
                : "For qualified investors. Scenario-based projections, not guarantees."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  );
}
