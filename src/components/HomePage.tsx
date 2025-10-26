import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="space-y-2 animate-fade-in-up">
            <p className="text-purple-400">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl text-white">Mohith Ram Narendra Babu</h1>
            <h2 className="text-2xl md:text-3xl text-gray-400">EECS @ Berkeley</h2>
          </div>

          <p className="text-gray-400 max-w-2xl animate-fade-in-up-delay-1">
           Software Engineer | Full-Stack Development
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-6 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600/10 rounded-lg transition-colors"
            >
              Learn More
            </button>
          </div>

          <div className="flex gap-6 pt-6 animate-fade-in-up-delay-3">
            <a
              href="https://github.com/mohithna12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohith-ram-narendra-babu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohithramn@outlook.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
