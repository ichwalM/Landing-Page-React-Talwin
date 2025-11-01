import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import LyoutsScrol from "./layouts/LyoutsScrol";
import Footer from "./pages/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedMode = localStorage.getItem("theme");
      if (savedMode === null) return true; 
      const parsed = JSON.parse(savedMode);
      return typeof parsed === "boolean" ? parsed : savedMode === "dark";
    } catch (e) {
      const fallback = localStorage.getItem("theme");
      return fallback === "dark" || true; 
    }
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
        <main className={`mx-0 md:mx-16 mt-16  ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 via-blue-50 to-pink-50"}`}>

          <LyoutsScrol 
          isDark={isDark}
          />
        </main>
        <Footer
        isDark={isDark}
        />
    </div>
  );
}

export default App;
  