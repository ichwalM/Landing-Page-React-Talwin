import React, {useEffect} from 'react'
import HomeSection from '../pages/HomeSection'
import AboutSection from '../pages/AboutSection'
import ServiceSection from '../pages/ServiceSection';
import ContactSection from '../pages/ContactSection';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Layout(props) {
    
    useEffect(()=>{
        Aos.init({
            offset: 200,      
            duration: 600,    
            easing: 'ease-in-out', 
            delay: 100,       
            once: true,       
            mirror: false,    
            anchorPlacement: 'top-bottom'
        })
    },[])
    if (props.page === 'home') return <HomeSection className="pt-20" />;
    else if(props.page === 'about') return <AboutSection className="pt-20"/>;
    else if(props.page === 'services') return <ServiceSection />
    else if(props.page === 'contact') return <ContactSection />
}

export default Layout
