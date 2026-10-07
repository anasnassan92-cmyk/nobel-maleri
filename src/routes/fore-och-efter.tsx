import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { media } from "@/assets/media";

export const Route = createFileRoute("/fore-och-efter")({
  head: () => ({
    meta: [
      { title: "Före & Efter — Nobel Måleri" },
      { name: "description", content: "Se skillnaden — före och efter våra måleriprojekt i Stockholm med omnejd. Dra i handtaget för att jämföra." },
      { property: "og:title", content: "Före & Efter — Nobel Måleri" },
      { property: "og:description", content: "Se skillnaden i våra utvalda måleriprojekt." },
    ],
  }),
  component: BeforeAfterPage,
});

function BeforeAfterPage() {
  return (
    <>
      <PageHero eyebrow="Se skillnaden" title="Före &" emphasis="Efter" crumb="Före & Efter" />

      <section className="bg-paper py-24">
        <div className="container-tight">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-ink-soft">
              Dra i handtaget för att jämföra före och efter. Alla projekt är utförda av vårt team med
              Alcro Bestå-systemet.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {media.ba.map((pair, i) => (
              <BeforeAfter
                key={i}
                before={pair.before}
                after={pair.after}
                label={`Projekt 0${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
