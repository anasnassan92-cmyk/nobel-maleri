import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/tjanster/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Nobel Måleri` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} — Nobel Måleri` },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:image", content: loaderData.service.image },
        ]
      : [{ title: "Tjänst — Nobel Måleri" }],
  }),
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="font-serif text-4xl text-navy">Tjänsten hittades inte</h1>
      <Link to="/tjanster" className="mt-6 inline-block text-navy underline">Se alla tjänster</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow="Tjänst" title={service.title} crumb={service.title} />

      <section className="bg-paper py-20">
        <div className="container-tight grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-8">
            <div className="bg-navy p-6 text-cream">
              <h3 className="font-serif text-xl">Alla tjänster</h3>
              <ul className="mt-4 space-y-1">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/tjanster/$slug"
                      params={{ slug: s.slug }}
                      className={`flex items-center justify-between border-b border-cream/15 py-3 text-sm transition-colors ${
                        s.slug === service.slug ? "text-cream font-medium" : "text-cream/70 hover:text-cream"
                      }`}
                    >
                      {s.title}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream-warm p-6">
              <p className="eyebrow">Frågor?</p>
              <p className="mt-3 font-serif text-2xl text-navy leading-snug">
                Vi svarar <span className="em-serif">samma dag</span>.
              </p>
              <a href="tel:+46701434226" className="mt-5 inline-flex items-center gap-2 text-navy font-medium">
                <Phone className="h-4 w-4" /> +46 70 143 42 26
              </a>
            </div>
          </aside>

          <article>
            <h2 className="font-serif text-4xl text-navy md:text-5xl">{service.title}</h2>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed">{service.intro}</p>

            <img
              src={service.image}
              alt={service.title}
              width={1200}
              height={900}
              className="mt-10 w-full"
              loading="lazy"
            />

            <div className="mt-16">
              <h3 className="font-serif text-2xl text-navy">
                Detta ingår i <span className="em-serif">{service.title.toLowerCase()}</span>
              </h3>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {service.benefits.map((b: string) => (
                  <li key={b} className="flex items-start gap-3 border-t border-navy/10 py-3 text-ink">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy" strokeWidth={1.5} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16">
              <p className="eyebrow mb-4">Vår process</p>
              <h3 className="font-serif text-3xl text-navy">
                En trygg och <span className="em-serif">strukturerad</span> process
              </h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {service.process.map((p: { title: string; body: string }, i: number) => (
                  <div key={p.title} className="border-t border-navy/15 pt-4">
                    <p className="font-serif text-sm text-ink-soft">0{i + 1}</p>
                    <h4 className="mt-2 font-serif text-xl text-navy">{p.title}</h4>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-cream-warm p-8">
              <p className="eyebrow">Andra tjänster</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {others.map((s) => (
                  <Link
                    key={s.slug}
                    to="/tjanster/$slug"
                    params={{ slug: s.slug }}
                    className="rounded-sm border border-navy/20 bg-paper px-4 py-2 text-sm text-navy hover:bg-white"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
