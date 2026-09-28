import { Head } from 'vite-react-ssg';
import { OG_IMAGE, PAGE_META, PERSON, SITE_URL, personJsonLd } from '../site';

/**
 * Per-page head tags, rendered into the prerendered HTML.
 */
export function Seo() {
  const canonical = `${SITE_URL}/`;

  return (
    <Head>
      <title>{PAGE_META.title}</title>
      <meta name="description" content={PAGE_META.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={PAGE_META.title} />
      <meta property="og:description" content={PAGE_META.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={PERSON.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={PAGE_META.title} />
      <meta name="twitter:description" content={PAGE_META.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
    </Head>
  );
}
