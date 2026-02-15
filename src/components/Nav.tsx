import Image from "next/image";

type NavProps = {
  locale?: "en" | "es";
};

export default function Nav({ locale = "en" }: NavProps) {
  const isEs = locale === "es";

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-firo-navy/70 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="inline-flex items-center" aria-label="Go to top">
          <Image
            src="/assets/brand/firo-logo.png"
            alt="FIRO"
            width={150}
            height={45}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a href="/investors" className="hover:text-white">{isEs ? "Inversionistas" : "Investors"}</a>
          <a href="#thesis" className="hover:text-white">{isEs ? "Tesis" : "Thesis"}</a>
          <a href="#roi" className="hover:text-white">ROI</a>
          <a href="#quote" className="hover:text-white">{isEs ? "Contacto" : "Contact"}</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={isEs ? "/" : "/es"}
            className="rounded-lg px-2 py-1 text-xs text-white/70 hover:text-white"
          >
            {isEs ? "EN" : "ES"}
          </a>
          <a
            href="#quote"
            className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 md:px-4"
          >
            {isEs ? "Cotizar" : "Get a quote"}
          </a>
          <a
            href="#quote"
            className="rounded-xl bg-firo-blue px-3 py-2 text-sm font-semibold hover:opacity-95 md:px-4"
          >
            {isEs ? "Hablar con FIRO" : "Talk to FIRO"}
          </a>
        </div>
      </div>
    </div>
  );
}
