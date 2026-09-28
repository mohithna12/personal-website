import { Container, Eyebrow } from './primitives';
import { COMPANIES } from '../data';

/**
 * Company names are rendered as plain text wordmarks, not logo files. AWS,
 * Fortinet and Maserati marks are trademarks without clear licence for this
 * use, so nothing is reproduced.
 */
export function LogoRow() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div data-reveal>
          <Eyebrow>Where I&apos;ve built</Eyebrow>
          <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {COMPANIES.map((company) => (
              <li
                key={company}
                className="font-sans text-lg font-medium tracking-[-0.01em] text-mid transition-colors hover:text-fg sm:text-xl"
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
