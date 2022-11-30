import React from 'react'
import { Link } from "react-router-dom";

import './ContactSection.scss';

import TextImg from '../../img/funtler-text-img.svg';
import Input from '../Input/Input';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function ContactSection() {
    return (
        <section className='Contact_main'>
            <marquee className="marquee_main marquee_main_top" direction="left" behavior="scroll" scrollamount="5">
                <ul className='marquee_ul'>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                </ul>
            </marquee>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading-h2 heading'>
                                Don’t hesitate. Just send a message and we’ll reply aSAP.
                            </h2>
                            <p className='heading-m desc'>
                                The sources of ideas for software products are plentiful. These ideas can come from market research.
                            </p>
                            <ul className='icon_ul'>
                                <li className='icon_li'>
                                    <Link className='icon_text_otr'>
                                        <div className='Icon_otr'>
                                            <i class="ri-map-pin-fill Icon"></i>
                                        </div>
                                        <p className='heading-s text'>
                                            MDR 49W, Gayatri Puram Colony, Rampur, Pakistan
                                        </p>
                                    </Link>
                                </li>
                                <li className='icon_li'>
                                    <Link to="mailto:contact@funtlers.com" className='icon_text_otr'>
                                        <div className='Icon_otr'>
                                            <i class="ri-mail-fill Icon"></i>
                                        </div>
                                        <p className='heading-s text'>
                                            contact@funtlers.com
                                        </p>
                                    </Link>
                                </li>
                                <li className='icon_li'>
                                    <Link to="tel:+91 85279 11890" className='icon_text_otr'>
                                        <div className='Icon_otr'>
                                            <i class="ri-phone-fill Icon"></i>
                                        </div>
                                        <p className='heading-s text'>
                                            +91 85279 11890
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col_form_otr'>
                        <form className='col_form_inr'>
                            <div className='input_otr'>
                                <Input
                                    InputClass="Theme_input_white"
                                    Inputype="name"
                                    InputName="name"
                                    InputPlaceholder="Enter Your Full Name"
                                />
                            </div>
                            <div className='input_otr'>
                                <Input
                                    InputClass="Theme_input_white"
                                    Inputype="email"
                                    InputName="email"
                                    InputPlaceholder="Enter Your Email"
                                />
                            </div>
                            <div className='input_otr'>
                                <Input
                                    InputClass="Theme_input_white"
                                    Inputype="text"
                                    InputName="text"
                                    InputPlaceholder="Enter Your Subject"
                                />
                            </div>
                            <div className='input_otr'>
                                <textarea className='Theme_input_white Text_area' placeholder='Enter Your Message' />
                            </div>
                            <div className='action_otr'>
                                <ThemeBtn
                                    BtnClass="Theme_btn_primary send_btn"
                                    BtnText="Send Message"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <marquee className="marquee_main" direction="left" behavior="scroll" scrollamount="5">
                <ul className='marquee_ul'>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                    <li className='marquee_li'>
                        <img className='marquee_img' src={TextImg} alt='img' />
                    </li>
                </ul>
            </marquee>
        </section>
    )
}

export default ContactSection