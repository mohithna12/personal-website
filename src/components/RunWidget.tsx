import { useEffect, useRef, useState } from 'react';
import { Container, Eyebrow } from './primitives';
import { PROJECTS, RUN_WIDGET_IDS, type Project } from '../data';

const FEATURED: Project[] = RUN_WIDGET_IDS.map(
  (id) => PROJECTS.find((p) => p.id === id)!
);

/** Panel-switching rules, generated so any featured project id just works. */
const PANEL_CSS = FEATURED.map(
  (p) => `.run-widget:has(#proj-${p.id}:checked) .run-panel-${p.id}{display:block}`
).join('');

const LINE_MS = 380;
/** Reveal the demo even if the iframe never reports load (cold starts, blockers). */
const LOAD_TIMEOUT_MS = 9000;

const host = (url: string) => new URL(url).host;

type Phase = 'idle' | 'booting' | 'live';

/**
 * A browser frame that boots into the project's real, deployed demo.
 *
 * Idle: the frame shows the pipeline and a LAUNCH button. Launching streams the
 * pipeline as a boot log while the demo iframe loads behind it, then swaps the
 * live site in. The iframe is only created on launch, so the page never loads
 * three external apps up front. Without JS, the frame still links out.
 */
function DemoFrame({ project }: { project: Project }) {
  const steps = project.steps ?? [];
  const demo = project.demo!;
  const [phase, setPhase] = useState<Phase>('idle');
  const [lines, setLines] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const bootDone = lines > steps.length;
  useEffect(() => {
    if (phase === 'booting' && bootDone && loaded) setPhase('live');
  }, [phase, bootDone, loaded]);

  const launch = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setLoaded(false);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLines(steps.length + 1);
      setPhase('booting');
      return;
    }

    setLines(0);
    setPhase('booting');
    for (let i = 1; i <= steps.length + 1; i++) {
      timers.current.push(window.setTimeout(() => setLines(i), LINE_MS * i));
    }
    timers.current.push(window.setTimeout(() => setLoaded(true), LOAD_TIMEOUT_MS));
  };

  const reset = () => {
    timers.current.forEach(clearTimeout);
    setPhase('idle');
    setLines(0);
    setLoaded(false);
  };

  return (
    <div className="flex h-full flex-col border border-hairline bg-bg">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-hairline px-3 py-2">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2 rounded-full bg-mid/40" />
          <span className="size-2 rounded-full bg-mid/40" />
          <span className={`size-2 rounded-full ${phase === 'live' ? 'bg-accent' : 'bg-mid/40'}`} />
        </span>
        <span className="min-w-0 flex-1 truncate border border-hairline px-2 py-1 font-mono text-[10px] tracking-[0.04em] text-mid">
          {phase === 'live' ? (
            <span className="text-lt">https://{host(demo)}</span>
          ) : (
            <>https://{host(demo)}</>
          )}
        </span>
        {phase !== 'idle' && (
          <button
            type="button"
            onClick={reset}
            aria-label="Close live demo"
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-mid transition-colors hover:text-fg"
          >
            ✕
          </button>
        )}
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the ${project.title} demo in a new tab`}
          className="font-mono text-[11px] text-mid transition-colors hover:text-accent"
        >
          ↗
        </a>
      </div>

      {/* Viewport */}
      <div className="relative h-[440px] overflow-hidden sm:h-[520px]">
        {phase !== 'idle' && (
          <iframe
            src={demo}
            title={`${project.title} live demo`}
            onLoad={() => setLoaded(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className={`absolute inset-0 h-full w-full bg-white transition-opacity duration-500 ${
              phase === 'live' ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
        )}

        {phase !== 'live' && (
          <div className="demo-screen absolute inset-0 flex flex-col p-5 sm:p-7">
            {phase === 'idle' ? (
              <>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mid">
                  Pipeline
                </p>
                <ol className="mt-4 space-y-2.5">
                  {steps.map((step, i) => (
                    <li key={step.label} className="flex gap-3">
                      <span className="mt-[2px] font-mono text-[10px] text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] leading-[1.55] text-lt">
                        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.14em] text-mid">
                          {step.label}
                        </span>
                        {step.detail}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                  <button
                    type="button"
                    onClick={launch}
                    className="run-btn items-center gap-2 bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bg transition-opacity hover:opacity-85"
                  >
                    <span aria-hidden="true">▶</span> Launch live demo
                  </button>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] uppercase tracking-[0.14em] text-mid transition-colors hover:text-accent"
                  >
                    Open in new tab ↗
                  </a>
                </div>
              </>
            ) : (
              <div role="status" aria-live="polite" className="font-mono text-[12px] leading-[1.9]">
                <p className="text-mid">$ boot {project.id}</p>
                {steps.slice(0, lines).map((step) => (
                  <p key={step.label} className="boot-line flex gap-3 text-lt">
                    <span className="shrink-0 text-accent">[ ok ]</span>
                    <span className="w-[6.5rem] shrink-0 text-fg">{step.label}</span>
                    <span className="hidden text-mid sm:inline">{step.detail}</span>
                  </p>
                ))}
                {bootDone && (
                  <p className="boot-line text-lt">
                    <span className="text-accent">→</span> connecting to {host(demo)}
                    {!loaded && <span className="cursor-blink">_</span>}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const cls =
    'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors';
  return project.repo ? (
    <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`${cls} text-lt hover:text-accent`}>
      View repo <span aria-hidden="true">→</span>
    </a>
  ) : (
    <span className={`${cls} text-mid`}>Private repo</span>
  );
}

export function RunWidget() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <style>{PANEL_CSS}</style>
      <Container>
        <div data-reveal>
          <Eyebrow>Live demos</Eyebrow>
          <h2 className="mt-5 max-w-[700px] font-sans text-[28px] font-medium leading-[1.15] tracking-[-0.015em] text-fg sm:text-[38px]">
            Don&apos;t take my word for it. Run them.
          </h2>

          <div className="run-widget mt-10 border border-hairline">
            {/* Selector — native radios, CSS-driven panels */}
            <fieldset className="border-b border-hairline p-4 sm:p-5">
              <legend className="sr-only">Select a project</legend>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mid">
                  Project
                </span>
                {FEATURED.map((project, i) => (
                  <label
                    key={project.id}
                    className="proj-chip cursor-pointer border border-hairline px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-mid transition-colors hover:text-fg"
                  >
                    <input
                      type="radio"
                      name="run-project"
                      id={`proj-${project.id}`}
                      defaultChecked={i === 0}
                      className="sr-only"
                    />
                    {project.title}
                  </label>
                ))}
              </div>
            </fieldset>

            {FEATURED.map((project) => (
              <div key={project.id} className={`run-panel run-panel-${project.id}`}>
                <div className="grid gap-px bg-hairline lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
                  <div className="bg-bg p-3 sm:p-4">
                    {project.demo ? (
                      <DemoFrame project={project} />
                    ) : (
                      <p className="p-4 text-[14px] text-mid">No live demo for this one yet.</p>
                    )}
                  </div>

                  <div className="bg-bg p-4 sm:p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mid">
                      {project.category}
                    </p>
                    <p className="mt-4 text-[15px] leading-[1.7] text-lt">{project.whatItDoes}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-hairline px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-lt"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-mid">
                      Key decisions
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.decisions.map((d) => (
                        <li key={d} className="flex gap-2.5 text-[14px] leading-[1.6] text-lt">
                          <span aria-hidden="true" className="mt-[9px] size-[5px] shrink-0 bg-accent" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </div>

                {/* Stat strip */}
                <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-hairline px-4 py-4 sm:px-5">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-mid">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 font-sans text-lg font-medium text-fg">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
