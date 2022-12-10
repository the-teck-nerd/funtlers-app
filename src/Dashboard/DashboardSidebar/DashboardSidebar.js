import React from 'react'
import { Link } from 'react-router-dom';

import './DashboardSidebar.scss';

import BrandLogo from '../../img/brand-logo-primary.png';
import BrandLogoIcon from '../../img/logo-icon.svg';

function DashboardSidebar() {
    return (
        <div className='Dashboard_Sidebar'>
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
                                Home
                            </p>
                        </Link>
                    </li>
                    <li className='sidebar_menu_li'>
                        <Link to="/partner-dashboard" className='sidebar_menu_link'>
                            <i class="ri-service-fill menu_icon"></i>
                            <p className='menu_text heading-m'>
                                Partner
                            </p>
                        </Link>
                    </li>
                    <li className='sidebar_menu_li'>
                        <Link className='sidebar_menu_link'>
                            <i class="ri-service-fill menu_icon"></i>
                            <p className='menu_text heading-m'>
                                Partners Analytics
                            </p>
                        </Link>
                    </li>
                    <li className='sidebar_menu_li'>
                        <Link className='sidebar_menu_link'>
                            <i class="ri-home-4-fill menu_icon"></i>
                            <p className='menu_text heading-m'>
                                Home
                            </p>
                        </Link>
                    </li>
                    <li className='sidebar_menu_li'>
                        <Link className='sidebar_menu_link'>
                            <i class="ri-home-4-fill menu_icon"></i>
                            <p className='menu_text heading-m'>
                                Home
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardSidebar