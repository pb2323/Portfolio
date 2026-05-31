import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import { Navbar } from '.';
import { resumeLink } from '../constants';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="aurora" />
      <div className="absolute inset-0 grid-pattern" />
      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-28 pb-16 flex flex-col items-center">
        <div className="w-full flex items-center justify-between mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm surface lift"
            style={{ color: 'var(--text)' }}
          >
            <ArrowLeft size={14} /> Back
          </Link>
          <a
            href={resumeLink}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
            style={{ background: 'linear-gradient(135deg,#7c5cff 0%,#5a3df0 100%)' }}
          >
            <Download size={14} /> Download PDF
          </a>
        </div>

        <div className="w-full surface rounded-2xl overflow-hidden">
          <iframe
            title="Puneet Bajaj Resume"
            src={resumeLink}
            className="w-full h-[80vh] sm:h-[110vh]"
            style={{ border: 'none', background: 'white' }}
          />
        </div>
      </main>
    </div>
  );
};

export default Resume;
