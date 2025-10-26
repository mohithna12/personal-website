import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'Robotics Telemetry System',
      description: 'Deployed a comprehensive Grafana telemetry system that tracks over 50 robot metrics across 10 sensors during testing phases. This real-time monitoring solution dramatically reduced autonomous debugging time from approximately 5 hours to less than 1.5 hours through live data visualization. Processed over 100,000 data points using Python and InfluxDB pipelines to optimize route efficiency and improve overall robot accuracy.',
      technologies: ['Python', 'InfluxDB', 'Grafana', 'Data Visualization'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Science Olympiad Event Scheduling System',
      description: 'Built an intelligent scheduling system using Python and OR-Tools optimization algorithms to manage 80 club members across 23 competitive Science Olympiad events. The system automatically resolves scheduling conflicts and generates balanced event assignments, reducing pre-competition planning time from over 6 hours to less than 10 minutes. Deployed via Flask with SQLite database and integrated Plotly dashboards for interactive schedule visualization and team access.',
      technologies: ['Python', 'Flask', 'SQLite', 'Plotly', 'OR-Tools'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Art Competition Platform',
      description: 'Developed a full-stack web platform supporting over 1000 participants for a large-scale art competition, featuring comprehensive registration, entry submission, and result access capabilities. Implemented robust RESTful APIs and integrated Firebase database to handle real-time user data, submissions, and voting processes efficiently. Designed and built intuitive user interfaces for both judge and competitor portals using modern HTML, CSS, and JavaScript to ensure an excellent user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'REST APIs'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Flutter Event App with DALL·E Integration',
      description: 'Integrated OpenAI\'s DALL·E image generation API into a Flutter mobile application to dynamically create over 500 custom event backgrounds based on user preferences and event themes. Configured comprehensive Firebase backend infrastructure to store and manage Nest camera inputs at scale, handling 10,000+ records with query response times consistently under 200 milliseconds. Implemented efficient data caching and optimization strategies to ensure smooth user experience across all device types.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'DALL·E API'],
      github: 'https://github.com/mohithna12',
      demo: null,
    },
    {
      title: 'Mustang Math Tutoring Dashboard',
      description: 'Designed and developed 4 dynamic, responsive web pages using Svelte framework to create a comprehensive tutoring dashboard for Mustang Math. Enhanced user experience and platform scalability through modern web technologies and responsive design principles. Created an intelligent scheduling Discord bot using Python that automated meeting coordination and increased team meeting efficiency by 50% by eliminating manual scheduling conflicts.',
      technologies: ['Svelte', 'Python', 'Discord Bot'],
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
