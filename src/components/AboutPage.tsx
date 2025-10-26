import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function AboutPage() {
  const experiences = [
    {
      title: 'Technology Team Member',
      company: 'Mustang Math',
      period: 'May 2025 - August 2025',
      description: 'Contributed over 75 hours to software development projects, including building a comprehensive tutoring dashboard and an online competition platform. Designed and coded 4 dynamic web pages using Svelte framework, significantly enhancing user experience and platform scalability. Additionally, created a scheduling Discord bot using Python that streamlined internal planning processes and increased meeting efficiency by 50%.',
    },
    {
      title: 'Software Engineering Intern',
      company: 'Kural Koodal Semmozhi Foundation',
      period: 'May 2024 - September 2024',
      description: 'Developed a full-stack web platform supporting over 1000 users for an art competition, enabling seamless registration, entry submissions, and result access. Built robust RESTful APIs and integrated Firebase database to handle real-time user data and submissions efficiently. Designed and implemented intuitive user interfaces for both judge and competitor portals using HTML, CSS, and JavaScript. Collaborated daily with 2 mentors and leveraged GitHub workflow to track progress and resolve issues 40% faster than previous methods.',
    },
    {
      title: 'Software Engineering Intern',
      company: 'Naibly',
      period: 'September 2023 - May 2024',
      description: 'Successfully integrated DALL·E AI image generation into a Flutter mobile application, creating over 500 custom event backgrounds for users. Configured Firebase backend infrastructure to store Nest camera inputs, scaling the system to handle 10,000+ records with query times under 200 milliseconds. Worked closely with a mentor and development partner in an agile environment, completing 100% of assigned goals on schedule while maintaining high code quality standards.',
    },
    {
      title: 'Chief Technical Officer',
      company: 'TiE Young Entrepreneurs Program',
      period: 'September 2023 - May 2024',
      description: 'Led the technical development of a mobile productivity application as CTO, managing a team of 3 developers and overseeing the entire software development lifecycle. Conducted extensive customer validation with over 500 users, iterating on features based on real user feedback and comprehensive analytics. Presented the product to judges in the final entrepreneurial round, successfully demonstrating a projected 10x revenue growth within 6 months of launch.',
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
              <p className="text-gray-500">Graduation: May 2028</p>
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
