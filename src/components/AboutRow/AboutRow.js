import React from 'react'

import './AboutRow.scss';

import AboutImg from '../../img/about-img.png';
import AboutShape1 from '../../img/circle-shape.svg';
import AboutShape2 from '../../img/triangle-shape.svg';

function AboutRow(props) {
    return (
        <div className={`row about_row_custom ${props.AboutRowClass}`}>
            <div className='col-lg-6 col_content_otr'>
                <div className='col_content_inr'>
                    <h2 className='heading-h2 about_heading'>
                        {props.AboutHeading}
                    </h2>
                    <p className='heading-s desc'>
                        {props.desc1}
                    </p>
                    <p className='heading-s desc'>
                        {props.desc2}
                    </p>
                    <p className='heading-s desc'>
                        {props.desc3}
                    </p>
                    <p className='heading-s desc'>
                        {props.desc4}
                    </p>
                    <p className='heading-s desc'>
                        {props.desc5}
                    </p>
                </div>
            </div>
            <div className='col-lg-6 col_img_otr'>
                <div className='col_img_inr'>
                    <img className='about_img' src={AboutImg} alt='img' />
                    <img className='about_shape shape1' src={AboutShape1} alt='img' />
                    <img className='about_shape shape2' src={AboutShape2} alt='img' />
                </div>
            </div>
        </div>
    )
}

export default AboutRow