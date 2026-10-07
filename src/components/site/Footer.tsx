import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { media } from "@/assets/media";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="container-tight grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={media.nobelLogo}
              alt="Nobel Måleri"
              width={80}
              height={80}
              className="h-20 w-20 rounded-sm object-contain"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Professionellt måleri i Stockholm med omnejd. Alcro-certifierade fasadexperter med fokus på
            kvalitet och hållbarhet.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/nobelmaleri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:bg-cream/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/nobelmaleri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-cream/20 hover:bg-cream/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow-cream mb-4">Navigering</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white">Hem</Link></li>
            <li><Link to="/tjanster" className="hover:text-white">Tjänster</Link></li>
            <li><Link to="/fore-och-efter" className="hover:text-white">Före & Efter</Link></li>
            <li><Link to="/galleri" className="hover:text-white">Galleri</Link></li>
            <li><Link to="/rakna-pris" className="hover:text-white">Räkna pris</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow-cream mb-4">Tjänster</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/tjanster/$slug" params={{ slug: "utomhusmaleri" }} className="hover:text-white">Utomhusmålning</Link></li>
            <li><Link to="/tjanster/$slug" params={{ slug: "invandig-malning" }} className="hover:text-white">Invändig målning</Link></li>
            <li><Link to="/tjanster/$slug" params={{ slug: "fonster-lack-spackel" }} className="hover:text-white">Fönster, lack & spackel</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow-cream mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 flex-shrink-0" /> +46 70 143 42 26</li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 flex-shrink-0" /> support@nobelmaleri.se</li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /> Stockholm med omnejd</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/60 md:flex-row">
          <p>© {new Date().getFullYear()} Nobel Måleri · Alcro-certifierade fasadexperter</p>
          <p>F-skatt · 30% ROT-avdrag direkt på fakturan · 10 års garanti</p>
          <p>
            Provided by{" "}
            <a
              href="https://mizagroup.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-white underline underline-offset-2"
            >
              mizagroup.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
