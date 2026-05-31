import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { context } from '../App';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Wins', href: '#wins' },
  { label: 'Stack', href: '#stack' },
];

const Navbar = () => {
  const { isLight, setIsLight } = useContext(context);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b'
          : 'bg-transparent border-transparent'
      }`}
      style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center"
               style={{ background: 'linear-gradient(135deg,#7c5cff 0%,#22d3ee 100%)' }}>
            <span className="font-mono font-bold text-white text-sm">pb</span>
          </div>
          <span className="font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
            Puneet Bajaj
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => goTo(l.href)}
                className="px-3 py-1.5 rounded-full text-sm font-medium hover:bg-[var(--surface-2)] transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setIsLight(!isLight)}
            className="w-9 h-9 rounded-full surface lift flex items-center justify-center"
            style={{ color: 'var(--text)' }}
          >
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <Link
            to="/resume"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white"
            style={{ background: 'linear-gradient(135deg,#7c5cff 0%,#5a3df0 100%)' }}
          >
            Resume
          </Link>
          <button
            className="md:hidden w-9 h-9 rounded-full surface flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{ color: 'var(--text)' }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass border-t" style={{ borderColor: 'var(--border)' }}>
          <ul className="flex flex-col p-3 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => goTo(l.href)}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-[var(--surface-2)] text-sm font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <Link
              to="/resume"
              onClick={() => setOpen(false)}
              className="mx-1 mt-1 px-4 py-2 rounded-lg text-sm font-medium text-white text-center"
              style={{ background: 'linear-gradient(135deg,#7c5cff 0%,#5a3df0 100%)' }}
            >
              Resume
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
