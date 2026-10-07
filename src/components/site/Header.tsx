import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { media } from "@/assets/media";

const NAV = [
  { to: "/", label: "Hem" },
  { to: "/tjanster", label: "Tjänster" },
  { to: "/fore-och-efter", label: "Före & Efter" },
  { to: "/galleri", label: "Galleri" },
  { to: "/rakna-pris", label: "Räkna pris" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/90 backdrop-blur-sm">
      <div className="container-tight flex h-24 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={media.nobelLogo}
            alt="Nobel Måleri"
            width={72}
            height={72}
            className="h-16 w-16 rounded-sm object-contain md:h-20 md:w-20"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-ink transition-colors hover:text-navy [&.active]:text-navy [&.active]:font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+46701434226" className="flex items-center gap-2 text-sm text-ink-soft hover:text-navy">
            <Phone className="h-4 w-4" />
            070-143 42 26
          </a>
          <Link
            to="/kontakt"
            className="rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-navy-deep"
          >
            Boka besiktning
          </Link>
        </div>

        <button
          className="lg:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meny"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-paper lg:hidden">
          <nav className="container-tight flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-ink hover:text-navy [&.active]:text-navy [&.active]:font-medium"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-navy px-5 py-3 text-center text-sm font-medium text-cream"
            >
              Boka besiktning
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
