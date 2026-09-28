import { Container } from './primitives';
import { PERSON } from '../site';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-bg/85 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between gap-3 sm:gap-4">
        <a
          href="#top"
          className="min-w-0 truncate font-mono text-[10px] uppercase tracking-[0.1em] text-fg transition-colors hover:text-accent sm:text-[11px] sm:tracking-[0.14em]"
        >
          {PERSON.name}
        </a>
        <nav aria-label="Sections" className="shrink-0">
          <ul className="flex items-center gap-4 sm:gap-7">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-mid transition-colors hover:text-fg sm:text-[11px] sm:tracking-[0.14em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
