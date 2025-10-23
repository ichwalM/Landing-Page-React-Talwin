import React from 'react'
import HomeSection from '../pages/HomeSection'
import AboutSection from '../pages/AboutSection'
import SkillSection from '../pages/SkillSection'
import ExperienceTimeline from '../pages/ExperienceTimeline'

const LyoutsScrol = ({isDark}) => {
  return (
    <div className='min-h-screen'>
        <HomeSection 
        isDark={isDark}
        />
        <AboutSection isDark={isDark} />
        <ExperienceTimeline 
        isDark={isDark}
        />
    </div>
  )
}

export default LyoutsScrol
