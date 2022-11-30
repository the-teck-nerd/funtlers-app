import React from 'react'
import ContactSection from '../ContactSection/ContactSection';
import InnerHeader from '../InnerHeader/InnerHeader';
import './ContactPage.scss';

function ContactPage() {
    return (
        <div className='contact_page'>
            <InnerHeader
                HeaderHeading="Contact Us"
                PageText="Contact Us"
            />
            <ContactSection />
        </div>
    )
}

export default ContactPage