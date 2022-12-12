import React from 'react'

import './AnalyticsCard.scss';

function AnalyticsCard(props) {
    return (
        <div className='analytics_card_inr'>
            <div className='icon_otr'>
                <i class={`card_icon ${props.CardIcon}`}></i>
            </div>
            <h3 className='heading-lb Card_heading'>
                {props.CardHeading}
            </h3>
            <div className='name_percent_otr'>
                <p className='heading-xs name_text'>
                    {props.CardName}
                </p>
                <p className={`heading-xs percent_text ${props.TextColor}`}>
                    {props.PercentText}
                </p>
            </div>
        </div>
    )
}

export default AnalyticsCard