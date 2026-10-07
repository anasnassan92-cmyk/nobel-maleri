import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES } from "@/lib/services-data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/tjanster", priority: "0.9", changefreq: "monthly" },
          { path: "/fore-och-efter", priority: "0.8", changefreq: "monthly" },
          { path: "/rakna-pris", priority: "0.8", changefreq: "monthly" },
          { path: "/galleri", priority: "0.7", changefreq: "monthly" },
          { path: "/om-oss", priority: "0.6", changefreq: "yearly" },
          { path: "/faq", priority: "0.6", changefreq: "yearly" },
          { path: "/kontakt", priority: "0.8", changefreq: "yearly" },
        ];
        const serviceEntries = SERVICES.map((s) => ({
          path: `/tjanster/${s.slug}`,
          priority: "0.7",
          changefreq: "monthly" as const,
        }));
        const all = [...staticEntries, ...serviceEntries];
        const urls = all
          .map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
