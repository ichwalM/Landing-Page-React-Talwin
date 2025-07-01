import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Layout from "./layouts/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import LyoutsScrol from "./layouts/LyoutsScrol";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: "ease-in-out",
      delay: 50,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          <Layout page={activeTab} />
          {/* <LyoutsScrol /> */}
        </main>
    </div>
  );
}

export default App;
