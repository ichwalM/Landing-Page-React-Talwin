import {React,useState} from 'react'
import HomeSection from '../pages/HomeSection'
import AboutSection from '../pages/AboutSection'
import SkillSection from '../pages/SkillSection'
import ExperienceTimeline from '../pages/ExperienceTimeline'
import ProjectsPortfolio from '../pages/ProjectsPortfolio'
import ContactPage from '../pages/ContactPage'

const LyoutsScrol = ({isDark}) => {
  return (
    <div className='min-h-screen'>
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
    </div>
  )
}

export default LyoutsScrol
