import { useEffect, useRef, useState } from 'react';
import { Container, Eyebrow } from './primitives';
import { PROJECTS, RUN_WIDGET_IDS, type Project } from '../data';

const FEATURED: Project[] = RUN_WIDGET_IDS.map(
  (id) => PROJECTS.find((p) => p.id === id)!
);

/**
 * Project walkthrough widget.
 *
 * The selector is a native radio group and the panels are shown with CSS
 * `:has()` rules (see index.css), so switching projects works with JavaScript
 * disabled and is keyboard-operable for free. JavaScript only adds the
 * sequential "run" animation, and the RUN button is hidden unless JS is present.
 */
export function RunWidget() {
  const [runningId, setRunningId] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = (project: Project) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const steps = project.steps ?? [];

    if (reduced) {
      setRunningId(null);
      setActiveStep(steps.length - 1);
      return;
    }

    setRunningId(project.id);
    setActiveStep(-1);

    steps.forEach((_, i) => {
      timers.current.push(
        window.setTimeout(() => setActiveStep(i), 260 * (i + 1))
      );
    });
    timers.current.push(
      window.setTimeout(() => setRunningId(null), 260 * (steps.length + 1))
    );
  };

  return (
    <section id="work" className="py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <Eyebrow>A project, step by step</Eyebrow>
          <h2 className="mt-5 max-w-[700px] font-sans text-[28px] font-medium leading-[1.15] tracking-[-0.015em] text-fg sm:text-[38px]">
            Pick a project. Watch what it actually does.
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

            {FEATURED.map((project) => {
              const isRunning = runningId === project.id;
              return (
                <div
                  key={project.id}
                  className={`run-panel run-panel-${project.id} ${isRunning ? 'is-running' : ''}`}
                >
                  {/* Run control */}
                  <div className="flex items-center justify-between gap-4 border-b border-hairline px-4 py-3 sm:px-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mid">
                      {project.category}
                    </p>
                    <button
                      type="button"
                      onClick={() => run(project)}
                      className="run-btn items-center gap-2 border border-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent hover:text-bg"
                    >
                      <span aria-hidden="true">▶</span> Run
                    </button>
                  </div>

                  {/* Two panels */}
                  <div className="grid gap-px bg-hairline md:grid-cols-2">
                    <div className="bg-bg p-4 sm:p-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mid">
                        What it does
                      </p>
                      <p className="mt-4 text-[15px] leading-[1.7] text-lt">{project.whatItDoes}</p>

                      <ol className="mt-6 space-y-3">
                        {(project.steps ?? []).map((step, i) => (
                          <li
                            key={step.label}
                            className={`step flex gap-3 ${
                              isRunning && i === activeStep ? 'is-active' : ''
                            }`}
                          >
                            <span className="mt-[3px] font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span>
                              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mid">
                                {step.label}
                              </span>
                              <span className="mt-1 block text-[14px] leading-[1.6] text-lt">
                                {step.detail}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-bg p-4 sm:p-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mid">
                        What I built
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
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

                      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-mid">
                        Measured result
                      </p>
                      <ul className="mt-3 space-y-2">
                        {project.results.map((r) => (
                          <li key={r} className="flex gap-2.5 text-[14px] leading-[1.6] text-lt">
                            <span aria-hidden="true" className="mt-[9px] size-[5px] shrink-0 bg-accent" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
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
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
