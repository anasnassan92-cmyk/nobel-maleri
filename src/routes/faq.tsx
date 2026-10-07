import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Vanliga frågor — Nobel Måleri" },
      { name: "description", content: "Svar på vanliga frågor om måleriarbete, ROT-avdrag, garantier och tidsplanering." },
      { property: "og:title", content: "Vanliga frågor — Nobel Måleri" },
      { property: "og:description", content: "Vi svarar på det ni brukar undra över — ROT, garanti, färger och process." },
    ],
  }),
  component: FAQ,
});

const GROUPS = [
  {
    title: "Om arbetet",
    items: [
      { q: "När är bästa tiden att måla utomhus?", a: "Stadigt över 10°C dag och natt, och torrt trä. I Stockholm innebär det oftast maj till september. Boka gärna i februari så får du önskad tid." },
      { q: "Hur lång tid tar en fasadmålning?", a: "En normal villa tar 2–3 veckor beroende på skick, väder och detaljer. Vi lämnar tidsplan i offerten och håller den." },
      { q: "Vilken färg använder ni?", a: "Alcro Bestå på fasad — vi är certifierade fasadexperter av Alcro. Invändigt använder vi emissionsfria kvalitetsfärger." },
      { q: "Behöver jag flytta möbler själv?", a: "Nej. Vi flyttar möbler, täcker golv och skyddar alla ytor. Du behöver bara plocka undan personliga småsaker." },
    ],
  },
  {
    title: "Pris & garanti",
    items: [
      { q: "Hur får jag en offert?", a: "Boka en kostnadsfri besiktning. Vi kommer ut inom två arbetsdagar och skickar skriftlig offert inom 24 timmar." },
      { q: "Hur fungerar ROT-avdraget?", a: "Vi drar 30% ROT-avdrag direkt på fakturan. Du behöver inte ansöka själv." },
      { q: "Hur lång garanti får jag?", a: "10 år på utomhusarbete och 2 år invändigt. Skulle något gå fel återkommer vi och åtgärdar — utan extra kostnad." },
      { q: "Går det att dela upp betalningen?", a: "Ja. Vi erbjuder delbetalning genom Klarna i upp till 12 månader." },
    ],
  },
];

function FAQ() {
  return (
    <>
      <PageHero eyebrow="Vanliga frågor" title="Frågor och" emphasis="svar" crumb="FAQ" />

      <section className="bg-paper py-24">
        <div className="container-tight">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-4xl text-navy md:text-5xl">
              Det ni <span className="em-serif">ofta</span> frågar om.
            </h2>
            <p className="mt-4 text-ink-soft">
              Hittar du inte svaret? Ring oss på +46 70 143 42 26 eller mejla support@nobelmaleri.se så återkommer vi samma dag.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-2">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h3 className="mb-6 font-serif text-2xl text-navy">{g.title}</h3>
                <div className="space-y-3">
                  {g.items.map((it, i) => (
                    <FAQItem key={it.q} q={it.q} a={it.a} defaultOpen={i === 0} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-navy/15 bg-cream">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-navy">{q}</span>
        <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-navy text-cream">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="border-t border-navy/10 px-5 py-4 text-sm text-ink-soft leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
