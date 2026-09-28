import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PERSON } from '../site';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  // Trigger progress bar animation when page changes
  useEffect(() => {
    setShowProgress(true);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-900/30 relative">
      {/* Progress bar */}
      {showProgress && <div className="progress-bar"></div>}

      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            {PERSON.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors ${
                  isActive(item.to)
                    ? 'text-purple-400'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PERSON.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-purple-400"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Without JS the hamburger toggle above does nothing, so the mobile
            nav links would be unreachable. Page content itself is prerendered
            and needs no fallback. */}
        <noscript>
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={item.to}
                className="text-left text-gray-400 hover:text-purple-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PERSON.resume}
              className="text-left text-gray-400 hover:text-purple-400 transition-colors"
            >
              Resume
            </a>
          </div>
        </noscript>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${
                  isActive(item.to)
                    ? 'text-purple-400'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PERSON.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-gray-400 hover:text-purple-400 transition-colors"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
