import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'GrandFLOW: Senior Care Platform',
      description:
        'Built a senior care platform using Next.js, TypeScript, and Supabase, integrating voice agents and health dashboards. Implemented real-time voice interaction with Whisper STT and Fish Audio TTS to enable natural AI conversations, and developed health and concierge dashboards with Supabase Realtime and role-based access, syncing 10+ wellness metrics. Designed an accessible UI with Tailwind and shadcn/ui to improve usability through large fonts and simplified navigation.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Whisper', 'Tailwind', 'shadcn/ui'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Cue-Bot: Stream Assistant Tool',
      description:
        'Built a real-time eye-tracking system with OpenCV and MediaPipe to enable sub-200ms automatic camera switches for live streaming. Automated OBS scene control across 2 cameras using WebSocket APIs to eliminate manual switching during broadcasts, and reduced false camera switches by over 90% using debouncing and 10-frame stability checks under live streaming conditions.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'OBS WebSocket'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Robotics Telemetry System',
      description:
        'Deployed a Grafana telemetry system tracking 50+ robot metrics across 10 sensors during field testing and validation. Reduced autonomous debugging time from roughly 5 hours to under 1.5 hours through real-time visualization dashboards, and processed over 100K data points via Python and InfluxDB pipelines to optimize route efficiency and navigation accuracy.',
      technologies: ['Python', 'InfluxDB', 'Grafana', 'Data Visualization'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
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
                  <h3 className="text-white">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>

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
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
