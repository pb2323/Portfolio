import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects, type Project } from '../constants';

const ProjectCard = ({ p, large }: { p: Project; large?: boolean }) => {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className={`group relative surface rounded-2xl overflow-hidden lift flex flex-col ${
        large ? 'lg:col-span-2 lg:row-span-2' : ''
      }`}
      style={{
        // mouse-following spotlight
        backgroundImage:
          'radial-gradient(600px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--accent, #7c5cff) 14%, transparent), transparent 40%)',
      } as React.CSSProperties}
    >
      {/* Static accent wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${p.accent || 'from-white/0 to-white/0'} opacity-40 pointer-events-none`}
      />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-mono text-[11px] uppercase tracking-wider truncate" style={{ color: 'var(--muted)' }}>
              {p.tag}
            </div>
            <h3
              className={`mt-2 font-bold tracking-tight ${large ? 'text-2xl sm:text-3xl' : 'text-xl'}`}
              style={{ color: 'var(--text)' }}
            >
              {p.title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {p.links.github && (
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} GitHub`}
                className="w-9 h-9 rounded-full surface flex items-center justify-center lift"
                style={{ color: 'var(--text)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon width={14} height={14} />
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} demo`}
                className="w-9 h-9 rounded-full surface flex items-center justify-center lift"
                style={{ color: 'var(--text)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        <p
          className={`mt-4 leading-relaxed ${large ? 'text-base sm:text-lg' : 'text-sm sm:text-[15px]'}`}
          style={{ color: 'var(--muted)' }}
        >
          {large ? p.description : p.blurb}
        </p>

        {p.media && (
          <div
            className="mt-5 rounded-xl overflow-hidden border"
            style={{ borderColor: 'var(--border)' }}
          >
            <img
              src={p.media}
              alt={`${p.title} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        )}

        <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] px-2 py-1 rounded-md"
              style={{
                background: 'color-mix(in oklab, var(--surface-2) 70%, transparent)',
                color: 'var(--muted)',
                border: '1px solid var(--border)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
          {p.period}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <div className="eyebrow mb-3">Selected work</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
            Things I've shipped.
          </h2>
        </div>
        <a
          href="https://github.com/pb2323"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-2 rounded-full surface lift"
          style={{ color: 'var(--text)' }}
        >
          <GithubIcon width={12} height={12} />
          More on GitHub
          <ArrowUpRight size={12} />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-5">
        <ProjectCard p={featured} large />
        {rest.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
