import React from 'react'
import AccordionFaq from '../AccordionFaq/AccordionFaq'
import SectionHeadingDesc from '../SectionHeadingDesc/SectionHeadingDesc'
import Accordion from 'react-bootstrap/Accordion';

import './FaqPage.scss';
import InnerHeader from '../InnerHeader/InnerHeader';

function FaqPage() {
    return (
        <div className='faq_page'>
            <InnerHeader
                HeaderHeading="FAQ"
                PageText="FAQ"
            />
            <div className='faq_main'>
                <div className='container'>
                    <SectionHeadingDesc
                        Heading="Frequently Ask Question."
                        Desc="These are the most Frequently Ask Questions.If you have any question,please"
                        LinkPath="/contact"
                        LinkClass="contact_link"
                        LinkText="contact us"
                    />
                    <div className='row row_custom'>
                        <div className='col-lg-8 col_faq_otr'>
                            <div className='col_faq_inr'>
                                <Accordion defaultActiveKey="0" className='accordion_main'>
                                    <AccordionFaq
                                        AccordionKey="0"
                                        AccordionHeading="Lorem Ipsum is simply dummy and typesetting industry?"
                                        AccordionDesc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point making it look like readable English."
                                    />
                                    <AccordionFaq
                                        AccordionKey="1"
                                        AccordionHeading="Lorem Ipsum is simply dummy and typesetting industry?"
                                        AccordionDesc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point making it look like readable English."
                                    />
                                    <AccordionFaq
                                        AccordionKey="2"
                                        AccordionHeading="Lorem Ipsum is simply dummy and typesetting industry?"
                                        AccordionDesc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point making it look like readable English."
                                    />
                                    <AccordionFaq
                                        AccordionKey="3"
                                        AccordionHeading="Lorem Ipsum is simply dummy and typesetting industry?"
                                        AccordionDesc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point making it look like readable English."
                                    />
                                    <AccordionFaq
                                        AccordionKey="4"
                                        AccordionHeading="Lorem Ipsum is simply dummy and typesetting industry?"
                                        AccordionDesc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point making it look like readable English."
                                    />
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage