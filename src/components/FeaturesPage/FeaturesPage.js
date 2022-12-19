import React from 'react'
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import InnerHeader from '../InnerHeader/InnerHeader';

import './FeaturesPage.scss';

function FeaturesPage() {
    return (
        <div className='feature_page_main'>
            <InnerHeader
                HeaderHeading="Features"
                PageText="Features"
            />
            <div className='feature_main'>
                <FeaturesSection />
            </div>
        </div>
    )
}

export default FeaturesPage