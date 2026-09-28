import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Seo } from './Seo';
import { PERSON, ROUTE_META } from '../site';

export function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Seo meta={ROUTE_META.home} jsonLd />
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="space-y-2 animate-fade-in-up">
            <p className="text-purple-400">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl text-white">{PERSON.name}</h1>
            <h2 className="text-2xl md:text-3xl text-gray-400">EECS @ Berkeley</h2>
          </div>

          {/* DRAFT COPY — flagged for review (see TODO list) */}
          <p className="text-gray-400 max-w-2xl animate-fade-in-up-delay-1">
            UC Berkeley EECS student and software engineer.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight size={20} />
            </Link>
            <a
              href={PERSON.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600/10 rounded-lg transition-colors flex items-center gap-2"
            >
              <FileText size={20} aria-hidden="true" />
              Resume
            </a>
            {/* DRAFT COPY — was "Learn More". Lighthouse's link-text audit flags
                generic labels like that, and it scores visible text, so an
                aria-label alone does not fix it. Revert if you prefer the
                original wording (costs ~8 points of SEO score). */}
            <Link
              to="/about"
              className="px-6 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600/10 rounded-lg transition-colors"
            >
              About Me
            </Link>
          </div>

          <div className="flex gap-6 pt-6 animate-fade-in-up-delay-3">
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={24} aria-hidden="true" />
            </a>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${PERSON.email}`}
              aria-label={`Email ${PERSON.email}`}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={24} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
