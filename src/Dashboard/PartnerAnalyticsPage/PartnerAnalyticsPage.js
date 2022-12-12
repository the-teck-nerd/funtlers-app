import React from 'react'
import AnalyticsCard from '../AnalyticsCard/AnalyticsCard';

import './PartnerAnalyticsPage.scss';

function PartnerAnalyticsPage() {
    return (
        <div className='partner_analytics_page'>
            <div className='heading_otr'>
                <p className='heading-lb heading_partner'>
                    Partner Anaylytics
                </p>
            </div>
            <div className='statistics_main'>
                <div className='row row_custom'>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-money-dollar-circle-fill"
                            CardHeading="$559.25k"
                            CardName="Total Earnings"
                            PercentText="+16.24 %"
                            TextColor="green_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-shopping-bag-fill"
                            CardHeading="36,800"
                            CardName="Orders"
                            PercentText="+16.24 %"
                            TextColor="green_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-user-fill"
                            CardHeading="80.95M"
                            CardName="Customers"
                            PercentText="-12.24 %"
                            TextColor="red_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-file-list-fill"
                            CardHeading="3000k"
                            CardName="Active Activities"
                            PercentText="+16.24 %"
                            TextColor="green_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-shopping-bag-fill"
                            CardHeading="36,800"
                            CardName="Activity Sold"
                            PercentText="-9.24 %"
                            TextColor="red_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-wallet-fill"
                            CardHeading="$165.25k"
                            CardName="My Balance"
                            PercentText="+0.00 %"
                            TextColor="black_text"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerAnalyticsPage