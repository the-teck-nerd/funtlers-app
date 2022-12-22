import React from 'react'
import { Link } from 'react-router-dom';

import './TeamCard.scss';

function TeamCard(props) {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col_teamCard_otr'>
            <div className='col_teamCard_inr'>
                <Link to={props.CardLink} className='img_otr'>
                    <img className='card_img' src={props.CardImg} alt='img' />
                </Link>
                <div className='content'>
                    <Link to={props.CardLink} className='heading-lb Card_Heading'>{props.CardHeading}</Link>
                    <p className='heading-s Card_Desc'>{props.CardDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard