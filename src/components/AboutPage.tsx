import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function AboutPage() {
  const experiences = [
    {
      title: 'Software Development Engineering Intern',
      company: 'Amazon Web Services (AWS) — Seattle, WA',
      period: 'June 2026 - Present',
      description:
        'Build an AI assistant that translates natural-language queries into API workflows, reducing agreement lookup tickets by 45%. Engineer an LLM retrieval system integrating 5 internal APIs to surface agreement details and deep links in under 2 seconds, develop a benchmark suite of 10 support workflows that improves accuracy by 80%, and implement guardrails restricting agent actions to read-only APIs to ensure 100% compliance with data requirements.',
    },
    {
      title: 'Data Consultant',
      company: 'Maserati [Contract] — Berkeley, CA',
      period: 'February 2026 - July 2026',
      description:
        'Authored a software-defined ownership strategy for Maserati’s Folgore EVs by synthesizing competitive and feasibility analysis, and framed a 5–10 year software-defined roadmap by benchmarking 15+ luxury and EV brands on OTA, pricing, and services. Cut research time by 40% via a 30-month roadmap with gating KPIs (80%+ OTA adoption, +10 NPS) and an ROI model, and surfaced perception gaps by running NLP on 10K+ consumer reviews to convert findings into positioning guidance.',
    },
    {
      title: 'Software Engineer',
      company: 'CKTH [Contract] — Berkeley, CA',
      period: 'February 2026 - May 2026',
      description:
        'Build 5 Next.js MVP pages (Calendar, Big Ups, Wallet, Profile, Onboarding) enabling navigation for 10+ user flows. Implement NestJS APIs and admin CRUD endpoints for Events and Locations to reliably support 1000+ records, and write 20+ unit tests for frontend modules and APIs to reduce regression risk and improve staging release stability.',
    },
    {
      title: 'Software Engineer',
      company: 'Mustang Math — Seattle, WA',
      period: 'May 2025 - August 2025',
      description:
        'Led development on a test problem management platform used by Stanford and Berkeley, actively serving 10K+ students. Created a scalable real-time collaborative testing system with a REST API, SvelteKit, and SQL used by 1.5K+ competitors, and optimized website content and UI/UX with lazy loading to support growth to 75K+ monthly active users.',
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
              With experience across full-stack development, AI systems, and real-time platforms, I've delivered impactful
              solutions serving thousands of users.
            </p>
            <p className="text-gray-400">
              I'm currently a Software Development Engineering Intern at AWS, building LLM-powered retrieval systems. When
              I'm not coding, you can find me building robotics systems or exploring the latest in AI/ML and software
              engineering.
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
              <p className="text-gray-500">Expected May 2028 · GPA: 3.5/4.0</p>
              <div className="text-gray-400">
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <p>Structure & Interpretation of Computer Programs in Python, Data Structures & Algorithms, Linear Algebra, Differential Equations, Discrete Math, Probability Theory, Signals, Systems & Information Processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
