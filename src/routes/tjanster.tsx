import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Tjänster — Nobel Måleri" },
      { name: "description", content: "Allt vi gör — utomhusmålning, invändig målning, fönsterkittning, lackering och spackling. Alcro-certifierade fasadexperter i Stockholm." },
      { property: "og:title", content: "Tjänster — Nobel Måleri" },
      { property: "og:description", content: "Komplett måleriservice för villa och hem i Stockholmsområdet." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Tjänster" title="Allt vi gör" emphasis="— och hur" crumb="Tjänster" />

      <section className="bg-paper py-20">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Vår specialitet</p>
            <p className="text-ink-soft leading-relaxed">
              Vi är specialiserade på måleri och erbjuder allt från fasadmålning till fönsterkittning.
              Allt utförs av samma sammansvetsade team.
            </p>
          </div>
        </div>
      </section>

      {SERVICES.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <section
            key={s.slug}
            className={`${i % 2 === 0 ? "bg-cream" : "bg-paper"} py-24`}
          >
            <div className="container-tight grid items-center gap-14 md:grid-cols-2">
              <div className={reverse ? "md:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className={reverse ? "md:order-1" : ""}>
                <p className="eyebrow mb-3">0{i + 1} — Tjänst</p>
                <h2 className="font-serif text-4xl text-navy md:text-5xl">{s.title}</h2>
                <p className="mt-6 text-ink-soft leading-relaxed">{s.intro}</p>

                <ul className="mt-8 space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 border-t border-navy/10 pt-3 text-ink">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-navy" strokeWidth={2} />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to={s.ctaTo}
                    className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-cream hover:bg-navy-deep"
                  >
                    {s.ctaLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/tjanster/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 rounded-sm border border-navy/20 px-6 py-3.5 text-sm font-medium text-navy hover:bg-navy/5"
                  >
                    Läs mer om tjänsten <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-navy-deep py-20 text-cream">
        <div className="container-tight text-center">
          <p className="eyebrow-cream mb-4">Osäker på vad du behöver?</p>
          <h2 className="mx-auto max-w-2xl font-serif text-4xl md:text-5xl">
            Vi kommer ut och tittar — <span className="em-serif">helt kostnadsfritt</span>.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/kontakt" className="rounded-sm bg-cream px-6 py-3.5 text-sm font-medium text-navy hover:bg-white">
              Kontakta oss
            </Link>
            <Link to="/rakna-pris" className="rounded-sm border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream hover:bg-cream/5">
              Räkna pris
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
