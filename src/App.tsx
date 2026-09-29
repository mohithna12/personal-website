import { useEffect } from 'react';
import { Seo } from './components/Seo';
import { Backdrop } from './components/Backdrop';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { LogoRow } from './components/LogoRow';
import { RunWidget } from './components/RunWidget';
import { Experience } from './components/Experience';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Rule } from './components/primitives';

/**
 * Scroll-reveal, as progressive enhancement that fails open.
 *
 * Content is never hidden by CSS on its own. This effect arms only the
 * elements it measures as sitting below the fold, so anything already on
 * screen (the hero, the nav) is never touched. If JS is disabled, the observer
 * is unavailable, or this never runs, nothing is armed and the page renders in
 * full. A timeout also un-arms everything as a backstop, so a missed observer
 * callback can never leave a section permanently invisible.
 */
function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const belowFold = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);

    belowFold.forEach((el) => el.classList.add('reveal-armed'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    belowFold.forEach((el) => observer.observe(el));

    // Backstop: never leave content hidden.
    const failsafe = window.setTimeout(() => {
      belowFold.forEach((el) => el.classList.add('is-visible'));
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);
}

export default function App() {
  useScrollReveal();

  // Marks that JS is live, so JS-only controls (the RUN button) can show.
  useEffect(() => {
    document.documentElement.classList.add('js');
  }, []);

  return (
    <>
      <Seo />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.14em] focus:text-accent"
      >
        Skip to content
      </a>

      <Backdrop />

      <Nav />

      <main className="relative z-10">
        <Hero />
        <Rule />
        <LogoRow />
        <Rule />
        <RunWidget />
        <Rule />
        <Experience />
        <Rule />
        <Catalog />
        <Rule />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
