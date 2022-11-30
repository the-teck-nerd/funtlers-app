import React from 'react'
import AboutSection from '../AboutSection/AboutSection'
import ContactSection from '../ContactSection/ContactSection'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import Hero from '../Hero/Hero'
import TeamBuildingSection from '../TeamBuildingSection/TeamBuildingSection'

function LandingPage() {
    return (
        <>
            <Hero />
            <TeamBuildingSection />
            <AboutSection />
            <FeaturesSection />
            <ContactSection />
        </>
    )
}

export default LandingPage