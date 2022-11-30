import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard';
import SectionHeadingDesc from '../SectionHeadingDesc/SectionHeadingDesc';

import './FeaturesSection.scss';

function FeaturesSection() {
    return (
        <section className='Features_main'>
            <div className='container'>
                <SectionHeadingDesc
                    Heading="Why Choose Funtlers."
                    Desc="Funtler drives av to gode venninner som tror på å skape lykke for deg selv og de man er glad i."
                />
                <div className='row row_custom'>
                    <FeatureCard
                        IconClass="ri-heart-fill Icon"
                        IconClass2="ri-heart-fill Icon2"
                        CardTitle="Enjoy time"
                        CardHeading="Great Tournament"
                        CardDesc="It is a long established fact that a will be reader looking at its layout."
                    />
                    <FeatureCard
                        IconClass="ri-heart-fill Icon"
                        IconClass2="ri-heart-fill Icon2"
                        CardTitle="Enjoy time"
                        CardHeading="Great Tournament"
                        CardDesc="It is a long established fact that a will be reader looking at its layout."
                    />
                    <FeatureCard
                        IconClass="ri-heart-fill Icon"
                        IconClass2="ri-heart-fill Icon2"
                        CardTitle="Enjoy time"
                        CardHeading="Great Tournament"
                        CardDesc="It is a long established fact that a will be reader looking at its layout."
                    />
                    <FeatureCard
                        IconClass="ri-heart-fill Icon"
                        IconClass2="ri-heart-fill Icon2"
                        CardTitle="Enjoy time"
                        CardHeading="Great Tournament"
                        CardDesc="It is a long established fact that a will be reader looking at its layout."
                    />
                    <FeatureCard
                        IconClass="ri-heart-fill Icon"
                        IconClass2="ri-heart-fill Icon2"
                        CardTitle="Enjoy time"
                        CardHeading="Great Tournament"
                        CardDesc="It is a long established fact that a will be reader looking at its layout."
                    />
                    <FeatureCard
                        IconClass="ri-heart-fill Icon"
                        IconClass2="ri-heart-fill Icon2"
                        CardTitle="Enjoy time"
                        CardHeading="Great Tournament"
                        CardDesc="It is a long established fact that a will be reader looking at its layout."
                    />
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection