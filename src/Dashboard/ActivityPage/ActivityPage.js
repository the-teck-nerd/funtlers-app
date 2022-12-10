import React from 'react'
import SearchResultCard from '../../components/SearchResultCard/SearchResultCard';
import Select from '../../components/Select/Select';

import './ActivityPage.scss';

import CardImg1 from '../../img/search-card-img1.png';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';

function ActivityPage() {
    return (
        <div className='activity_page_main'>
            <div className='heading_filter_otr'>
                <p className='heading_activity heading-lb'>
                    Activity
                </p>
                <div className='filter_main'>
                    <p className='sort_text heading-xs'>
                        Sort By:
                    </p>
                    <Select />
                </div>
            </div>
            <div className='row row_custom'>
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
                <SearchResultCard
                    IconDivClass="edit_icon_otr"
                    IconClass="ri-edit-fill"
                    CardImg={CardImg1}
                    CardHeading="Ølsmaking"
                    CardDesc="300kr pr.pers."
                />
            </div>
            <div className='action_otr'>
                <ThemeBtn
                    BtnClass="Theme_btn_primary load_more_btn"
                    BtnText="Load More"
                />
            </div>
        </div>
    )
}

export default ActivityPage