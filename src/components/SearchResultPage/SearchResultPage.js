import InnerHeader from '../InnerHeader/InnerHeader';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import Select from '../Select/Select'
import React, { useEffect, useState } from "react"
import FetchService from "../../api/FetchService";

import './SearchResultPage.scss';

import CardImg1 from '../../img/search-card-img1.png';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function SearchResultPage() {


    const [activities, setActivities] = useState([])
    const fetchData = () => {
        let ownerid = 1;
        let apicall =   FetchService.getAllActivities(ownerid);
    
        apicall
          .then(response => {
            
            return response.data
          })
          .then(data => {
            
            // data.data=[{"id":1,"name":"string","price":0,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":true,"ownerID":1,"activityType":"string"},{"id":2,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null},{"id":3,"name":"string","price":10,"validPeriod":"2022-11-27T00:00:00","description":"string","imagePath":"string","isDeleted":false,"ownerID":1,"activityType":null}];
            setActivities(data)
           
          })
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    
    
        const [visible, setVisible] = useState(8);

        const showMoreItems = () => {
            
        setVisible((prevValue) => prevValue + 8);
        };


    return (
        <div className='searchRsult_page'>
            <InnerHeader
                HeaderHeading="Søkeresultat fysisk"
                PageText="Søkeresultat fysisk"
            />
            <div className='searchRsult_main'>
                <div className='container'>
                    <div className='wrapper'>
                        <h3 className='heading-h3 filter_heading'>
                            Aktivitet ({activities.length>0 ? activities.length : 0})
                        </h3>
                        <div className='filter_main'>
                            <div className='activity_main'>
                                <ul className='activity_ul'>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Fysisk"
                                        />
                                    </li>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Antall"
                                        />
                                    </li>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Budsjett"
                                        />
                                    </li>
                                    <li className='activity_li'>
                                        <Select
                                            defaultText="Anledning"
                                        />
                                    </li>
                                </ul>
                                <div className='filter_otr'>
                                    <Select
                                        defaultText="Flere filtere"
                                    />
                                </div>
                            </div>
                            <div className='relevent_select_otr'>
                                <Select
                                    defaultText="Vis: Mest relevant"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row row_custom'>
                    {activities?.slice(0, visible).map(activity => (
                        <SearchResultCard
                            CardImg={activity.imagePath}
                            CardHeading={activity.name}
                            CardDesc={activity.description}
                            Data={activity}

                        />
                    ))}
               
                    </div>
                    <div className='action_otr'>

                        <button  onClick={showMoreItems} className="Theme_btn_primary">
                                {"Load More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultPage