import React from 'react'
import { Link } from 'react-router-dom'
import './SearchResultCard.scss';

function SearchResultCard(props) {
    return (
        <div className='col-lg-3 col_searchCard_otr'>
            <div className='col_searchCard_inr'>
                <div className='img_otr'>
                    <img className='card_img' src={props.CardImg} alt='img' />
                </div>
                <div className='content'>
                    <Link className='heading-lb card_heading'>
                        {props.CardHeading}
                    </Link>
                    <p className='heading-s card_desc'>
                        {props.CardDesc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SearchResultCard