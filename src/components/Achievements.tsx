import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { achievements } from '../constants';

const Achievements = () => {
  return (
    <section id="wins" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="eyebrow mb-3">Wins</div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
          5+ hackathon wins. <span className="text-gradient-warm">And a Black Belt.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-base sm:text-lg" style={{ color: 'var(--muted)' }}>
          Stanford, UCLA, Davis, Y Combinator — built end-to-end products under 36-hour clocks, with teams I'd ship with again tomorrow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="relative surface rounded-2xl p-5 sm:p-6 lift overflow-hidden"
          >
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 pointer-events-none"
              style={{
                background:
                  a.rank === '1st'
                    ? 'radial-gradient(circle, #fbbf24, transparent 70%)'
                    : a.rank === '2nd'
                    ? 'radial-gradient(circle, #d4d4d8, transparent 70%)'
                    : a.rank === '3rd'
                    ? 'radial-gradient(circle, #f59e0b, transparent 70%)'
                    : 'radial-gradient(circle, #7c5cff, transparent 70%)',
              }}
            />
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background:
                    a.rank === '★'
                      ? 'linear-gradient(135deg,#7c5cff,#22d3ee)'
                      : 'var(--surface-2)',
                  border: '1px solid var(--border)',
                }}
              >
                {a.rank === '★' ? (
                  <Award size={16} className="text-white" />
                ) : (
                  <Trophy size={16} style={{ color: 'var(--text)' }} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  {a.event} · {a.date}
                </div>
                <h3 className="mt-1 font-semibold text-base sm:text-lg leading-tight" style={{ color: 'var(--text)' }}>
                  {a.prize}
                </h3>
                <div className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--text)' }} className="font-medium">{a.project}</span>
                  {a.detail && <> · {a.detail}</>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
