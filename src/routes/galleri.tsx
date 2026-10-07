import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PORTFOLIO_IMAGES, PORTFOLIO_VIDEOS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri — Nobel Måleri" },
      { name: "description", content: "Vårt galleri — bilder och videor från utförda måleriprojekt i Stockholm med omnejd." },
      { property: "og:title", content: "Galleri — Nobel Måleri" },
      { property: "og:description", content: "Bilder och videor från våra projekt." },
    ],
  }),
  component: Galleri,
});

function Galleri() {
  return (
    <>
      <PageHero eyebrow="Vårt arbete" title="Vårt" emphasis="galleri" crumb="Galleri" />
      <section className="bg-paper py-20">
        <div className="container-tight">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-ink-soft">
              Ett urval av utförda projekt — fasader, invändigt måleri, fönsterrenovering och detaljer
              från arbetsdagen.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_VIDEOS.map((src, i) => (
              <div key={`v-${i}`} className="aspect-[4/3] overflow-hidden bg-navy-deep">
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            {PORTFOLIO_IMAGES.map((src, i) => (
              <div key={`i-${i}`} className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={src}
                  alt=""
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
