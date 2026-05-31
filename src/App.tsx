import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Resume } from './components';
import MainSite from './MainSite';

export const context = createContext<{
  isLight: boolean,
  setIsLight: (isLight: boolean) => void,
}>({ isLight: false, setIsLight: () => { } });

function App() {
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('pb-theme');
    if (saved) return saved === 'light';
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('pb-theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  return (
    <context.Provider value={{ isLight, setIsLight }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export default App;
