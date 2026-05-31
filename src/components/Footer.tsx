import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, FileText, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { socials } from '../constants';

const Footer = () => {
  return (
    <footer id="contact" className="relative">
      <section className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="relative surface rounded-3xl overflow-hidden p-10 sm:p-16 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(124,92,255,0.25), transparent 60%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="eyebrow mb-4">Let's build</div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mx-auto max-w-2xl" style={{ color: 'var(--text)' }}>
              Got an <span className="text-gradient">idea</span> worth building?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg" style={{ color: 'var(--muted)' }}>
              I'm always up for a good problem — AI systems, agents, real-time platforms, or the messy infra that ties them together.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${socials.email}`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium"
                style={{ background: 'linear-gradient(135deg,#7c5cff 0%,#5a3df0 100%)' }}
              >
                {socials.email}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium surface lift"
                style={{ color: 'var(--text)' }}
              >
                <FileText size={16} />
                View Resume
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-md overflow-hidden flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg,#7c5cff 0%,#22d3ee 100%)' }}>
              <span className="font-mono font-bold text-white text-[11px]">pb</span>
            </div>
            <span className="text-sm" style={{ color: 'var(--muted)' }}>
              © {new Date().getFullYear()} Puneet Bajaj · Built with React + Vite · v2
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a href={socials.github} target="_blank" rel="noreferrer"
               className="w-9 h-9 rounded-full surface lift flex items-center justify-center"
               aria-label="GitHub" style={{ color: 'var(--text)' }}>
              <GithubIcon width={14} height={14} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer"
               className="w-9 h-9 rounded-full surface lift flex items-center justify-center"
               aria-label="LinkedIn" style={{ color: 'var(--text)' }}>
              <LinkedinIcon width={14} height={14} />
            </a>
            <a href={socials.leetcode} target="_blank" rel="noreferrer"
               className="w-9 h-9 rounded-full surface lift flex items-center justify-center"
               aria-label="LeetCode" style={{ color: 'var(--text)' }}>
              <Code2 size={14} />
            </a>
            <a href={`mailto:${socials.email}`}
               className="w-9 h-9 rounded-full surface lift flex items-center justify-center"
               aria-label="Email" style={{ color: 'var(--text)' }}>
              <Mail size={14} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
