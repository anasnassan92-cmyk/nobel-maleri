import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTABanner } from "@/components/site/CTABanner";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <section className="relative isolate overflow-hidden bg-navy-deep py-24 text-cream md:py-32">
        <div className="container-tight text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-cream/60">
            <Link to="/" className="hover:text-cream">Hem</Link>
            <span>/</span>
            <span className="text-cream">404</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl">404</h1>
        </div>
      </section>
      <section className="bg-paper py-24 text-center">
        <div className="container-tight max-w-xl">
          <p className="font-serif text-6xl text-navy md:text-8xl">
            4<span className="em-serif">0</span>4
          </p>
          <h2 className="mt-8 font-serif text-3xl text-navy md:text-4xl">
            Sidan finns <span className="em-serif">inte här</span>.
          </h2>
          <p className="mt-4 text-ink-soft">
            Länken kan vara felstavad eller sidan borttagen. Gå tillbaka till startsidan.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-sm bg-navy px-6 py-3 text-sm font-medium text-cream hover:bg-navy-deep"
          >
            Till startsidan
          </Link>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-navy">Något gick fel</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Sidan kunde inte laddas. Försök igen eller gå tillbaka.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-cream hover:bg-navy-deep"
          >
            Försök igen
          </button>
          <a href="/" className="rounded-sm border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy hover:bg-cream">
            Till startsidan
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nobel Måleri — Alcro-certifierade fasadexperter i Stockholm" },
      { name: "description", content: "Professionellt måleri i Stockholm med omnejd. Alcro-certifierade fasadexperter — utomhusmålning, invändig målning och fönsterkittning. 10 års garanti, 30% ROT direkt på fakturan." },
      { name: "author", content: "Nobel Måleri" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Nobel Måleri — Alcro-certifierade fasadexperter i Stockholm" },
      { name: "twitter:title", content: "Nobel Måleri — Alcro-certifierade fasadexperter i Stockholm" },
      { property: "og:description", content: "Professionellt måleri i Stockholm med omnejd. Alcro-certifierade fasadexperter — utomhusmålning, invändig målning och fönsterkittning. 10 års garanti, 30% ROT direkt på fakturan." },
      { name: "twitter:description", content: "Professionellt måleri i Stockholm med omnejd. Alcro-certifierade fasadexperter — utomhusmålning, invändig målning och fönsterkittning. 10 års garanti, 30% ROT direkt på fakturan." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0f686bf1-58ea-42a7-a13a-890ba030ca64/id-preview-f76e6d2a--e26ad2e1-047b-4e1a-a619-83872bf28797.lovable.app-1783066113537.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0f686bf1-58ea-42a7-a13a-890ba030ca64/id-preview-f76e6d2a--e26ad2e1-047b-4e1a-a619-83872bf28797.lovable.app-1783066113537.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <CTABanner />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
