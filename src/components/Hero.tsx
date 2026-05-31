import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, FileText, MapPin, Command } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { hero, stats, socials } from '../constants';
import CountUp from './CountUp';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="aurora" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-6xl mx-auto w-full px-5 sm:px-8 pt-28 pb-16 z-10">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full surface text-xs sm:text-sm font-mono"
          style={{ color: 'var(--muted)' }}
        >
          <span className="live-dot" />
          <span>
            <span style={{ color: 'var(--text)' }}>{hero.title}</span>
            {' @ '}
            <span style={{ color: 'var(--text)' }}>{hero.company}</span>
            {' · Acrobat Web'}
          </span>
        </motion.div>

        {/* Headline — proof-led */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 text-[clamp(2.4rem,7.5vw,5.8rem)] leading-[1.0] font-black tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Hi, I'm Puneet.
          <br />
          I build with <span className="text-gradient">AI agents.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          Software engineer at <span style={{ color: 'var(--text)' }} className="font-medium">Adobe</span> building production AI on Acrobat Web. Multi-agent systems, MCP servers, multimodal interfaces, and the platforms that make them safe.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${socials.email}`}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-medium text-white"
            style={{ background: 'linear-gradient(135deg,#7c5cff 0%,#5a3df0 100%)' }}
          >
            Get in touch
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-medium surface lift"
            style={{ color: 'var(--text)' }}
          >
            <FileText size={16} />
            Resume
          </Link>
          <div className="flex items-center gap-1 ml-1">
            <a
              href={socials.github}
              target="_blank" rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full surface lift flex items-center justify-center"
              style={{ color: 'var(--text)' }}
            >
              <GithubIcon width={16} height={16} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full surface lift flex items-center justify-center"
              style={{ color: 'var(--text)' }}
            >
              <LinkedinIcon width={16} height={16} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full surface lift flex items-center justify-center"
              style={{ color: 'var(--text)' }}
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Meta strip — location + cmd-k hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs"
          style={{ color: 'var(--muted)' }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} />
            {hero.location}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            Press{' '}
            <kbd
              className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded"
              style={{ background: 'var(--surface-2)', color: 'var(--text)', border: '1px solid var(--border)' }}
            >
              <Command size={10} /> K
            </kbd>{' '}
            anywhere
          </span>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden surface"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-5 py-6 sm:py-7"
              style={{ background: 'var(--surface)' }}
            >
              <div className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
