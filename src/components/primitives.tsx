import type { ReactNode } from 'react';

/** Small uppercase monospace label that sits above a section heading. */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.18em] text-mid ${className}`}>
      {children}
    </p>
  );
}

/** Accent status dot used for small facts. */
export function Dot() {
  return (
    <span aria-hidden="true" className="inline-block size-[6px] shrink-0 bg-accent" />
  );
}

/** Full-bleed hairline rule between sections. */
export function Rule() {
  return <div className="border-t border-hairline" aria-hidden="true" />;
}

/** Centred content container with responsive gutters. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1080px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/**
 * Section wrapper. `data-reveal` is picked up by the scroll-reveal observer;
 * with JS disabled the styles never apply, so content stays visible.
 */
export function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>
        <div data-reveal>{children}</div>
      </Container>
    </section>
  );
}
