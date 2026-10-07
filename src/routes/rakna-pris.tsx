import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { Check, Calculator } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/rakna-pris")({
  head: () => ({
    meta: [
      { title: "Räkna pris — Nobel Måleri" },
      { name: "description", content: "Få en fingervisning om priset för ditt måleriprojekt. Fyll i några detaljer så återkommer vi med en skriftlig offert inom 24 timmar." },
      { property: "og:title", content: "Räkna pris — Nobel Måleri" },
      { property: "og:description", content: "Snabb prisuppskattning för fasadmålning, invändigt måleri och fönsterrenovering." },
    ],
  }),
  component: RaknaPris,
});

// Rough guide prices per m² (SEK) — used to give a ballpark, not a binding quote.
const RATES: Record<string, number> = {
  utomhusmaleri: 440,
  "invandig-malning": 280,
  "fonster-lack-spackel": 720,
};

function RaknaPris() {
  const [service, setService] = useState<keyof typeof RATES>("utomhusmaleri");
  const [area, setArea] = useState<number>(120);
  const [sent, setSent] = useState(false);

  const est = useMemo(() => {
    const gross = RATES[service] * area;
    const rot = Math.round(gross * 0.3);
    return { gross, rot, net: gross - rot };
  }, [service, area]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const fmt = (n: number) => new Intl.NumberFormat("sv-SE").format(n) + " kr";

  return (
    <>
      <PageHero eyebrow="Prisberäknare" title="Räkna" emphasis="pris" crumb="Räkna pris" />

      <section className="bg-paper py-24">
        <div className="container-tight">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-navy/20 text-navy">
              <Calculator className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl text-navy md:text-4xl">
              Snabb <span className="em-serif">uppskattning</span> — sedan en riktig offert.
            </h2>
            <p className="mt-4 text-ink-soft">
              Ange typ av arbete och ungefärlig yta så visar vi ett riktpris. Den bindande offerten
              lämnar vi efter en kostnadsfri besiktning på plats — inom 24 timmar.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Calculator */}
            <div className="bg-cream p-8">
              <p className="eyebrow mb-4">Riktpris</p>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-navy">Typ av arbete</label>
                  <div className="mt-3 grid gap-2">
                    {[
                      { v: "utomhusmaleri", l: "Utomhusmålning & fasad" },
                      { v: "invandig-malning", l: "Invändig målning" },
                      { v: "fonster-lack-spackel", l: "Fönster, lack & spackel" },
                    ].map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        onClick={() => setService(o.v as keyof typeof RATES)}
                        className={`flex items-center justify-between border px-4 py-3 text-left text-sm transition-colors ${
                          service === o.v
                            ? "border-navy bg-navy text-cream"
                            : "border-navy/20 bg-paper text-navy hover:bg-white"
                        }`}
                      >
                        {o.l}
                        {service === o.v && <Check className="h-4 w-4" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-navy">
                    Ungefärlig yta: <span className="em-serif">{area} m²</span>
                  </label>
                  <input
                    type="range"
                    min={20}
                    max={400}
                    step={10}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="mt-3 w-full accent-navy"
                  />
                  <div className="mt-1 flex justify-between text-xs text-ink-soft">
                    <span>20 m²</span><span>400 m²</span>
                  </div>
                </div>

                <div className="space-y-3 border-t border-navy/15 pt-6">
                  <Row label="Riktpris" value={fmt(est.gross)} />
                  <Row label="ROT-avdrag (30%)" value={`- ${fmt(est.rot)}`} muted />
                  <div className="flex items-baseline justify-between border-t border-navy/15 pt-4">
                    <span className="font-medium text-navy">Att betala</span>
                    <span className="font-serif text-3xl text-navy"><span className="em-serif">{fmt(est.net)}</span></span>
                  </div>
                  <p className="pt-2 text-xs text-ink-soft">
                    Detta är en ungefärlig uppskattning. Vi lämnar bindande offert efter besiktning.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="bg-navy p-8 text-cream space-y-4">
              <p className="eyebrow-cream mb-2">Boka besiktning</p>
              <h3 className="font-serif text-2xl">
                Få en <span className="em-serif">bindande offert</span> inom 24 h.
              </h3>
              {sent ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cream text-navy">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="mt-6 font-serif text-2xl">Tack för din förfrågan</h4>
                  <p className="mt-2 text-sm text-cream/80">Vi återkommer inom några timmar.</p>
                </div>
              ) : (
                <>
                  <input required placeholder="Namn" className="w-full border border-cream/20 bg-navy-deep px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream focus:outline-none" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input required type="email" placeholder="E-post" className="w-full border border-cream/20 bg-navy-deep px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream focus:outline-none" />
                    <input placeholder="Telefon" className="w-full border border-cream/20 bg-navy-deep px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream focus:outline-none" />
                  </div>
                  <input placeholder="Adress för besiktning" className="w-full border border-cream/20 bg-navy-deep px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream focus:outline-none" />
                  <textarea rows={4} placeholder="Kort beskrivning av projektet" className="w-full border border-cream/20 bg-navy-deep px-4 py-3 text-sm placeholder:text-cream/50 focus:border-cream focus:outline-none" defaultValue={`Intresserad av ${service === "utomhusmaleri" ? "utomhusmålning" : service === "invandig-malning" ? "invändig målning" : "fönster/lack/spackel"} ca ${area} m².`} />
                  <button type="submit" className="w-full rounded-sm bg-cream px-6 py-3.5 text-sm font-medium text-navy hover:bg-white">
                    Skicka förfrågan
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between text-sm">
      <span className={muted ? "text-ink-soft" : "text-navy"}>{label}</span>
      <span className={muted ? "text-ink-soft" : "text-navy font-medium"}>{value}</span>
    </div>
  );
}
