import React from 'react'


import './ProfilePage.scss';


import ProfileImg from '../../img/profile-img.png';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import Select from '../../components/Select/Select';

function ProfilePage() {
    return (
        <div className='profile_page_main'>
            <div className='profile_img_content_main'>
                <div className='img_content_otr'>
                    <div className='img_otr'>
                        <img className='profile_img' src={ProfileImg} alt='img' />
                    </div>
                    <div className='content_otr'>
                        <h3 className='user_name heading-h3'>
                            Rehman A.
                        </h3>
                        <p className='designation_text heading-s'>
                            Owner & Founder
                        </p>
                        <div className='location_otr'>
                            <i class="ri-map-pin-fill location_icon"></i>
                            <p className='location_text heading-xs'>
                                California, United States
                            </p>
                        </div>
                    </div>
                </div>
                <Link to="/profile-edit" className='edit_btn_otr'>
                    <i class="ri-edit-fill btn_icon"></i>
                    <p className='btn_text heading-xsb'>
                        Edit Profile
                    </p>
                </Link>
            </div>
            <div className='info_main'>
                <p className='info_heading heading-lb'>
                    Profile Info
                </p>
                <form className='form_main'>
                    <ul className='info-ul'>
                        <li className='info_li'>
                            <label className='heading-xsb input_label'>
                                Full Name :
                            </label>
                            <Input
                                InputClass="Theme_input_white form_input input_disable"
                                Inputype="fullname"
                                InputName="fullname"
                                InputPlaceholder="Rehman A."
                            />
                        </li>
                        <li className='info_li'>
                            <label className='heading-xsb input_label'>
                                Phone Number :
                            </label>
                            <Input
                                InputClass="Theme_input_white form_input input_disable"
                                Inputype="number"
                                InputName="number"
                                InputPlaceholder="+(1) 987 6543"
                            />
                        </li>
                        <li className='info_li'>
                            <label className='heading-xsb input_label'>
                                E-mail :
                            </label>
                            <Input
                                InputClass="Theme_input_white form_input input_disable"
                                Inputype="email"
                                InputName="email"
                                InputPlaceholder="Funtlers@gmail.com"
                            />
                        </li>
                        <li className='info_li'>
                            <label className='heading-xsb input_label'>
                                Address :
                            </label>
                            <Input
                                InputClass="Theme_input_white form_input input_disable"
                                Inputype="address"
                                InputName="address"
                                InputPlaceholder="California, United States"
                            />
                        </li>
                    </ul>
                </form>
            </div>
            <div className='profile_table_main'>
                <div className='heading_filter_otr'>
                    <p className='heading_activity heading-lb'>
                        User setting
                    </p>
                    <div className='search_otr'>
                        <i class="ri-search-2-line search_icon"></i>
                        <Input
                            InputClass="Theme_input_white search_input"
                            Inputype="search"
                            InputName="search"
                            InputPlaceholder="Search"
                        />
                    </div>
                </div>
                <div className='profile_table'>
                    <table className='data_table'>
                        <thead className='table_header'>
                            <tr>
                                <th>
                                    <p className='heading-xsb header_text'>
                                        User ID
                                    </p>
                                </th>
                                <th>
                                    <p className='heading-xsb header_text'>
                                        Profile
                                    </p>
                                </th>
                                <th>
                                    <p className='heading-xsb header_text'>
                                        Date
                                    </p>
                                </th>
                                <th>
                                    <p className='heading-xsb header_text'>
                                        Total
                                    </p>
                                </th>
                                <th>
                                    <p className='heading-xsb header_text'>
                                        Role
                                    </p>
                                </th>
                                <th>
                                    <p className='heading-xsb header_text'>
                                        Status
                                    </p>
                                </th>
                                <th>
                                    <p className='heading-xsb header_text'>
                                        Action
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table_body'>
                            <tr>
                                <td>
                                    <p className='heading-xs body_text'>
                                        #VL2110
                                    </p>
                                </td>
                                <td>
                                    <div className='prodile_otr'>
                                        <img className='profile_img' src={ProfileImg} alt='img' />
                                        <p className='heading-xs profile_name'>
                                            Benedicte
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='heading-xs body_text'>
                                        07 Oct, 2021
                                    </p>
                                </td>
                                <td>
                                    <p className='heading-xsb body_text'>
                                        $24.05
                                    </p>
                                </td>
                                <td>
                                    <div className='role_select_otr'>
                                        <Select

                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className='status_text_otr'>
                                        <p className='heading-xsb status_text'>
                                            Paid
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div className='icon_otr'>
                                        <i class="ri-edit-fill edit_icon"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage