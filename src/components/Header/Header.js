import React from 'react'
import './Header.scss';
import { Link } from "react-router-dom";
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import BrandLogo from '../../img/brand-logo.png';

function Header() {
    return (
        <header className='header_main'>
            <div className='container-fluid'>
                <div className='wrapper'>
                    <Link to="/" className='logo_otr'>
                        <img className='logo' src={BrandLogo} alt='logo' />
                    </Link>
                    <div className='action_menu_otr'>
                        <ul className='menu_ul'>
                            <li className='menu_li'>
                                <Link to="/about" className='menu_a heading-sb'>
                                    Om oss
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link to="/contact" className='menu_a heading-sb'>
                                    Kontakt
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link to="/partner" className='menu_a heading-sb'>
                                    Partner
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link to="/faq" className='menu_a heading-sb'>
                                    Spørsmål og svar
                                </Link>
                            </li>
                        </ul>
                        <div className='action_otr'>
                            <Link to="/login" className='action'>
                                <ThemeBtn
                                    BtnClass='Theme_btn_light'
                                    BtnText='Login'
                                />
                            </Link>
                            <Link to="/register" className='action'>
                                <ThemeBtn
                                    BtnClass='Theme_btn_white'
                                    BtnText='Register'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header