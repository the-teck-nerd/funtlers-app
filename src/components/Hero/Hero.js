import React from 'react'
import { Link } from "react-router-dom";
import './Hero.scss';

import HeroImg from '../../img/hero-img.png';
import CircleText from '../../img/text-circle.svg';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function Hero() {
    return (
        <>
            <section className='hero_header'>
                <div className='Hero_main'>
                    <div className='container'>
                        <div className='row row_custom'>
                            <div className='col-lg-6 col_content_otr'>
                                <div className='col_content_inr'>
                                    <h1 className='heading-h1 Heading hero_heading'>
                                        Velkommen til
                                        <span className='heading_inr'>
                                            Funtlers
                                            <img className='circle_text' src={CircleText} alt='img' />
                                        </span>
                                    </h1>
                                    <p className='desc heading-l'>
                                        Din markedsplass for sosiale aktiviteter
                                    </p>
                                    <div className='action_otr'>
                                        <Link>
                                            <ThemeBtn
                                                BtnClass='Theme_btn_white'
                                                BtnText='Read More'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hero_img_otr'>
                        <img className='hero_img' src={HeroImg} alt='img' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero