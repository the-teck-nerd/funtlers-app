import AnalyticsCard from '../AnalyticsCard/AnalyticsCard';
import FetchService from "../../api/FetchService";
import React, { useState, useEffect } from "react";

import './PartnerAnalyticsPage.scss';
import { isLoggedIn } from '../../api/NewLoginService';

function PartnerAnalyticsPage() {

   const [filteredPartners, setFilteredPartners] = useState([]);
   const [userObject, setUser] = useState(isLoggedIn());

    FetchService.GetAnalyticsById(userObject.user.id).then(data=>{
        setFilteredPartners(data.data[0]);
    })
    
    return (
        <div className='partner_analytics_page'>
            <div className='heading_otr'>
                <p className='heading-lb heading_partner'>
                     Anaylytics
                </p>
            </div>
            <div className='statistics_main'>
                <div className='row row_custom'>
                    <div className="col-lg-3 col_card_otr">
                        <AnalyticsCard
                            CardIcon="ri-money-dollar-circle-fill"
                            CardHeading={JSON.stringify(filteredPartners.totalEarning) }
                            CardName="Total Earning"
                            PercentText=""
                            TextColor="green_text"
                        />
                
                    </div>

                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-shopping-bag-fill"
                            CardHeading={JSON.stringify(filteredPartners.orders) }
                            CardName="Orders"
                            PercentText=""
                            TextColor="green_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-user-fill"
                            CardHeading={JSON.stringify(filteredPartners.customers) }
                            CardName="Customers"
                            PercentText=""
                            TextColor="red_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-file-list-fill"
                            CardHeading={JSON.stringify(filteredPartners.activityActive) }
                            CardName="Active Activities"
                            PercentText=""
                            TextColor="green_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-shopping-bag-fill"
                            CardHeading={JSON.stringify(filteredPartners.activitySold) }
                            CardName="Activity Sold"
                            PercentText=""
                            TextColor="red_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-wallet-fill"
                            CardHeading={JSON.stringify(filteredPartners.partners) }
                            CardName="Partners"
                            PercentText=""
                            TextColor="black_text"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerAnalyticsPage