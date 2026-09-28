import { ExternalLink, Github } from 'lucide-react';
import { Seo } from './Seo';
import { ROUTE_META } from '../site';

/**
 * Each project reads as a mini case study: problem -> key decisions -> result.
 *
 * Sourced from SWEResume_Mohith_Ram_Narendra_Babu(1).pdf, in that resume's
 * order (reverse-chronological: Aug 2026, Jul 2026, Nov 2025). Every figure
 * under `results` is taken verbatim from those bullets. No metric is invented.
 *
 * Note: this set replaces Cue-Bot and Robotics Telemetry, and reintroduces the
 * systems/inference framing that earlier site copy deliberately avoided. That
 * was an explicit decision; the neutral meta descriptions, OG image, and
 * JSON-LD in src/site.ts were left unchanged.
 *
 * TODO(mohith): GPT-2 Inference Engine has no repo I could find — it is not
 * among your public repos and has no local clone. Its Code link stays hidden
 * until you give me a URL.
 * TODO(mohith): no demo/deployment links exist for any project. Add `demo`
 * URLs where one exists, otherwise the Demo link stays hidden.
 */
export function ProjectsPage() {
  const projects = [
    {
      title: 'Kalshi Mispricing Engine',
      // DRAFT COPY — problem statement inferred from the resume bullets.
      problem:
        'Mispricings in NFL prediction markets are only actionable if order-book updates are processed as fast as they arrive.',
      decisions: [
        'Ingested order-book updates over WebSocket through a concurrent Tokio pipeline with lock-free async channels.',
        'Flagged candidates by comparing live prices against win probabilities and surfacing deviations beyond 2 sigma.',
        'Backtested the strategy against historical games, modeling transaction fees and slippage.',
      ],
      results: [
        'Ingests 12K+ NFL order-book updates per second.',
        'Surfaces 80+ candidate mispricings per week.',
        '14.7% simulated return across 1,200 historical games.',
      ],
      technologies: ['Rust', 'Tokio', 'WebSockets'],
      github: 'https://github.com/mohithna12/kalshi-alpha',
      demo: null,
    },
    {
      title: 'GPT-2 Inference Engine',
      // DRAFT COPY — problem statement inferred from the resume bullets.
      problem:
        'Running GPT-2 locally normally means pulling in a full ML framework and the dependency stack that comes with it.',
      decisions: [
        'Implemented GPT-2 inference in C++17 with zero ML-framework dependencies.',
        'Applied KV caching, cache-blocked GEMM kernels, and multithreaded attention across 8 cores.',
        'Built an automated differential-testing harness to check outputs against a reference implementation.',
      ],
      results: [
        '42 tokens/second on CPU.',
        'Per-token latency cut 61%.',
        'Logits within 1e-4 of HuggingFace outputs across 100 prompts.',
      ],
      technologies: ['C++17', 'Multithreading'],
      github: null,
      demo: null,
    },
    {
      title: 'GrandFLOW: Senior Care Assistant',
      // DRAFT COPY — problem statement inferred from the resume bullets.
      problem:
        'Senior care depends on tools that are hard to navigate and on wellness data spread across disconnected sources.',
      decisions: [
        'Built the platform on Next.js, TypeScript, and Supabase, integrating voice agents and health dashboards.',
        'Implemented real-time voice interaction with Whisper STT and Fish Audio TTS for natural AI conversations.',
        'Developed health and concierge dashboards with Supabase Realtime and role-based access.',
      ],
      results: ['Syncs 10+ wellness metrics across health and concierge dashboards.'],
      technologies: ['Next.js', 'TypeScript', 'Supabase'],
      // Repo lives under a collaborator's account, not mohithna12.
      github: 'https://github.com/angadsingharora/GrandFLOW',
      demo: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <Seo meta={ROUTE_META.projects} />
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl text-white">Projects</h1>
            <div className="w-20 h-1 bg-purple-600"></div>
            {/* DRAFT COPY — the previous blurb described "full-stack development,
                mobile apps, data systems", which no longer matches this set. */}
            <p className="text-gray-400 max-w-2xl">
              A collection of projects spanning real-time data pipelines, systems programming, and full-stack
              application development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up-delay-1">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-purple-950/30 border border-purple-900/30 rounded-lg overflow-hidden hover:border-purple-600/50 transition-all group p-6 space-y-4 flex flex-col"
              >
                {/* Project Info */}
                <div className="space-y-4 flex-grow">
                  <h2 className="text-white text-lg leading-[1.5]">{project.title}</h2>

                  <div className="space-y-1">
                    <p className="text-purple-400 text-sm">Problem</p>
                    <p className="text-gray-400">{project.problem}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-purple-400 text-sm">Key decisions</p>
                    <ul className="text-gray-400 space-y-1">
                      {project.decisions.map((decision, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-purple-600" aria-hidden="true">
                            &middot;
                          </span>
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-purple-400 text-sm">Result</p>
                    <ul className="text-gray-400 space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-purple-600" aria-hidden="true">
                            &middot;
                          </span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-black/50 border border-purple-900/30 text-purple-300 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github size={18} aria-hidden="true" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
