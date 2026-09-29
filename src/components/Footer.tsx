import { Container } from './primitives';
import { DEFINITION } from '../data';
import { PERSON } from '../site';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline">
      <Container>
        {/* Dictionary entry */}
        <div data-reveal className="py-20 sm:py-28">
          <span aria-hidden="true" className="block h-4 w-[3px] bg-accent" />

          <dl className="mt-10">
            <dt className="flex items-start gap-1">
              <span className="font-sans text-[30px] font-bold tracking-[-0.02em] text-fg sm:text-[34px]">
                {DEFINITION.word}
              </span>
              <span className="mt-1 font-mono text-[11px] text-accent" aria-hidden="true">
                1
              </span>
            </dt>
            <dd className="mt-1 font-mono text-[13px] text-mid">{DEFINITION.pron}</dd>

            <dd className="mt-8">
              <ol className="space-y-5">
                {DEFINITION.senses.map((sense) => (
                  <li key={sense.num} className="grid grid-cols-[2.2rem_2.2rem_1fr] items-baseline gap-x-2">
                    <span className="font-mono text-[12px] text-mid">{sense.num}</span>
                    <span className="font-mono text-[12px] text-mid">{sense.pos}</span>
                    <span className="text-[15px] leading-[1.6] text-fg">{sense.text}</span>
                  </li>
                ))}
              </ol>
            </dd>
          </dl>

          <p className="mt-10 font-mono text-[12px] leading-[1.6] text-mid">
            <span className="text-accent" aria-hidden="true">
              1
            </span>{' '}
            {DEFINITION.footnote}
          </p>

          <span aria-hidden="true" className="mt-10 block h-4 w-[3px] bg-accent" />
        </div>
      </Container>

      {/* Colophon */}
      <div className="border-t border-hairline">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-mid">
            © {new Date().getFullYear()} {PERSON.name}
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={PERSON.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-mid transition-colors hover:text-fg"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={PERSON.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-mid transition-colors hover:text-fg"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${PERSON.email}`}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-mid transition-colors hover:text-fg"
              >
                Email
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
