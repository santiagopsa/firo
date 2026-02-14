import Nav from "@/components/Nav";
import HeroParallax from "@/components/sections/HeroParallax";
import StickySwap from "@/components/sections/StickySwap";
import RoiCalc from "@/components/sections/RoiCalc";

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <HeroParallax />
      <div id="thesis">
        <StickySwap />
      </div>
      <RoiCalc />
      <div id="quote" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-3xl border border-firo-line bg-firo-bg p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Get a quote / Join the owner waitlist
            </h2>
            <p className="mt-2 text-firo-muted">
              Tell us what you need. We’ll respond with availability, pricing, and next steps.
            </p>

            {/* MVP: replace this button with your Tally/Typeform link */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@firo.ai?subject=FIRO%20Inquiry"
                className="rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Email FIRO
              </a>
              <a
                href="#roi"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-95"
              >
                Re-check ROI
              </a>
            </div>

            <div className="mt-4 text-xs text-firo-muted">
              Tip: swap the mailto with a Tally form for better conversion tracking.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
