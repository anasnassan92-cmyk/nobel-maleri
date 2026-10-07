import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AlcroSection } from "@/components/site/AlcroSection";
import { media } from "@/assets/media";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — Nobel Måleri" },
      { name: "description", content: "Nobel Måleri är en Stockholmsbaserad målerifirma. Alcro-certifierade hantverkare med 10 års garanti på utomhusarbete." },
      { property: "og:title", content: "Om oss — Nobel Måleri" },
      { property: "og:description", content: "Målerifirma i Stockholm med omnejd. Hantverk, tydlighet och hållbarhet." },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Hantverk", d: "Varje prep-steg görs — skrapning, spackling, grundolja, två toppstrykningar. Aldrig genvägar." },
  { t: "Tydlighet", d: "Offerter där arbete och material särredovisas. ROT visas direkt på fakturan. Inga överraskningar." },
  { t: "Hållbarhet", d: "Alcro Bestå på varje fasad. 10 års garanti som vi står för — och infriar." },
  { t: "Lugn", d: "Vi säljer inte in. Arbetet talar. Vi svarar på frågor och överdriver aldrig." },
  { t: "Respekt", d: "För hemmet, kunden och yrket. Golv täcks. Vi städar efter oss varje dag." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="Om oss" title="En målerifirma byggd på" emphasis="hantverk" crumb="Om oss" />

      <section className="bg-paper py-24">
        <div className="container-tight grid items-start gap-14 md:grid-cols-2">
          <div className="relative">
            <img src={media.aboutTeam} alt="Nobel Måleri på arbete" width={1400} height={1000} loading="lazy" className="w-full" />
            <img src={media.aboutDetail} alt="Detaljarbete" width={1200} height={900} loading="lazy" className="absolute -bottom-10 -right-6 hidden w-48 border-8 border-paper md:block" />
          </div>
          <div>
            <p className="eyebrow mb-4">Vår historia</p>
            <h2 className="font-serif text-4xl text-navy md:text-5xl">
              Målare för dem som ser <span className="em-serif">huset</span> som ett arv.
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
              <p>
                Nobel Måleri är en Stockholmsbaserad målerifirma med fokus på kvalitet och hållbarhet.
                Vi är ett litet, samspelt team som arbetar i hela Stockholm med omnejd — med samma
                princip från början: gör det ordentligt, en gång.
              </p>
              <p>
                Vi tar inte de största projekten. Vi tar de rätta. Det innebär att vi ibland tackar nej
                — men aldrig att vi lämnar ett jobb halvgjort.
              </p>
              <p>
                Vi är Alcro-certifierade fasadexperter, F-skattade och försäkrade. Vi hanterar 30%
                ROT-avdrag direkt på fakturan, och vi står bakom vår garanti — 10 år på utomhus,
                2 år invändigt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AlcroSection />

      <section className="bg-cream py-24">
        <div className="container-tight">
          <div className="mb-14 text-center">
            <p className="eyebrow mb-4">Våra värderingar</p>
            <h2 className="font-serif text-4xl text-navy md:text-5xl">
              Fem ord som <span className="em-serif">styr</span> vårt arbete.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div key={v.t} className="border-t border-navy/20 pt-6">
                <p className="font-serif text-sm text-ink-soft">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-2xl text-navy">{v.t}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
