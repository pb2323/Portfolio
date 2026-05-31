import { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Search,
  ArrowUpRight,
  Mail,
  FileText,
  Sun,
  Moon,
  Briefcase,
  Trophy,
  Sparkles,
  User,
  Wrench,
  Command as CmdIcon,
  Code2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { socials, projects } from '../constants';
import { context } from '../App';

type Item = {
  id: string;
  label: string;
  hint?: string;
  group: 'Navigation' | 'Links' | 'Actions' | 'Projects';
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
};

const CommandPalette = () => {
  const { isLight, setIsLight } = useContext(context);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const close = () => {
    setOpen(false);
    setQuery('');
    setSelected(0);
  };

  const scrollTo = (id: string) => {
    close();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items: Item[] = [
    { id: 'about', label: 'About', group: 'Navigation', icon: <User size={14} />, action: () => scrollTo('#about') },
    { id: 'experience', label: 'Experience', group: 'Navigation', icon: <Briefcase size={14} />, action: () => scrollTo('#experience') },
    { id: 'projects', label: 'Projects', group: 'Navigation', icon: <Sparkles size={14} />, action: () => scrollTo('#projects') },
    { id: 'wins', label: 'Wins', group: 'Navigation', icon: <Trophy size={14} />, action: () => scrollTo('#wins') },
    { id: 'stack', label: 'Stack', group: 'Navigation', icon: <Wrench size={14} />, action: () => scrollTo('#stack') },
    { id: 'resume', label: 'View resume', group: 'Actions', icon: <FileText size={14} />, action: () => { close(); navigate('/resume'); } },
    {
      id: 'theme',
      label: isLight ? 'Switch to dark mode' : 'Switch to light mode',
      group: 'Actions',
      icon: isLight ? <Moon size={14} /> : <Sun size={14} />,
      action: () => { setIsLight(!isLight); close(); },
    },
    {
      id: 'email',
      label: 'Copy email',
      hint: socials.email,
      group: 'Actions',
      icon: <Mail size={14} />,
      action: () => { navigator.clipboard?.writeText(socials.email); close(); },
      keywords: 'contact mail',
    },
    { id: 'github', label: 'Open GitHub', group: 'Links', icon: <GithubIcon width={14} height={14} />, action: () => { window.open(socials.github, '_blank'); close(); } },
    { id: 'linkedin', label: 'Open LinkedIn', group: 'Links', icon: <LinkedinIcon width={14} height={14} />, action: () => { window.open(socials.linkedin, '_blank'); close(); } },
    { id: 'leetcode', label: 'Open LeetCode', group: 'Links', icon: <Code2 size={14} />, action: () => { window.open(socials.leetcode, '_blank'); close(); } },
    { id: 'devpost', label: 'Open Devpost', group: 'Links', icon: <ArrowUpRight size={14} />, action: () => { window.open(socials.devpost, '_blank'); close(); } },
    ...projects.map<Item>((p) => ({
      id: `project-${p.title}`,
      label: p.title,
      hint: p.tag,
      group: 'Projects',
      icon: <Sparkles size={14} />,
      action: () => { if (p.links.github) window.open(p.links.github, '_blank'); close(); },
      keywords: p.stack.join(' ').toLowerCase(),
    })),
  ];

  const filtered = query
    ? items.filter((it) => {
        const q = query.toLowerCase();
        return (
          it.label.toLowerCase().includes(q) ||
          it.hint?.toLowerCase().includes(q) ||
          it.keywords?.includes(q) ||
          it.group.toLowerCase().includes(q)
        );
      })
    : items;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes('mac');
      const mod = isMac ? e.metaKey : e.ctrlKey;
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (!open) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((s) => Math.min(filtered.length - 1, s + 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((s) => Math.max(0, s - 1));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        filtered[selected]?.action();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, selected]);

  useEffect(() => {
    if (open) {
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  // Group filtered items
  const grouped = filtered.reduce<Record<string, Item[]>>((acc, it) => {
    (acc[it.group] = acc[it.group] || []).push(it);
    return acc;
  }, {});
  const groupOrder: Item['group'][] = ['Navigation', 'Actions', 'Links', 'Projects'];

  return (
    <>
      {/* Floating trigger button (mobile + secondary affordance) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full glass border lift font-mono text-xs"
        style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
      >
        <Search size={13} />
        <span className="hidden sm:inline">Search</span>
        <kbd
          className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px]"
          style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
        >
          <CmdIcon size={10} /> K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] flex items-start justify-center p-4 sm:pt-[15vh]"
            style={{ background: 'color-mix(in oklab, var(--bg) 70%, transparent)', backdropFilter: 'blur(8px)' }}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full max-w-xl rounded-2xl overflow-hidden glass shadow-2xl"
              style={{ borderColor: 'var(--border)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <Search size={14} style={{ color: 'var(--muted)' }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, jump to section, copy email…"
                  className="flex-1 bg-transparent outline-none text-sm"
                  style={{ color: 'var(--text)' }}
                />
                <kbd
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                  style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}
                >
                  ESC
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm" style={{ color: 'var(--muted)' }}>
                    No results for "{query}"
                  </div>
                ) : (
                  groupOrder.map((g) => {
                    const items = grouped[g];
                    if (!items?.length) return null;
                    return (
                      <div key={g} className="px-2 pb-2">
                        <div className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                          {g}
                        </div>
                        {items.map((it) => {
                          const isActive = filtered[selected]?.id === it.id;
                          return (
                            <button
                              key={it.id}
                              onMouseEnter={() => setSelected(filtered.findIndex((x) => x.id === it.id))}
                              onClick={() => it.action()}
                              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left"
                              style={{
                                background: isActive ? 'var(--surface-2)' : 'transparent',
                                color: 'var(--text)',
                              }}
                            >
                              <span
                                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                                style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
                              >
                                {it.icon}
                              </span>
                              <span className="flex-1 min-w-0">
                                <span className="text-sm font-medium block truncate">{it.label}</span>
                                {it.hint && (
                                  <span className="text-xs block truncate" style={{ color: 'var(--muted)' }}>
                                    {it.hint}
                                  </span>
                                )}
                              </span>
                              {isActive && (
                                <kbd
                                  className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                                  style={{ background: 'var(--surface)', color: 'var(--muted)' }}
                                >
                                  ↵
                                </kbd>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                )}
              </div>

              <div
                className="flex items-center justify-between px-4 py-2.5 border-t font-mono text-[10px]"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              >
                <div className="flex items-center gap-3">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                  <span>esc close</span>
                </div>
                <span className="hidden sm:inline">{filtered.length} results</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
