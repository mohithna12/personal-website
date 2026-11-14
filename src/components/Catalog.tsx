import { Container, Eyebrow } from './primitives';
import { PROJECTS, RUN_WIDGET_IDS } from '../data';

/** The run widget already covers the featured projects. */
const REST = PROJECTS.filter((p) => !RUN_WIDGET_IDS.includes(p.id));

export function Catalog() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-5 font-sans text-[28px] font-medium leading-[1.15] tracking-[-0.015em] text-fg sm:text-[38px]">
            Everything else I&apos;ve shipped.
          </h2>

          <ul className="mt-12 grid border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {REST.map((project) => (
              <li key={project.id} className="group flex flex-col border-r border-b border-hairline p-6 transition-colors hover:bg-fg/[0.03]">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mid">
                  {project.category}
                </p>
                <h3 className="mt-4 font-sans text-lg font-medium tracking-[-0.01em] text-fg">
                  {project.title}
                </h3>
                <p className="mt-3 grow text-[14px] leading-[1.65] text-lt">{project.blurb}</p>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-fg"
                  >
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View repo: ${project.title} on GitHub`}
                    className={`${project.demo ? 'mt-2' : 'mt-6'} inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-lt transition-colors group-hover:text-accent`}
                  >
                    View repo <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <p className={`${project.demo ? 'mt-2' : 'mt-6'} font-mono text-[11px] uppercase tracking-[0.14em] text-mid`}>
                    Private repo
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
