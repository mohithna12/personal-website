import { ExternalLink, Github } from 'lucide-react';
import { Seo } from './Seo';
import { ROUTE_META } from '../site';

/**
 * Each project reads as a mini case study: problem -> key decisions -> result.
 *
 * Every figure under `results` is taken verbatim from the copy that was already
 * on this page. No metric here is new. Where a project has no published metric
 * or no dedicated repo/demo URL, there is a TODO below rather than an invented
 * number or link.
 *
 * TODO(mohith): `github` for all three projects currently points at the profile
 * root, not a repository. Replace with the real repo URLs.
 * TODO(mohith): no demo/deployment links exist for any project. Add `demo` URLs
 * where one exists, otherwise the Demo link stays hidden.
 */
export function ProjectsPage() {
  const projects = [
    {
      title: 'GrandFLOW: Senior Care Platform',
      // DRAFT COPY — problem statement inferred from the existing description.
      problem:
        'Senior care depends on tools that are hard to navigate and on wellness data spread across disconnected sources.',
      decisions: [
        'Built real-time voice interaction with Whisper STT and Fish Audio TTS to enable natural AI conversations.',
        'Used Supabase Realtime with role-based access for the health and concierge dashboards.',
        'Designed the UI with Tailwind and shadcn/ui around large fonts and simplified navigation for accessibility.',
      ],
      results: ['Syncs 10+ wellness metrics across health and concierge dashboards.'],
      // TODO(mohith): no adoption/usage metric published for this project — add one if you have it.
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Whisper', 'Tailwind', 'shadcn/ui'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Cue-Bot: Stream Assistant Tool',
      // DRAFT COPY — problem statement inferred from the existing description.
      problem:
        'Live streams with multiple cameras require constant manual scene switching while broadcasting.',
      decisions: [
        'Built a real-time eye-tracking system with OpenCV and MediaPipe to drive camera selection.',
        'Automated OBS scene control across 2 cameras through the WebSocket API.',
        'Added debouncing and 10-frame stability checks to suppress spurious switches.',
      ],
      results: [
        'Sub-200ms automatic camera switches during live streaming.',
        'Over 90% fewer false camera switches under live streaming conditions.',
      ],
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'OBS WebSocket'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Robotics Telemetry System',
      // DRAFT COPY — problem statement inferred from the existing description.
      problem:
        'Debugging autonomous runs during field testing meant sifting through raw logs with no live view of robot state.',
      decisions: [
        'Deployed a Grafana telemetry system covering 50+ robot metrics across 10 sensors.',
        'Built Python and InfluxDB pipelines to ingest and process field-test data.',
        'Surfaced route efficiency and navigation accuracy through real-time dashboards.',
      ],
      results: [
        'Autonomous debugging time cut from roughly 5 hours to under 1.5 hours.',
        'Over 100K data points processed during field testing and validation.',
      ],
      technologies: ['Python', 'InfluxDB', 'Grafana', 'Data Visualization'],
      github: 'https://github.com/mohithna12',
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
            <p className="text-gray-400 max-w-2xl">
              A collection of projects showcasing my skills in full-stack development,
              mobile apps, data systems, and problem-solving across diverse domains.
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
