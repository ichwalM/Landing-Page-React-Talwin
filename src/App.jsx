import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import LyoutsScrol from "./layouts/LyoutsScrol";
import LiquidEther from './LiquidEther';

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);


  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      once: true, 
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [isDark]);

  return (
    <div className={`App transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
      <Header
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      isDark={isDark}
      setIsDark={setIsDark}
      />
        <main className="">
          <LyoutsScrol 
          isDark={isDark}
          />
        </main>
    </div>
  );
}

export default App;
