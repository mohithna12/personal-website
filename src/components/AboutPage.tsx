import { Briefcase, GraduationCap } from 'lucide-react';
import { Seo } from './Seo';
import { ROUTE_META } from '../site';

export function AboutPage() {
  /** Full-length entries: AWS and Mustang Math keep their original copy. */
  const experiences = [
    {
      title: 'Software Development Engineering Intern',
      company: 'Amazon Web Services (AWS) — Seattle, WA',
      period: 'June 2026 - Present',
      description:
        'Build an AI assistant that translates natural-language queries into API workflows, reducing agreement lookup tickets by 45%. Engineer an LLM retrieval system integrating 5 internal APIs to surface agreement details and deep links in under 2 seconds, develop a benchmark suite of 10 support workflows that improves accuracy by 80%, and implement guardrails restricting agent actions to read-only APIs to ensure 100% compliance with data requirements.',
    },
    {
      title: 'Software Engineer',
      company: 'Mustang Math — Seattle, WA',
      period: 'May 2025 - August 2025',
      description:
        'Led development on a test problem management platform used by Stanford and Berkeley, actively serving 10K+ students. Created a scalable real-time collaborative testing system with a REST API, SvelteKit, and SQL used by 1.5K+ competitors, and optimized website content and UI/UX with lazy loading to support growth to 75K+ monthly active users.',
    },
  ];

  /**
   * Contract roles, grouped so they read as breadth without crowding the page.
   * Each summary is condensed from the full description that was previously on
   * this page — no new claims, no new numbers.
   *
   * DRAFT COPY — the one-line summaries below are condensed rewrites; review.
   *
   * Fortinet is sourced from SWEResume_Mohith_Ram_Narendra_Babu(1).pdf. Its
   * summary deliberately omits the resume's batch-inference/parallelization
   * bullet, which would read as systems positioning.
   */
  const contractWork = [
    {
      title: 'Technical Consultant',
      company: 'Fortinet',
      location: 'Berkeley, CA',
      period: 'August 2026 - Present',
      summary:
        'Built ranking pipelines scoring 100K+ accounts on funding, hiring, and sector-growth signals, and a monitoring platform on FastAPI, PostgreSQL, and React analytics that cut reporting time 60%.',
    },
    {
      title: 'Data Consultant',
      company: 'Maserati',
      location: 'Berkeley, CA',
      period: 'February 2026 - July 2026',
      summary:
        'Authored a software-defined ownership strategy for the Folgore EVs, benchmarking 15+ luxury and EV brands and running NLP on 10K+ consumer reviews to cut research time by 40%.',
    },
    {
      title: 'Software Engineer',
      company: 'CKTH',
      location: 'Berkeley, CA',
      period: 'February 2026 - May 2026',
      summary:
        'Built 5 Next.js MVP pages and NestJS admin CRUD APIs supporting 1000+ records, with 20+ unit tests to improve staging release stability.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <Seo meta={ROUTE_META.about} />
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
              <Briefcase className="text-purple-400" size={24} aria-hidden="true" />
              <h2 className="text-2xl text-white">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-600 pl-6 space-y-2">
                  <h3 className="text-white">{exp.title}</h3>
                  <p className="text-purple-400">{exp.company}</p>
                  <p className="text-gray-400">{exp.period}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}

              {/* Contract work — compact group */}
              <div className="border-l-2 border-purple-600 pl-6 space-y-4">
                <h3 className="text-white">Contract work</h3>
                <div className="space-y-4">
                  {contractWork.map((role, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-white">
                        {role.title} ·{' '}
                        <span className="text-purple-400">{role.company}</span>
                      </p>
                      <p className="text-gray-400">
                        {role.location} · {role.period}
                      </p>
                      <p className="text-gray-400">{role.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in-up-delay-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-purple-400" size={24} aria-hidden="true" />
              <h2 className="text-2xl text-white">Education</h2>
            </div>
            <div className="border-l-2 border-purple-600 pl-6 space-y-2">
              <h3 className="text-white">B.S. in Electrical Engineering & Computer Sciences</h3>
              <p className="text-purple-400">University of California, Berkeley</p>
              <p className="text-gray-400">Expected May 2028 · GPA: 3.5/4.0</p>
              <div className="text-gray-400">
                <p className="font-semibold mb-2">Relevant Coursework:</p>
                <p>Structure &amp; Interpretation of Computer Programs in Python, Data Structures &amp; Algorithms, Linear Algebra, Differential Equations, Discrete Math, Probability Theory, Signals, Systems &amp; Information Processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
