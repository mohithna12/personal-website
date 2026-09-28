/**
 * Single source of truth for site metadata (canonical URL, social links, the
 * page title/description). Used by <Seo> and by the sitemap/robots generation
 * at build time.
 *
 * Framing here is deliberately neutral — student + software engineer — and
 * must stay that way even though the project catalog includes lower-level
 * work. No systems/inference/hardware positioning in meta, OG, or schema.
 */

export const SITE_URL = 'https://mohithn.dev';

export const PERSON = {
  name: 'Mohith Ram Narendra Babu',
  jobTitle: 'Software Engineer',
  github: 'https://github.com/mohithna12',
  linkedin: 'https://www.linkedin.com/in/mohith-ram-narendra-babu',
  email: 'mohithn@berkeley.edu',
  alumniOf: 'University of California, Berkeley',
} as const;

export const OG_IMAGE = `${SITE_URL}/og.png`;

/** DRAFT COPY — neutral, ~150 chars, no specialization claim. */
export const DESCRIPTION =
  'Mohith Ram Narendra Babu is a UC Berkeley EECS student and software engineer who builds full-stack web applications, from interface to backend.';

export const PAGE_META = {
  path: '/',
  title: `${PERSON.name} — ${PERSON.jobTitle}`,
  description: DESCRIPTION,
};

/** JSON-LD Person schema. */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSON.name,
  url: SITE_URL,
  jobTitle: PERSON.jobTitle,
  email: `mailto:${PERSON.email}`,
  sameAs: [PERSON.github, PERSON.linkedin],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: PERSON.alumniOf,
  },
};
