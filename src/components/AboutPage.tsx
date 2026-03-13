import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function AboutPage() {
  const experiences = [
    {
      title: 'Data Consultant',
      company: 'Maserati [Contract]',
      period: 'February 2026 - Present',
      description:
        'Build benchmarking models across 15+ luxury brands to identify EV and pricing gaps and guide Maserati’s 5–10 year roadmap. Analyze 10K+ consumer reviews with NLP models to quantify perception gaps in innovation vs. heritage positioning, and automate dashboards tracking electrification, AI, and sustainability trends, cutting research time by 40% across teams.',
    },
    {
      title: 'Software Engineer',
      company: 'CKTH [Contract]',
      period: 'February 2026 - Present',
      description:
        'Build 5 Next.js MVP pages (Calendar, Big Ups, Wallet, Profile, Onboarding) enabling navigation for 10+ user flows. Implement NestJS APIs and admin CRUD endpoints for Events and Locations to reliably support 1000+ records, integrate event tracking for saves, shares, and views, and write 20+ unit tests to reduce regression risk and improve staging release stability.',
    },
    {
      title: 'Software Engineering Intern',
      company: 'Mustang Math',
      period: 'May 2025 - August 2025',
      description:
        'Built features for a tutoring dashboard and competition platform, implementing dynamic forms to support 1000+ users. Created and maintained 4 Svelte pages using reactive state and API fetching, reducing page load latency by 30%, and developed a Python Discord scheduling bot with auto-reminders and role tagging to cut coordination time by 40%.',
    },
    {
      title: 'Software Engineering Intern',
      company: 'Naibly: Mobile Application',
      period: 'September 2024 - May 2025',
      description:
        'Integrated DALL·E image generation into a Flutter app to generate 500+ relevant and custom event backgrounds. Configured Firebase to store Nest camera inputs, scaling to 10K+ records with under 200ms query times, while collaborating in an agile workflow to complete 100% of assigned sprint goals on schedule.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl text-white">About Me</h1>
            <div className="w-20 h-1 bg-purple-600"></div>
          </div>

          {/* Bio */}
          <div className="space-y-4 animate-fade-in-up-delay-1">
            <p className="text-gray-400">
              I'm a UC Berkeley EECS student passionate about building scalable applications and solving complex problems.
              With experience across full-stack development, mobile apps, and real-time systems, I've delivered impactful
              solutions serving 1000+ users.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you can find me contributing to open-source projects, building robotics systems, or
              exploring the latest technologies in software development and systems engineering.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-6 animate-fade-in-up-delay-2">
            <div className="flex items-center gap-3">
              <Briefcase className="text-purple-400" size={24} />
              <h2 className="text-2xl text-white">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-600 pl-6 space-y-2">
                  <h3 className="text-white">{exp.title}</h3>
                  <p className="text-purple-400">{exp.company}</p>
                  <p className="text-gray-500">{exp.period}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in-up-delay-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-purple-400" size={24} />
              <h2 className="text-2xl text-white">Education</h2>
            </div>
            <div className="border-l-2 border-purple-600 pl-6 space-y-2">
              <h3 className="text-white">B.S. in Electrical Engineering & Computer Sciences</h3>
              <p className="text-purple-400">University of California, Berkeley</p>
              <div className="text-gray-400">
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <p>Structure & Interpretation of Computer Programs, Data Structures & Algorithms, Linear Algebra & Differential Equations, Multivariable Calculus, Discrete Math, Probability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
