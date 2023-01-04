import React from 'react'


import './FeatureCard.scss';

import CardImg1 from '../../img/card-shape-light.svg';
import CardImg2 from '../../img/card-shape-white.svg';

function FeatureCard(props) {
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 col_card_otr'>
            <div className='col_card_inr h-100'>
                <div className='Icon_otr'>
                    <i class={props.IconClass}></i>
                    <i class={props.IconClass2}></i>
                </div>
                <p className='heading-s card_tag'>
                    {props.CardTitle}
                </p>
                <h3 className='heading-h3 card_heading'>
                    {props.CardHeading}
                </h3>
                <p className='heading-s card_desc'>
                    {props.CardDesc}
                </p>
                <img className='card_img1 card_img' src={CardImg1} alt='img' />
                <img className='card_img2 card_img' src={CardImg2} alt='img' />
            </div>
        </div>
    )
}

export default FeatureCard