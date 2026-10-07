import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-navy text-cream">
      <div className="container-tight grid items-center gap-6 py-10 md:grid-cols-[auto_1fr_auto]">
        <div className="flex items-center gap-4 border-cream/20 md:border-r md:pr-8">
          <div className="grid h-12 w-12 place-items-center rounded-sm border border-cream/30">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/60">Ring oss direkt</p>
            <a href="tel:+46701434226" className="font-serif text-xl hover:underline">+46 70 143 42 26</a>
          </div>
        </div>
        <p className="font-serif text-2xl leading-snug md:text-3xl">
          Kostnadsfri besiktning inom <span className="em-serif">två arbetsdagar</span>.
        </p>
        <Link
          to="/kontakt"
          className="rounded-sm bg-cream px-6 py-3 text-center text-sm font-medium text-navy transition-colors hover:bg-white"
        >
          Boka besiktning
        </Link>
      </div>
    </section>
  );
}
