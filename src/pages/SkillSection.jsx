import React from 'react'
import HeroCard from '../components/HeroCard';
import HeroTitle from '../components/heroTitle';
const SkillSection = ({ className }) => {
    return (
        <section id='skill' className='bg-blue-50 h-screen flex items-center justify-center'>
            <HeroTitle heading="Skill"/>
            <HeroCard
            url="#"
            img="/images/heroAbout.png"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia quidem animi tenetur, neque beatae."
            alt="junior react developer"
            />
        </section>
    )
}

export default SkillSection
