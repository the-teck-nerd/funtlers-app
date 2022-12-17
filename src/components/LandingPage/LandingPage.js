import React from 'react'
import AboutSection from '../AboutSection/AboutSection'
import CampaignPage from '../CampaignPage/CampaignPage'
import ContactSection from '../ContactSection/ContactSection'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import Hero from '../Hero/Hero'
import TeamBuildingSection from '../TeamBuildingSection/TeamBuildingSection'

function LandingPage() {
    return (
        <>
            <Hero />
            <div className='landing_contact_otr'>
                <ContactSection />
            </div>
        </>
    )
}

export default LandingPage