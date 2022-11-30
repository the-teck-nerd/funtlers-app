import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import './AccordionFaq.scss';

function AccordionFaq(props) {
    return (
        <Accordion.Item eventKey={props.AccordionKey}>
            <Accordion.Header>
                <i class="ri-add-circle-fill heading_Icon"></i>
                <p className='heading-lb accordion_heading'>
                    {props.AccordionHeading}
                </p>
            </Accordion.Header>
            <Accordion.Body>
                <div className='desc_otr'>
                    <p className='accordion_desc'>{props.AccordionDesc}</p>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default AccordionFaq