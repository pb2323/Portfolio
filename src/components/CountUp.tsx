import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  value: string; // e.g. "17M+", "4+", "5", "31"
  duration?: number;
};

const parseValue = (v: string) => {
  const match = v.match(/^([\d.]+)([A-Za-z+]*)$/);
  if (!match) return { num: 0, suffix: v };
  return { num: parseFloat(match[1]), suffix: match[2] };
};

const CountUp = ({ value, duration = 1200 }: Props) => {
  const { num, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(num * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, duration]);

  const formatted = Number.isInteger(num)
    ? Math.round(display).toString()
    : display.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;
