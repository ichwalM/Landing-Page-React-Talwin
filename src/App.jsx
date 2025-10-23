import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import LyoutsScrol from "./layouts/LyoutsScrol";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      once: true, // Sebaiknya 'true' untuk portofolio
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [isDark]);

  return (
    <div className="bg-gray-50">
      <Header
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      isDark={isDark}
      setIsDark={setIsDark}
      />
        <main>
          {/* <Layout page={activeTab} /> */}
          <LyoutsScrol 
          isDark={isDark}
          />
        </main>
    </div>
  );
}

export default App;
