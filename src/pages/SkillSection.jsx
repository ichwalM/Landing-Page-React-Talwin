import React from 'react'
import HeroCard from '../components/HeroCard';
import HeroTitle from '../components/HeroTitle';
const SkillSection = ({ className }) => {
    return (
        <section id='skill' className="min-h-screen pt-5 bg-blue-50">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <HeroTitle heading="Skill & Tools"/>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
                        <HeroCard
                        url="#"
                        img="/images/heroAbout.png"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia quidem animi tenetur, neque beatae."
                        alt="junior react developer"
                        />
                        <HeroCard
                        url="#"
                        img="/images/heroAbout.png"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia quidem animi tenetur, neque beatae."
                        alt="junior react developer"
                        />
                        <HeroCard
                        url="#"
                        img="/images/heroAbout.png"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia quidem animi tenetur, neque beatae."
                        alt="junior react developer"
                        />
                        <HeroCard
                        url="#"
                        img="/images/heroAbout.png"
                        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia quidem animi tenetur, neque beatae."
                        alt="junior react developer"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillSection
