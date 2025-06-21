import React from 'react'
import HomeSection from '../../pages/HomeSection'
import AboutSection from '../../pages/AboutSection'
import ServiceSection from '../../pages/ServiceSection';
import ContactSection from '../../pages/ContactSection';

function Layout(props) {

    if (props.page === 'home') return <HomeSection className="pt-20" />;
    else if(props.page === 'about') return <AboutSection className="pt-20" />;
    else if(props.page === 'services') return <ServiceSection />
    else if(props.page === 'contact') return <ContactSection />
}

export default Layout
