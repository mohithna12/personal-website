import { Container, Dot, Eyebrow } from './primitives';
import { PERSON } from '../site';

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <Eyebrow>Get in touch</Eyebrow>
          {/* DRAFT COPY — short, plain, no call-to-action language. */}
          <h2 className="mt-5 max-w-[640px] font-sans text-[28px] font-medium leading-[1.15] tracking-[-0.015em] text-fg sm:text-[38px]">
            If you are working on something interesting, I&apos;d like to hear about it.
          </h2>

          <a
            href={`mailto:${PERSON.email}`}
            className="mt-8 inline-flex items-center gap-3 border border-hairline px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-fg transition-colors hover:border-accent hover:text-accent"
          >
            <Dot />
            {PERSON.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
