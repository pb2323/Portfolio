import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="eyebrow mb-3">Work</div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
          Where I've shipped.
        </h2>
      </motion.div>

      <ol className="relative space-y-10">
        {/* vertical line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px"
          style={{ background: 'var(--border)' }}
          aria-hidden
        />

        {experiences.map((exp, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pl-10"
          >
            {/* node */}
            <div
              className={`absolute left-0 top-2 w-4 h-4 rounded-full flex items-center justify-center ${
                exp.current ? 'ring-4' : ''
              }`}
              style={{
                background: exp.current
                  ? 'linear-gradient(135deg,#7c5cff,#22d3ee)'
                  : 'var(--surface-2)',
                border: '1px solid var(--border)',
                boxShadow: exp.current ? '0 0 0 5px rgba(124,92,255,0.15)' : 'none',
              }}
            >
              {exp.current && <span className="live-dot" style={{ width: 6, height: 6, boxShadow: 'none' }} />}
            </div>

            <div className="surface rounded-2xl p-5 sm:p-6 lift">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg sm:text-xl" style={{ color: 'var(--text)' }}>
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full"
                          style={{ background: 'var(--surface-2)', color: 'var(--muted)' }}>
                      {exp.type}
                    </span>
                    {exp.current && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full text-white"
                            style={{ background: 'linear-gradient(135deg,#7c5cff,#22d3ee)' }}>
                        NOW
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-sm flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                    <Briefcase size={12} />
                    <span style={{ color: 'var(--text)' }} className="font-medium">{exp.company}</span>
                    <span>·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  {exp.period}
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {exp.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    className="text-sm sm:text-[15px] leading-relaxed pl-4 relative"
                    style={{ color: 'var(--muted)' }}
                  >
                    <span
                      className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--accent)', opacity: 0.7 }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2 py-1 rounded-md"
                    style={{
                      background: 'var(--surface-2)',
                      color: 'var(--muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
