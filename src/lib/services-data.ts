import { media } from "@/assets/media";

export interface Service {
  slug: string;
  title: string;
  short: string;
  image: string;
  benefits: string[];
  process: { title: string; body: string }[];
  intro: string;
  ctaLabel: string;
  ctaTo: "/kontakt" | "/rakna-pris";
}

export const SERVICES: Service[] = [
  {
    slug: "utomhusmaleri",
    title: "Utomhusmålning & fasadmålning",
    short: "Från slitet trä till nymålat hus — komplett behandling med Alcro Bestå.",
    image: media.svcExterior,
    intro:
      "Vi tar oss an hela jobbet — från slitet trä till nymålat hus. Det inkluderar grundlig tvätt, skrapning, slipning, eventuellt byte av rötskadade brädor, grundning och två lager toppfärg. Vi är Alcro-certifierade fasadexperter och arbetar uteslutande med Alcro Bestå-systemet, framtaget för nordiskt klimat.",
    benefits: [
      "Komplett behandling — tvätt, skrap, grundning, 2 toppstrykningar",
      "Trä- och putsfasader",
      "Knutar, foder och vindskivor",
      "Tak, staket och altaner",
      "Fönster- och dörrmålning",
      "10 års garanti på utfört arbete",
    ],
    process: [
      { title: "Besiktning", body: "Vi kommer ut inom två arbetsdagar och gör en fri kontroll av träet, tidigare färgskikt och underlag." },
      { title: "Offert", body: "Skriftlig offert inom 24 timmar — arbete och material särredovisas. ROT-avdrag visas direkt." },
      { title: "Utförande", body: "Skrapning, tvätt, grundning, två toppstrykningar med Alcro Bestå. Vi täcker plantering och möbler." },
      { title: "Slutgenomgång", body: "Vi går igenom hela fasaden med dig. Är något inte perfekt fixar vi det — utan extra kostnad." },
    ],
    ctaLabel: "Räkna pris för fasadmålning",
    ctaTo: "/rakna-pris",
  },
  {
    slug: "invandig-malning",
    title: "Invändig målning",
    short: "Tak, väggar, kök och hela bostäder — rena resultat, varje gång.",
    image: media.svcInterior,
    intro:
      "Tak, väggar, kök och hela bostäder. Vi förbereder ytor noggrant, maskerar inventarier och målar med rena resultat — varje gång. Köksluckor sprutmålar vi gärna på plats för ett kostnadseffektivt alternativ till nytt kök.",
    benefits: [
      "Väggar och tak",
      "Köksluckor — sprutmålning på plats",
      "Snickerier, lister och dörrar",
      "Färgsättningsråd",
      "Maskering och rengöring ingår",
      "2 års garanti invändigt",
    ],
    process: [
      { title: "Färgrådgivning", body: "Vi hjälper dig hitta rätt kulör om du vill — annars respekterar vi ditt val." },
      { title: "Förberedelse", body: "Spackling, slipning, maskering. Prep-tiden är det som avgör resultatet." },
      { title: "Målning", body: "Grundmålning och två toppstrykningar med rätt roller och pensel för underlaget." },
      { title: "Kontroll", body: "Vi går rummet i dagsljus och kvällsljus. Inget lämnas åt slumpen." },
    ],
    ctaLabel: "Boka invändig målning",
    ctaTo: "/kontakt",
  },
  {
    slug: "fonster-lack-spackel",
    title: "Fönsterkittning, lackering & spackling",
    short: "Detaljarbetet som höjer slutresultatet — kittning, lackering, tapetsering och spackling.",
    image: media.svcWindow,
    intro:
      "Detaljarbetet som höjer slutresultatet. Professionell fönsterkittning, lackering av snickerier, tapetsering och noggrann spackling innan målning.",
    benefits: [
      "Fönsterkittning och bågrenovering",
      "Lackering av dörrar och lister",
      "Tapetsering och mönsterpassning",
      "Spackling och slipning",
      "Mindre rötskador och reparationer",
    ],
    ctaLabel: "Diskutera ditt projekt",
    ctaTo: "/kontakt",
    process: [
      { title: "Inspektion", body: "Vi bedömer varje detalj för sig — vad kan bevaras, vad behöver bytas." },
      { title: "Förberedelse", body: "Skrapning ned till friskt trä där det behövs. Kittning av glas och sprickor." },
      { title: "Utförande", body: "Grundolja, kitt, lack eller tapet — rätt material för rätt yta." },
      { title: "Återmontering", body: "Beslag sätts tillbaka. Fönstret ska gå att öppna igen — utan att fastna." },
    ],
  },
];
