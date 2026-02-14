import Image from "next/image";

export default function Nav() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-firo-navy/70 px-4 py-3 text-white backdrop-blur">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/assets/brand/firo-logo.png"
              alt="FIRO"
              width={120}
              height={36}
              priority
              className="h-7 w-auto"
            />
            <span className="hidden text-sm text-white/60 md:inline">
              Robotic Assets
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#thesis" className="hover:text-white">Thesis</a>
            <a href="#roi" className="hover:text-white">ROI</a>
            <a href="#quote" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#quote"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
            >
              Get a quote
            </a>
            <a
              href="#quote"
              className="rounded-xl bg-firo-blue px-4 py-2 text-sm font-semibold hover:opacity-95"
            >
              Talk to FIRO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
