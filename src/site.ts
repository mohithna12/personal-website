/**
 * Single source of truth for site-wide metadata (canonical URL, social links,
 * per-route titles/descriptions). Used by the <Seo> component and by the
 * sitemap/robots/JSON-LD generation at build time.
 */

export const SITE_URL = 'https://mohithn.dev';

export const PERSON = {
  name: 'Mohith Ram Narendra Babu',
  jobTitle: 'Software Engineer',
  github: 'https://github.com/mohithna12',
  linkedin: 'https://www.linkedin.com/in/mohith-ram-narendra-babu',
  email: 'mohithramn@outlook.com',
  alumniOf: 'University of California, Berkeley',
  resume: '/resume.pdf',
} as const;

export const OG_IMAGE = `${SITE_URL}/og.png`;

/**
 * DRAFT COPY — flagged for review.
 * Neutral description: student + software engineer, no specialization claim.
 */
export const DEFAULT_DESCRIPTION =
  'Mohith Ram Narendra Babu is a UC Berkeley EECS student and software engineer who builds full-stack web applications, from interface to backend.';

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
};

export const ROUTE_META: Record<string, RouteMeta> = {
  home: {
    path: '/',
    title: `${PERSON.name} — ${PERSON.jobTitle}`,
    description: DEFAULT_DESCRIPTION,
  },
  about: {
    path: '/about',
    title: `About — ${PERSON.name}`,
    description:
      'About Mohith Ram Narendra Babu: UC Berkeley EECS student and software engineer, with experience across web applications, APIs, and data platforms.',
  },
  projects: {
    path: '/projects',
    title: `Projects — ${PERSON.name}`,
    description:
      'Projects by Mohith Ram Narendra Babu, a UC Berkeley EECS student and software engineer, spanning web platforms, real-time tools, and data pipelines.',
  },
  skills: {
    path: '/skills',
    title: `Skills — ${PERSON.name}`,
    description:
      'Technical skills of Mohith Ram Narendra Babu, a UC Berkeley EECS student and software engineer: languages, frameworks, databases, and developer tools.',
  },
  contact: {
    path: '/contact',
    title: `Contact — ${PERSON.name}`,
    description:
      'Get in touch with Mohith Ram Narendra Babu, a UC Berkeley EECS student and software engineer, about opportunities, projects, or collaboration.',
  },
};

/** JSON-LD Person schema, emitted once on the home page. */
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
