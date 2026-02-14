"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

export default function HeroParallax() {
  const root = useRef<HTMLDivElement>(null);
  const layerBg = useRef<HTMLDivElement>(null);
  const layerParticles = useRef<HTMLDivElement>(null);
  const layerDashboard = useRef<HTMLDivElement>(null);
  const layerRobot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const mk = (el: HTMLDivElement | null, y: number) => {
        if (!el) return;
        gsap.to(el, {
          y,
          ease: "none",
          scrollTrigger: {
            trigger: root.current!,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      };

      mk(layerBg.current, 80);
      mk(layerParticles.current, 140);
      mk(layerDashboard.current, 110);
      mk(layerRobot.current, 60);

      gsap.fromTo(
        "[data-counter]",
        { innerText: 0 },
        {
          innerText: 3240,
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
      className="relative min-h-[100vh] overflow-hidden text-white bg-gradient-to-b from-firo-navy via-[#0B1430] to-[#070B14]"
    >
      <div ref={layerBg} className="absolute inset-0 opacity-80">
        <Image
          src="/assets/backgrounds/mesh.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div ref={layerParticles} className="absolute inset-0 opacity-35">
        <Image
          src="/assets/hero/particles.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <Container>
        <div className="relative z-10 flex min-h-[100vh] items-center py-16">
          <div className="grid w-full gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                <span className="h-2 w-2 rounded-full bg-firo-blue" />
                FIRO Robotic Assets
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                Robotic assets, <span className="text-firo-blue">real yield</span>.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Own or finance a robot. We operate it, place it in demand, and you
                track utilization, uptime and payouts in one dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#roi"
                  className="rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-95"
                >
                  Simulate return
                </a>
                <a
                  href="#quote"
                  className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Quote for an event
                </a>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 rounded-2xl bg-white/5 p-5">
                <Metric label="Est. monthly" value={<span>$<span data-counter>0</span></span>} />
                <Metric label="Utilization" value="42–65%" />
                <Metric label="Uptime" value="99.1%" />
              </div>

              <p className="mt-3 text-xs text-white/55">
                Estimates shown as ranges. Assumptions visible in ROI section.
              </p>
            </div>

            <div className="relative h-[520px] w-full md:h-[640px]">
              <div
                ref={layerDashboard}
                className="absolute left-0 top-10 w-[92%] md:top-16 md:w-[95%]"
              >
                <Image
                  src="/assets/hero/dashboard.png"
                  alt="FIRO dashboard mock"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl shadow-soft"
                  priority
                />
              </div>

              <div ref={layerRobot} className="absolute bottom-0 right-0 w-[64%] md:w-[60%]">
                <Image
                  src="/assets/hero/robot.png"
                  alt="FIRO robot illustration"
                  width={900}
                  height={1200}
                  className="w-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-firo-navy to-transparent" />
    </section>
  );
}

function Metric({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  );
}
