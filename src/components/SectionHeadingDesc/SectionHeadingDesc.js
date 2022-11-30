import React from 'react'
import { Link } from 'react-router-dom';

import './SectionHeadingDesc.scss';

function SectionHeadingDesc(props) {
    return (
        <div className='content_wrapper'>
            <h2 className='heading-h2 wrapper_heading'>
                {props.Heading}
            </h2>
            <p className='heading-m wrapper_desc'>
                {props.Desc}
                <Link to={props.LinkPath} className={props.LinkClass}>
                    {props.LinkText}
                </Link>
            </p>
        </div>
    )
}

export default SectionHeadingDesc