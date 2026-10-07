import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, ShieldCheck, Clock, Award, Leaf, Star } from "lucide-react";
import { media } from "@/assets/media";
import { SERVICES } from "@/lib/services-data";
import { AlcroSection } from "@/components/site/AlcroSection";
import { KlarnaSection } from "@/components/site/KlarnaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nobel Måleri — Alcro-certifierade fasadexperter i Stockholm" },
      { name: "description", content: "Professionellt måleri i Stockholm med omnejd. Alcro-certifierade fasadexperter — utomhusmålning, invändig målning och fönsterkittning. 10 års garanti." },
      { property: "og:title", content: "Nobel Måleri — Alcro-certifierade fasadexperter i Stockholm" },
      { property: "og:description", content: "Utomhusmålning, invändig målning och fönsterkittning. 10 års garanti och 30% ROT-avdrag direkt på fakturan." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const REVIEWS = [
  { q: "Resultatet ser ut som ett helt nytt hus. Grannarna frågar hela tiden vem som målat.", n: "Anders", loc: "Värmdö" },
  { q: "Tydlig offert, tydlig tidsplan, tydligt utfört. Precis så man önskar att alla hantverkare arbetade.", n: "Karin", loc: "Bromma" },
  { q: "Flera år efter fasaden målades — den ser fortfarande ut som ny. Det säger allt.", n: "Mattias", loc: "Nacka" },
  { q: "Otroligt noggranna med förarbetet. Skrapade, spacklade och grundade innan penseln kom fram.", n: "Sofia", loc: "Täby" },
  { q: "Vi bytte färg på hela huset. Killarna var på plats i tid varje morgon och lämnade allt städat.", n: "Erik", loc: "Lidingö" },
  { q: "Fönsterkittningen är verkligen ett hantverk. De ser bättre ut än när huset byggdes.", n: "Helena", loc: "Djursholm" },
  { q: "Sprutmålningen av köksluckorna sparade oss ett helt nytt kök. Perfekt finish.", n: "Johan", loc: "Sollentuna" },
  { q: "Prisvärt och riktigt professionellt. ROT-avdraget drogs direkt — inga överraskningar.", n: "Maria", loc: "Solna" },
  { q: "Alcro Bestå på fasaden — man ser skillnaden. Färgen sitter som den ska efter tre vintrar.", n: "Per", loc: "Vaxholm" },
  { q: "Riktigt trevligt team. Berättade vad de gjorde varje steg och tog hänsyn till våra barn hemma.", n: "Anna", loc: "Danderyd" },
  { q: "Vi fick offert samma dag som besiktningen. Snabbt, transparent och exakt som utlovat.", n: "Fredrik", loc: "Åkersberga" },
  { q: "Rekommenderar dem varmt. Bäst kvalitet vi haft av alla hantverkare vi anlitat.", n: "Cecilia", loc: "Saltsjöbaden" },
];

function ReviewSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setIndex(i);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const nearest = children.reduce((best, el, i) => {
        const d = Math.abs(el.offsetLeft - track.scrollLeft - track.offsetLeft);
        return d < best.d ? { i, d } : best;
      }, { i: 0, d: Infinity });
      setIndex(nearest.i);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const total = REVIEWS.length;
  const prev = () => scrollTo((index - 1 + total) % total);
  const next = () => scrollTo((index + 1) % total);

  return (
    <div className="relative mt-14">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((t, i) => (
          <blockquote
            key={i}
            className="min-w-[85%] snap-center border border-navy/10 bg-paper p-8 md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
          >
            <div className="mb-4 flex text-navy">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="font-serif text-xl leading-relaxed text-navy">"{t.q}"</p>
            <footer className="mt-6 border-t border-navy/15 pt-4 text-xs uppercase tracking-widest text-ink-soft">
              {t.n} · {t.loc}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Recension ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-navy" : "w-3 bg-navy/25"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Föregående"
            onClick={prev}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Nästa"
            onClick={next}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-cream"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-cream">
        <video
          src={media.heroLogoVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={media.heroVilla}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
        <div className="container-tight relative flex min-h-[80vh] flex-col justify-center py-24">
          <p className="eyebrow-cream mb-6">Målerifirma · Stockholm med omnejd</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Måleri som <span className="em-serif">håller</span><br />i decennier.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-cream/80">
            Alcro-certifierade fasadexperter. Vi målar villor och hem med Alcro Bestå, tre lager och
            10 års garanti. Inga genvägar — bara hantverk.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/kontakt" className="rounded-sm bg-cream px-6 py-3.5 text-sm font-medium text-navy hover:bg-white">
              Boka kostnadsfri besiktning
            </Link>
            <Link to="/rakna-pris" className="rounded-sm border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream hover:bg-cream/5">
              Räkna pris
            </Link>
          </div>
          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-cream/15 pt-8 md:grid-cols-4">
            {[
              { n: "20+", l: "År i branschen" },
              { n: "800+", l: "Färdiga projekt" },
              { n: "10 år", l: "Garanti utomhus" },
              { n: "4.9", l: "Snitt på Google" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif text-3xl text-cream md:text-4xl">
                  <span className="em-serif">{s.n}</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/60">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-b border-navy/10 bg-paper py-20">
        <div className="container-tight">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { Icon: ShieldCheck, t: "10 års garanti", d: "På alla utomhusarbeten. 2 år invändigt." },
              { Icon: Award, t: "Alcro-certifierade", d: "Vi arbetar enbart med Alcro Bestå på fasad." },
              { Icon: Clock, t: "Offert inom 24 h", d: "Skriftlig offert där material och arbete särredovisas." },
              { Icon: Leaf, t: "ROT direkt", d: "30% ROT-avdrag dras direkt på fakturan." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="border-l border-navy/15 pl-6">
                <Icon className="h-6 w-6 text-navy" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-xl text-navy">{t}</h3>
                <p className="mt-2 text-sm text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-24">
        <div className="container-tight">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow mb-4">Allt vi gör — och hur</p>
              <h2 className="max-w-xl font-serif text-4xl text-navy md:text-5xl">
                Vår <span className="em-serif">specialitet</span>: måleri, inne och ute.
              </h2>
            </div>
            <Link to="/tjanster" className="hidden shrink-0 items-center gap-2 text-sm text-navy hover:text-navy-deep md:flex">
              Alla tjänster <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/tjanster/$slug"
                params={{ slug: s.slug }}
                className="group block bg-paper transition-colors hover:bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-navy">
                    Läs mer <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALCRO */}
      <AlcroSection />

      {/* ABOUT SPLIT */}
      <section className="bg-paper py-24">
        <div className="container-tight grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <video
              src={media.omNobelVideo}
              autoPlay
              muted
              loop
              playsInline
              poster={media.aboutTeam}
              className="w-full aspect-[4/3] object-cover"
            />
            <img src={media.aboutDetail} alt="Detaljarbete" width={1200} height={900} loading="lazy" className="absolute -bottom-10 -right-6 hidden w-48 border-8 border-paper md:block" />
          </div>
          <div>
            <p className="eyebrow mb-4">Om Nobel Måleri</p>
            <h2 className="font-serif text-4xl text-navy md:text-5xl">
              Hantverk som <span className="em-serif">uppskattas</span> — och håller.
            </h2>
            <p className="mt-6 text-ink-soft">
              Vi är specialiserade på måleri och erbjuder allt från fasadmålning till fönsterkittning.
              Allt utförs av samma sammansvetsade team. Vi tar hela prep-arbetet innan penseln kommer
              fram — tvätt, skrapning, spackling, grundolja — och lägger sedan två fulla toppstrykningar.
            </p>
            <p className="mt-4 text-ink-soft">
              Vår ambition är enkel: du ska inte behöva ringa oss igen förrän du själv vill byta färg.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-navy/15 pt-6">
              <div>
                <p className="font-serif text-3xl text-navy"><span className="em-serif">100%</span></p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ink-soft">Alcro Bestå på fasad</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-navy"><span className="em-serif">24h</span></p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ink-soft">Skriftlig offert</p>
              </div>
            </div>
            <Link to="/fore-och-efter" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-navy-deep">
              Se före & efter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-navy-deep py-24 text-cream">
        <div className="container-tight">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow-cream mb-4">Utvalda projekt</p>
              <h2 className="max-w-xl font-serif text-4xl md:text-5xl">
                Arbete som <span className="em-serif">talar</span> för sig själv.
              </h2>
            </div>
            <Link to="/galleri" className="hidden shrink-0 items-center gap-2 text-sm text-cream hover:text-white md:flex">
              Hela galleriet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {media.portfolio.slice(0, 6).map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={src} alt="" width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KLARNA */}
      <KlarnaSection />

      {/* TESTIMONIALS */}
      <section className="bg-cream py-24">
        <div className="container-tight">
          <p className="eyebrow mb-4 text-center">Vad kunderna säger</p>
          <h2 className="mx-auto max-w-2xl text-center font-serif text-4xl text-navy md:text-5xl">
            Vill du ha samma <span className="em-serif">resultat?</span>
          </h2>
          <ReviewSlider />
          <div className="mt-14 flex justify-center">
            <Link
              to="/kontakt"
              className="rounded-sm bg-navy px-6 py-3.5 text-sm font-medium text-cream hover:bg-navy-deep"
            >
              Boka kostnadsfri besiktning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
