import AnalyticsCard from '../AnalyticsCard/AnalyticsCard';
import FetchService from "../../api/FetchService";
import React, { useState, useEffect } from "react";

import './AnalyticsPage.scss';
import { isLoggedIn } from '../../api/NewLoginService';

function AnalyticsPage() {

   const [filteredPartners, setFilteredPartners] = useState([]);
   const [userObject, setUser] = useState(isLoggedIn());

   const fetchData = () => {
    FetchService.GetAnalytics().then(data=>{
        setFilteredPartners(data.data[0]);
    })
    }

    
  useEffect(() => {
    fetchData();
  }, []);
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
                            CardHeading={filteredPartners.TotalEarning}
                            CardName="Total Earning"
                            PercentText=""
                            TextColor="green_text"
                        />
                
                    </div>

                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-shopping-bag-fill"
                            CardHeading={filteredPartners.Orders}
                            CardName="Orders"
                            PercentText=""
                            TextColor="green_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-user-fill"
                            CardHeading={filteredPartners.Customers}
                            CardName="Customers"
                            PercentText=""
                            TextColor="red_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-file-list-fill"
                            CardHeading={filteredPartners.ActivityActive}
                            CardName="Active Activities"
                            PercentText=""
                            TextColor="green_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-shopping-bag-fill"
                            CardHeading={filteredPartners.ActivitySold}
                            CardName="Activity Sold"
                            PercentText=""
                            TextColor="red_text"
                        />
                    </div>
                    <div className='col-lg-3 col_card_otr'>
                        <AnalyticsCard
                            CardIcon="ri-wallet-fill"
                            CardHeading={filteredPartners.Partners}
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

export default AnalyticsPage