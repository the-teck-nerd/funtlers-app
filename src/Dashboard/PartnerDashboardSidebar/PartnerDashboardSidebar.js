import React from 'react'
import { Link } from 'react-router-dom';

import './PartnerDashboardSidebar.scss';

import BrandLogo from '../../img/brand-logo-primary.png';
import BrandLogoIcon from '../../img/logo-icon.svg';

function PartnerDashboardSidebar(props) {
    return (
        <div className={props.SidebarAddClass ? 'Dashboard_Sidebar Dashboard_Sidebar_strech' : 'Dashboard_Sidebar'}>
            <Link to="/" className='logo_otr'>
                <img className='logo_icon' src={BrandLogoIcon} alt='logo' />
                <img className='brand_logo' src={BrandLogo} alt='logo' />
            </Link>
            <div className='sidebar_menu_main'>
                <ul className='sidebar_menu_ul'>
                    <li className='sidebar_menu_li'>
                        <Link to="/" className='sidebar_menu_link active'>
                            <i class="ri-home-4-fill menu_icon"></i>
                            <p className='menu_text heading-m'>
                                Activities
                            </p>
                        </Link>
                    </li>
                    <li className='sidebar_menu_li'>
                        <Link to="/order" className='sidebar_menu_link'>
                            <i class="ri-shopping-cart-fill menu_icon"></i>
                            <p className='menu_text heading-m'>
                                Order
                            </p>
                        </Link>
                    </li>
                  
                    <li className='sidebar_menu_li'>
                        <Link to="/partner-analytics" className='sidebar_menu_link'>
                            <i class="ri-service-fill menu_icon"></i>
                            <p className='menu_text heading-m'>
                                 Analytics
                            </p>
                        </Link>
                    </li>
                    
                   
                </ul>
            </div>
        </div>
    )
}

export default PartnerDashboardSidebar