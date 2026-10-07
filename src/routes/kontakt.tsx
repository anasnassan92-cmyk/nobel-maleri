import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Nobel Måleri" },
      { name: "description", content: "Boka kostnadsfri besiktning i Stockholm med omnejd. Ring +46 70 143 42 26 eller mejla support@nobelmaleri.se." },
      { property: "og:title", content: "Kontakt — Nobel Måleri" },
      { property: "og:description", content: "Ring +46 70 143 42 26 eller skicka en förfrågan så återkommer vi samma dag." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Kontakt" title="Ta" emphasis="kontakt" crumb="Kontakt" />

      <section className="bg-paper py-24">
        <div className="container-tight">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow mb-4">Kostnadsfri besiktning</p>
            <h2 className="font-serif text-4xl text-navy md:text-5xl">
              Vi svarar <span className="em-serif">samma dag</span>.
            </h2>
            <p className="mt-4 text-ink-soft">
              Berätta lite om projektet — vi hör av oss inom några timmar och bokar in en tid som passar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { Icon: Phone, t: "Telefon", l: ["+46 70 143 42 26"] },
              { Icon: Mail, t: "E-post", l: ["support@nobelmaleri.se"] },
              { Icon: MapPin, t: "Område", l: ["Stockholm med omnejd"] },
            ].map(({ Icon, t, l }) => (
              <div key={t} className="bg-cream p-8 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-navy/20">
                  <Icon className="h-6 w-6 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-navy">{t}</h3>
                {l.map((line) => (
                  <p key={line} className="mt-1 text-sm text-ink-soft">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-14 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Skicka förfrågan</p>
              <h3 className="font-serif text-3xl text-navy">
                Berätta om <span className="em-serif">projektet</span>.
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" strokeWidth={1.5} />Vi svarar samma arbetsdag</li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" strokeWidth={1.5} />Kostnadsfri besiktning på plats inom 2 dagar</li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" strokeWidth={1.5} />Skriftlig offert med särredovisning inom 24 h</li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" strokeWidth={1.5} />30% ROT-avdrag hanteras direkt på fakturan</li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" strokeWidth={1.5} />Delbetalning via Klarna upp till 12 månader</li>
              </ul>
            </div>

            <form onSubmit={onSubmit} className="bg-cream p-8 space-y-4">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy text-cream">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="mt-6 font-serif text-2xl text-navy">Tack för din förfrågan</h4>
                  <p className="mt-2 text-sm text-ink-soft">Vi återkommer inom några timmar.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input required placeholder="Namn" className="w-full border border-navy/20 bg-paper px-4 py-3 text-sm placeholder:text-ink-soft/70 focus:border-navy focus:outline-none" />
                    <input required type="email" placeholder="E-post" className="w-full border border-navy/20 bg-paper px-4 py-3 text-sm placeholder:text-ink-soft/70 focus:border-navy focus:outline-none" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input placeholder="Telefon" className="w-full border border-navy/20 bg-paper px-4 py-3 text-sm placeholder:text-ink-soft/70 focus:border-navy focus:outline-none" />
                    <select className="w-full border border-navy/20 bg-paper px-4 py-3 text-sm text-ink focus:border-navy focus:outline-none">
                      <option>Typ av arbete</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                      <option>Annat</option>
                    </select>
                  </div>
                  <textarea rows={5} placeholder="Beskriv projektet kort" className="w-full border border-navy/20 bg-paper px-4 py-3 text-sm placeholder:text-ink-soft/70 focus:border-navy focus:outline-none" />
                  <button type="submit" className="w-full rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-cream hover:bg-navy-deep">
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
