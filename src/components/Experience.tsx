import { Container, Eyebrow } from './primitives';
import { AWS, CONTRACT_WORK, MUSTANG_MATH } from '../data';

function RoleLine({
  title,
  company,
  location,
  period,
  level = 'h3',
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  /** Kept explicit so heading ranks never skip a level. */
  level?: 'h3' | 'h4';
}) {
  const Heading = level;
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <Heading className="font-sans text-base font-medium text-fg">{title}</Heading>
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
        {company}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mid">
        {location} · {period}
      </span>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <Eyebrow>Where I&apos;ve worked</Eyebrow>
          <h2 className="mt-5 font-sans text-[28px] font-medium leading-[1.15] tracking-[-0.015em] text-fg sm:text-[38px]">
            Three places, four years of building.
          </h2>

          <ol className="mt-12 space-y-12">
            {/* 1 — AWS, standalone */}
            <li className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-[13px] text-mid">01.</span>
              <div>
                <RoleLine {...AWS} />
                <p className="mt-3 max-w-[680px] text-[15px] leading-[1.7] text-lt">
                  {AWS.summary}
                </p>
              </div>
            </li>

            {/* 2 — Contract work, grouped */}
            <li className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-[13px] text-mid">02.</span>
              <div>
                <h3 className="font-sans text-base font-medium text-fg">Contract work</h3>
                <div className="mt-5 space-y-6 border-l border-hairline pl-5">
                  {CONTRACT_WORK.map((role) => (
                    <div key={role.company}>
                      <RoleLine {...role} level="h4" />
                      <p className="mt-2 max-w-[660px] text-[14px] leading-[1.65] text-lt">
                        {role.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {/* 3 — Mustang Math, unchanged */}
            <li className="grid gap-4 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-[13px] text-mid">03.</span>
              <div>
                <RoleLine {...MUSTANG_MATH} />
                <p className="mt-3 max-w-[680px] text-[15px] leading-[1.7] text-lt">
                  {MUSTANG_MATH.summary}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
}
