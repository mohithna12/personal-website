import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { SkillsPage } from './components/SkillsPage';
import { ContactPage } from './components/ContactPage';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated falling purple specks */}
      <AnimatedBackground />
      
      {/* Purple gradient in corners */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>{renderPage()}</main>
      </div>
    </div>
  );
}
