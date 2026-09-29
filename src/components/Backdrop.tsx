import { useEffect, useRef } from 'react';

/**
 * Fixed background: a faint purple hairline grid, with the grid brightening
 * and a soft bloom appearing around the pointer.
 *
 * Pointer position is written to CSS custom properties on the layer element,
 * which both child layers inherit, so movement costs one paint and no React
 * render. Decorative and non-interactive; the base grid renders on its own
 * without JavaScript. The pointer response is skipped under
 * prefers-reduced-motion and on touch devices.
 */
export function Backdrop() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const el = layerRef.current;
    if (!el) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty('--gx', `${e.clientX}px`);
        el.style.setProperty('--gy', `${e.clientY}px`);
        el.classList.add('is-live');
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layerRef} aria-hidden="true" className="backdrop-layer">
      <div className="backdrop-grid" />
      <div className="backdrop-grid-hot" />
      <div className="backdrop-glow" />
    </div>
  );
}
