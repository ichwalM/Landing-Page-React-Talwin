import React from 'react'
import HomeSection from '../pages/HomeSection'
import AboutSection from '../pages/AboutSection'
import SkillSection from '../pages/SkillSection'
import ExperienceTimeline from '../pages/ExperienceTimeline'
import ProjectsPortfolio from '../pages/ProjectsPortfolio'
import ContactPage from '../pages/ContactPage'
import Footer from '../pages/Footer';
const LyoutsScrol = ({isDark}) => {
  return (
    <div className='scroll-smooth min-h-screen mx-auto'>
        <HomeSection 
        id="home"
        isDark={isDark}
        />
        <AboutSection 
        id="about"
        isDark={isDark} />
        <ExperienceTimeline 
        id="experience"
        isDark={isDark}
        />
        <ProjectsPortfolio
        id="projects"
        isDark={isDark}
        />
        <ContactPage 
        id="contact"
        isDark={isDark}
        />
        <Footer
        isDark={isDark}
        />
    </div>
  )
}

export default LyoutsScrol
