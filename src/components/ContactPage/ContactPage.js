import React from 'react'
import ContactSection from '../ContactSection/ContactSection';
import InnerHeader from '../InnerHeader/InnerHeader';
import './ContactPage.scss';

function ContactPage() {
    return (
        <div className='contact_page'>
            <InnerHeader
                HeaderHeading="Kontakt Oss"
                PageText="kontakt oss"
                hideHome={true}
            />
            <ContactSection />
        </div>
    )
}

export default ContactPage