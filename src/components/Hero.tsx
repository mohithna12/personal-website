import { Container, Dot, Eyebrow } from './primitives';
import { PERSON } from '../site';

const LINKS = [
  { href: PERSON.github, label: 'GitHub', external: true },
  { href: PERSON.linkedin, label: 'LinkedIn', external: true },
  { href: `mailto:${PERSON.email}`, label: PERSON.email, external: false },
];

export function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <div data-reveal className="max-w-[820px]">
          <Eyebrow>Software Engineer · UC Berkeley EECS</Eyebrow>

          <h1 className="mt-6 font-sans text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-fg sm:text-[62px]">
            Mohith Ram Narendra Babu
          </h1>

          {/* DRAFT COPY — neutral subline, no career-target statement. */}
          <p className="mt-6 max-w-[560px] text-[15px] leading-[1.7] text-lt sm:text-base">
            I build web applications end to end, from the interface down to the APIs and data
            behind them. Currently studying EECS at UC Berkeley.
          </p>

          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            {LINKS.map((link) => (
              <li key={link.label} className="flex items-center gap-2">
                <Dot />
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-lt underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
