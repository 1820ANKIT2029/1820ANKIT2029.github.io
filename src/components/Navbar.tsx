/**
 * Navbar.tsx — reads all values from config.ts
 */
import { useState, useEffect } from 'react';
import { nav, social } from '../config';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <button onClick={toggleTheme} className="p-1.5 md:p-2 text-ap-on-surface hover:text-ap-secondary transition-colors flex items-center justify-center rounded-full bg-ap-surface-dim/30" aria-label="Toggle dark mode">
      <span className="material-symbols-outlined text-[20px]">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="ap-nav fixed top-0 inset-x-0 z-50 shadow-sm" aria-label="Primary navigation">
      <div className="max-w-ap mx-auto px-ap-lg h-16 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="font-ap-display text-ap-headline-md font-bold text-ap-primary tracking-tight">
          {nav.brandName}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-ap-xl">
          {nav.links.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                className={`
                  font-ap-mono text-ap-caption uppercase tracking-widest
                  transition-colors duration-200
                  ${isActive
                    ? 'text-ap-secondary border-b-2 border-ap-secondary pb-0.5 font-bold'
                    : 'text-ap-on-surface-variant hover:text-ap-primary'
                  }
                `}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Resume CTA + hamburger + Theme Toggle */}
        <div className="flex items-center gap-ap-sm md:gap-ap-md">
          <ThemeToggle />
          <a
            href={social.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:inline-flex
              bg-ap-primary text-ap-on-primary
              font-ap-mono text-ap-caption uppercase tracking-widest
              px-ap-md py-ap-sm rounded-ap-md
              hover:opacity-80 transition-opacity duration-200
            "
          >
            {nav.resumeLabel}
          </a>
          <button
            className="md:hidden p-2 text-ap-on-surface"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-ap-surface/95 backdrop-blur-md border-t border-ap-outline-variant/20 px-ap-lg py-ap-md flex flex-col gap-ap-md">
          {nav.links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-ap-mono text-ap-caption uppercase tracking-widest text-ap-on-surface-variant hover:text-ap-primary transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={social.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex justify-center
              bg-ap-primary text-ap-on-primary
              font-ap-mono text-ap-caption uppercase tracking-widest
              px-ap-md py-ap-sm rounded-ap-md mt-ap-sm
            "
          >
            {nav.resumeLabel}
          </a>
        </div>
      )}
    </nav>
  );
}
