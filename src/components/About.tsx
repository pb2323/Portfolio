import { motion } from 'framer-motion';
import { aboutMe, education, sports } from '../constants';

const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) => (
  <div className="mb-10">
    <div className="eyebrow mb-3">{eyebrow}</div>
    <h2 className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
      {title}
    </h2>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow="About"
          title={<>Engineer with a bias toward shipping.</>}
        />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="lg:col-span-2 space-y-5 text-base sm:text-lg leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          {aboutMe.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="surface rounded-2xl p-5 lift">
            <div className="eyebrow mb-3">Currently</div>
            <div className="font-semibold" style={{ color: 'var(--text)' }}>
              Software Engineer
            </div>
            <div className="text-sm" style={{ color: 'var(--muted)' }}>
              Adobe · Engagement & Retention
            </div>
            <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
              <span className="live-dot" /> Open to interesting problems
            </div>
          </div>

          {education.map((e, i) => (
            <div key={i} className="surface rounded-2xl p-5 lift">
              <div className="eyebrow mb-3">Education</div>
              <div className="font-semibold" style={{ color: 'var(--text)' }}>{e.degree}</div>
              <div className="text-sm" style={{ color: 'var(--muted)' }}>{e.school}</div>
              <div className="mt-2 font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
                {e.period} · {e.detail}
              </div>
            </div>
          ))}

          <div className="surface rounded-2xl p-5 lift">
            <div className="eyebrow mb-3">Off the clock</div>
            <div className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
              When I'm not shipping, I'm probably on a court, a trail, or in the pool.
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sports.playing.map((s) => (
                <span
                  key={s}
                  className="text-[12px] px-2.5 py-1 rounded-md font-medium"
                  style={{
                    background: 'var(--surface-2)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {s}
                </span>
              ))}
              {sports.learning.map((s) => (
                <span
                  key={s}
                  className="text-[12px] px-2.5 py-1 rounded-md font-medium inline-flex items-center gap-1.5"
                  style={{
                    background: 'color-mix(in oklab, #7c5cff 12%, var(--surface-2))',
                    color: 'var(--text)',
                    border: '1px solid color-mix(in oklab, #7c5cff 40%, var(--border))',
                  }}
                  title="Currently learning"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: '#7c5cff', boxShadow: '0 0 0 3px rgba(124,92,255,0.18)' }}
                  />
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-3 font-mono text-[10.5px]" style={{ color: 'var(--muted)' }}>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                style={{ background: '#7c5cff' }}
              />
              currently learning
            </div>
          </div>

          <div className="surface rounded-2xl p-5 lift">
            <div className="eyebrow mb-3">Beyond Code</div>
            <div className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Art of Living volunteer · ran 12 mental-wellbeing workshops for 100+ students. Fetch.ai Ambassador.
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default About;
