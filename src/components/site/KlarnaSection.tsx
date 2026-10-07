import { media } from "@/assets/media";

export function KlarnaSection() {
  return (
    <section className="bg-cream-warm py-20">
      <div className="container-tight grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow mb-4">Delbetalning</p>
          <h2 className="font-serif text-3xl text-navy md:text-4xl">
            Dela upp betalningen med <span className="em-serif">Klarna</span> — upp till 12 månader.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Vi erbjuder trygg delbetalning genom Klarna på hela ditt måleriprojekt. Välj den plan som
            passar din budget — utan krångel, ansökan görs direkt när du får din faktura.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={media.klarnaLogo}
            alt="Klarna"
            className="h-16 w-auto object-contain md:h-20"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
