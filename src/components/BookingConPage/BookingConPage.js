import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader';
import SectionHeadingDesc from '../SectionHeadingDesc/SectionHeadingDesc';
import { Link } from "react-router-dom";
import {useLocation , useNavigate} from 'react-router-dom';


import './BookingConPage.scss';

import bookingImg from '../../img/booking-confirmation-img.png';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function BookingConPage() {
    const location = useLocation()
    
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

      const formatTime=(dateString)=>{
        return new Date(dateString).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
      }

    

    return (
        <div className='BookingCon_Page'>
            <InnerHeader
                HeaderHeading="Bookingbekreftelse"
                PageText="Bookingbekreftelse"
            />
            <div className='BookingCon_main'>
                <div className='container'>
                    <SectionHeadingDesc
                        Heading="Hurra! Nå er det bare å glede seg!"
                        Desc="Bookingbekreftelse er sendt på mail til xxxx@gmail.com"
                    />
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_img_otr'>
                            <div className='col_img_inr'>
                                <img className='booking_conf_img' src={bookingImg} alt='img' />
                            </div>
                        </div>
                        <div className='col-lg-6 col_content_otr'>
                            <div className='col_content_inr'>
                                <p className='heading-l booking_text'>
                                    <span className='heading-lb booking_text_inr'>Aktivitet : </span> {location.state.activityOrders[0].name}
                                </p>
                                <p className='heading-l booking_text'>
                                    <span className='heading-lb booking_text_inr'>Tid : </span>  {formatDate(location.state.createdDate)}&nbsp;{formatTime(location.state.createdDate)}
                                </p>
                                <p className='heading-l booking_text'>
                                    <span className='heading-lb booking_text_inr'>Adresse : </span>  xxxxxxxx
                                </p>
                                <p className='heading-l booking_text'>
                                    <span className='heading-lb booking_text_inr'>Antall : </span>  {location.state.activityOrders[0].totalPerson} personer
                                </p>
                                <p className='heading-l booking_text'>
                                    <span className='heading-lb booking_text_inr'>Inkludert : </span>  Inngang, t-shirts, drikke
                                </p>
                                <p className='heading-l booking_text'>
                                    <span className='heading-lb booking_text_inr'>Pris : </span>  {location.state.activityOrders[0].totalPerson} {location.state.totalAmount}kr ink. mva
                                </p>
                                <ul className='social_ul'>
                                    <li className='social_li'>
                                        <Link className='social_a'>
                                            <i class="ri-facebook-circle-fill social_icon"></i>
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_a'>
                                            <i class="ri-instagram-fill social_icon"></i>
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_a'>
                                            <i class="ri-twitter-fill social_icon"></i>
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_a'>
                                            <i class="ri-linkedin-fill social_icon"></i>
                                        </Link>
                                    </li>
                                </ul>
                                <Link className='action_otr'>
                                    <ThemeBtn
                                        BtnClass="Theme_btn_primary del_btn"
                                        BtnText="Del"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingConPage