import React from 'react'
import './Footer.scss';
import { Link } from "react-router-dom";


import BrandLogo from '../../img/brand-logo.png';
import Input from '../Input/Input';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function Footer() {
    return (
        <>
            <section className='footer_main'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-4 col_logo_otr'>
                            <div className='col_logo_inr'>
                                <Link to="/" className='logo_otr'>
                                    <img className='logo' src={BrandLogo} alt='logo' />
                                </Link>
                                <p className='desc heading-m'>
                                    Din markedsplass for sosiale aktiviter
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
                                            <i class="ri-snapchat-fill social_icon"></i>
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_a'>
                                            <i class="ri-linkedin-fill social_icon"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col_link_otr'>
                            <div className='col_link_inr'>
                                <ul className='link_ul'>
                                    <li className='link_li'>
                                        <Link to="/contact" className='heading-s link_a'>
                                            Contact
                                        </Link>
                                    </li>
                                    <li className='link_li'>
                                        <Link to="/login" className='heading-s link_a'>
                                            Login
                                        </Link>
                                    </li>
                                    <li className='link_li'>
                                        <Link to="/searchResult" className='heading-s link_a'>
                                            Søkeresultat fysisk
                                        </Link>
                                    </li>
                                    <li className='link_li'>
                                        <Link to="/booking-confirmation" className='heading-s link_a'>
                                            Bookingbekreftelse
                                        </Link>
                                    </li>
                                    <li className='link_li'>
                                        <Link to="/campaign" className='heading-s link_a'>
                                            Campaign
                                        </Link>
                                    </li>
                                    <li className='link_li'>
                                        <Link to="/features" className='heading-s link_a'>
                                            Features
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-5 col_sub_otr'>
                            <div className='col_sub_inr'>
                                <h3 className='heading-h3 heading_sub'>
                                    Subscribe to Funtlers For Latest update.
                                </h3>
                                <p className='heading-s desc_sub'>
                                    Get the latest news and updates
                                </p>
                                <form className='form_otr'>
                                    <Input
                                        InputClass="Theme_input_light"
                                        Inputype="email"
                                        InputName="email"
                                        InputPlaceholder="Enter Your Email"
                                    />
                                    <ThemeBtn
                                        BtnClass="Theme_btn_white"
                                        BtnText="Subscribe Now"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copy_right_main'>
                    <div className='container'>
                        <div className='wrapper'>
                            <p className='heading-s cr_text'>
                                Copyright © 2022 <Link to="/" className='heading-sb cr_text_inr'>FUNTLERS</Link> .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer