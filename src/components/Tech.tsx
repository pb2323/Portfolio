import { motion } from 'framer-motion';
import { techStack } from '../constants';

const Tech = () => {
  return (
    <section id="stack" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="eyebrow mb-3">Stack</div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
          The tools I reach for.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {techStack.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="surface rounded-2xl p-5 sm:p-6 lift"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="eyebrow">{cat.category}</div>
              <span className="font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
                {cat.items.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-[13px] px-2.5 py-1.5 rounded-lg font-medium"
                  style={{
                    background: 'var(--surface-2)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
