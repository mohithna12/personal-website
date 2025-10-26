import { Code2, Database, Wrench, Globe } from 'lucide-react';

export function SkillsPage() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'Dart', 'Java', 'SQL', 'C++'],
    },
    {
      icon: Wrench,
      title: 'Tools & Frameworks',
      skills: ['React', 'Svelte', 'Firebase', 'Flask', 'InfluxDB', 'Grafana', 'Git/Github', 'Excel', 'Google Sheets'],
    },
    {
      icon: Database,
      title: 'Systems & Databases',
      skills: ['Firebase', 'SQLite', 'InfluxDB', 'REST APIs', 'OR-Tools', 'Data Visualization'],
    },
    {
      icon: Globe,
      title: 'Interests',
      skills: ['Weightlifting', 'Road Biking', 'Seattle Seahawks', 'Rap Concerts', 'Spider-Man Movies', 'Vinyl Records'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl text-white">Skills & Expertise</h1>
            <div className="w-20 h-1 bg-purple-600"></div>
            <p className="text-gray-400 max-w-2xl">
              A comprehensive overview of my technical skills and areas of expertise in software development,
              spanning from full-stack web development to mobile apps and data systems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up-delay-1">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-purple-950/30 border border-purple-900/30 p-6 rounded-lg hover:border-purple-600/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <h2 className="text-xl text-white">{category.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-black/50 border border-purple-900/30 text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-purple-950/50 to-transparent border border-purple-900/30 p-6 rounded-lg animate-fade-in-up-delay-3">
            <h3 className="text-white mb-3">Continuous Learning</h3>
            <p className="text-gray-400">
              I'm always expanding my skillset and staying up-to-date with the latest technologies
              and best practices in software engineering. Currently exploring systems design, distributed systems,
              and the intersection of AI/ML with robotics applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
