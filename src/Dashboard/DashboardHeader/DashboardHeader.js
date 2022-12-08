import React from 'react'
import Input from '../../components/Input/Input';

import './DashboardHeader.scss';

import ProfileImg from '../../img/profile-img.png';
import { Link } from 'react-router-dom';

function DashboardHeader() {
    return (
        <div className='dashboard_header'>
            <div className='wrapper'>
                <div className='sidebar_menu_icon_otr'>
                    <i class="ri-menu-3-line sidebar_menu_icon"></i>
                </div>
                <div className='search_otr'>
                    <i class="ri-search-2-line search_icon"></i>
                    <Input
                        InputClass="Theme_input_white search_input"
                        Inputype="search"
                        InputName="search"
                        InputPlaceholder="Search"
                    />
                </div>
                <div className='profile_main'>
                    <div className='profile_otr'>
                        <img className='profile_img' src={ProfileImg} alt='img' />
                        <p className='user_name heading-sb'>
                            Rehman A.
                        </p>
                    </div>
                    <div className='profile_drop_otr'>
                        <ul className='profile_drop_ul'>
                            <p className='user_text heading-xs'>
                                Welcome Rehman A.
                            </p>
                            <li className='profile_drop_li'>
                                <Link to="/profile" className='profile_drop_link'>
                                    <i class="ri-user-3-fill menu_icon"></i>
                                    <p className='menu_text heading-xs'>
                                        Profile
                                    </p>
                                </Link>
                            </li>
                            <li className='profile_drop_li'>
                                <Link className='profile_drop_link'>
                                    <i class="ri-file-list-2-fill menu_icon"></i>
                                    <p className='menu_text heading-xs'>
                                        Activity
                                    </p>
                                </Link>
                            </li>
                            <li className='profile_drop_li'>
                                <Link className='profile_drop_link'>
                                    <i class="ri-settings-3-fill menu_icon"></i>
                                    <p className='menu_text heading-xs'>
                                        Setting
                                    </p>
                                </Link>
                            </li>
                            <li className='profile_drop_li'>
                                <Link className='profile_drop_link'>
                                    <i class="ri-logout-box-fill menu_icon"></i>
                                    <p className='menu_text heading-xs'>
                                        Logout
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader