import { Link } from "@tanstack/react-router";
import { media } from "@/assets/media";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  crumb: string;
}

export function PageHero({ eyebrow, title, emphasis, crumb }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-cream text-navy">
      <img
        src={media.heroVilla}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-paper/70 via-paper/50 to-paper/85" />
      <div className="container-tight relative flex flex-col items-center py-20 text-center md:py-28">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-ink-soft">
          <Link to="/" className="hover:text-navy">Hem</Link>
          <span>/</span>
          <span className="text-navy">{crumb}</span>
        </div>
        <h1 className="font-serif text-4xl leading-tight text-navy md:text-6xl">
          {title}{" "}
          {emphasis && <span className="em-serif">{emphasis}</span>}
        </h1>
      </div>
    </section>
  );
}
