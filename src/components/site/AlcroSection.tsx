import { ArrowRight } from "lucide-react";
import { media } from "@/assets/media";

export function AlcroSection() {
  return (
    <section className="bg-navy-deep py-24 text-cream">
      <div className="container-tight grid items-center gap-12 md:grid-cols-[auto_1fr]">
        <div className="mx-auto flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-cream p-6 md:h-56 md:w-56">
          <img
            src={media.alcroBadge}
            alt="Alcro Certifierad Fasadexpert"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow-cream mb-4">Alcro-certifierade fasadexperter</p>
          <h2 className="font-serif text-4xl md:text-5xl">
            Vi målar uteslutande med <span className="em-serif">Alcro Bestå</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-cream/80 leading-relaxed">
            Vi är Alcro-certifierade fasadexperter — utbildade och godkända av Alcro. Det betyder att vi
            har genomgått Alcros utbildning, känner produkterna in och ut, och garanterar resultat som
            håller. Alcro Bestå är fasadsystemet framtaget för nordiskt klimat — regn, sol, snö och
            saltvindar.
          </p>
          <a
            href="https://www.alcro.se/produkter/utomhus/besta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 border-b border-cream/40 pb-1 text-sm text-cream hover:border-cream"
          >
            Läs om Alcro Bestå <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
