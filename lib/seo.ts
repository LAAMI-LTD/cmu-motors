import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const SITE_URL = "https://www.simiyumotors.co.ke";

/**
 * Builds a full Metadata object with title, description, canonical URL,
 * and matching Open Graph fields. Next.js does not deep-merge nested
 * `openGraph` objects between a page and the root layout — if a page only
 * sets `title`/`description`, the *root's* generic Open Graph title and
 * description are what actually appear when the page is shared on social
 * media. Routing every page through this helper keeps OG data in sync
 * with the page's own title/description, per the brief's SEO requirement
 * that every route have unique, correct Open Graph metadata.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_KE",
      type: "website",
    },
  };
}
