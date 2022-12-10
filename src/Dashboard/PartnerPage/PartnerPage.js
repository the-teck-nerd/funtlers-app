import React from 'react'
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';

import './PartnerPage.scss';

import ProfileImg from '../../img/profile-img.png';

function PartnerPage() {
    return (
        <div className='partner_page_main'>
            <div className='heading_filter_otr'>
                <p className='heading_activity heading-lb'>
                    Partners
                </p>
                <div className='filter_search_otr'>
                    <div className='filter_main'>
                        <p className='sort_text heading-xs'>
                            Sort By:
                        </p>
                        <Select />
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
                </div>
            </div>
            <div className='partner_table'>
                <table className='data_table'>
                    <thead className='table_header'>
                        <tr>
                            <th>
                                <p className='heading-xsb header_text'>
                                    Order ID
                                </p>
                            </th>
                            <th>
                                <p className='heading-xsb header_text'>
                                    User Name
                                </p>
                            </th>
                            <th>
                                <p className='heading-xsb header_text'>
                                    Verification Code
                                </p>
                            </th>
                            <th>
                                <p className='heading-xsb header_text'>
                                    Is Verified
                                </p>
                            </th>
                            <th>
                                <p className='heading-xsb header_text'>
                                    Created Date
                                </p>
                            </th>
                            <th>
                                <p className='heading-xsb header_text'>
                                    Event Date
                                </p>
                            </th>
                            <th>
                                <p className='heading-xsb header_text'>
                                    Amount
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
                                        William Elmore
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    84789
                                </p>
                            </td>
                            <td>
                                <p className='heading-xsb body_text'>
                                    Verified
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    $1,798
                                </p>
                            </td>
                        </tr>
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
                                        William Elmore
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    84789
                                </p>
                            </td>
                            <td>
                                <p className='heading-xsb body_text'>
                                    Verified
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    $1,798
                                </p>
                            </td>
                        </tr>
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
                                        William Elmore
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    84789
                                </p>
                            </td>
                            <td>
                                <p className='heading-xsb body_text'>
                                    Verified
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    $1,798
                                </p>
                            </td>
                        </tr>
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
                                        William Elmore
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    84789
                                </p>
                            </td>
                            <td>
                                <p className='heading-xsb body_text'>
                                    Verified
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    $1,798
                                </p>
                            </td>
                        </tr>
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
                                        William Elmore
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    84789
                                </p>
                            </td>
                            <td>
                                <p className='heading-xsb body_text'>
                                    Verified
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    $1,798
                                </p>
                            </td>
                        </tr>
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
                                        William Elmore
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    84789
                                </p>
                            </td>
                            <td>
                                <p className='heading-xsb body_text'>
                                    Verified
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    $1,798
                                </p>
                            </td>
                        </tr>
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
                                        William Elmore
                                    </p>
                                </div>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    84789
                                </p>
                            </td>
                            <td>
                                <p className='heading-xsb body_text'>
                                    Verified
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    4/26/2022
                                </p>
                            </td>
                            <td>
                                <p className='heading-xs body_text'>
                                    $1,798
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PartnerPage