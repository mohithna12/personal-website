import { Head } from 'vite-react-ssg';
import { OG_IMAGE, SITE_URL, personJsonLd, type RouteMeta } from '../site';

interface SeoProps {
  meta: RouteMeta;
  /** Emit the JSON-LD Person schema (home page only). */
  jsonLd?: boolean;
}

/**
 * Renders per-route <title>, description, canonical, Open Graph and Twitter
 * card tags into the prerendered HTML head.
 */
export function Seo({ meta, jsonLd = false }: SeoProps) {
  // meta.path is '/' for home, so this yields a trailing-slash root URL that
  // matches the entry sitemap.xml emits for the same route.
  const canonical = `${SITE_URL}${meta.path}`;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Mohith Ram Narendra Babu" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      )}
    </Head>
  );
}
