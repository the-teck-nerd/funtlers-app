import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import Select from '../Select/Select'

import './SearchResultPage.scss';

import CardImg1 from '../../img/search-card-img1.png';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function SearchResultPage() {
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
                            Aktivitet (52)
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
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="Shuffleboard"
                            CardDesc="250kr pr.pers."
                        />
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="Ølsmaking"
                            CardDesc="250kr pr.pers."
                        />
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="RIB båt"
                            CardDesc="250kr pr.pers."
                        />
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="Bowling"
                            CardDesc="250kr pr.pers."
                        />
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="Boblefotball"
                            CardDesc="250kr pr.pers."
                        />
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="Vinsmaking"
                            CardDesc="250kr pr.pers."
                        />
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="Fangen på fortet"
                            CardDesc="250kr pr.pers."
                        />
                        <SearchResultCard
                            CardImg={CardImg1}
                            CardHeading="Oslo Camping"
                            CardDesc="250kr pr.pers."
                        />
                    </div>
                    <div className='action_otr'>
                        <ThemeBtn
                            BtnClass="Theme_btn_primary"
                            BtnText="Load More"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultPage