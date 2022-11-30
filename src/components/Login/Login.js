import React from 'react'
import { Link } from 'react-router-dom';
import Check from '../Check/Check';
import InnerHeader from '../InnerHeader/InnerHeader';
import Input from '../Input/Input';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import './Login.scss';

function Login() {
    return (
        <div className='Login_page'>
            <InnerHeader
                HeaderHeading="Log In"
                PageText="Login"
            />
            <section className='login_main'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_form_otr'>
                            <div className='col_form_inr'>
                                <h3 className='heading-h3 form_heading'>
                                    Login to Funtlers
                                </h3>
                                <form className='form_main'>
                                    <div className='Input_otr'>
                                        <Input
                                            InputClass="Theme_input_white form_input"
                                            Inputype="name"
                                            InputName="name"
                                            InputPlaceholder="Enter Your Full Name"
                                        />
                                    </div>
                                    <div className='Input_otr'>
                                        <Input
                                            InputClass="Theme_input_white form_input"
                                            Inputype="email"
                                            InputName="email"
                                            InputPlaceholder="Enter Your Email Address"
                                        />
                                    </div>
                                    <div className='Input_otr check_forget_otr'>
                                        <Check
                                            CheckLabel="Remember Me"
                                        />
                                        <Link className='heading-s forgot_text'>
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <div className='Input_otr action_otr'>
                                        <ThemeBtn
                                            BtnClass="Theme_btn_primary form_btn"
                                            BtnText="Login"
                                        />
                                    </div>
                                    <p className='heading-sb Input_otr heading_another'>
                                        Another way to login
                                    </p>
                                    <div className='google_facebok_otr'>
                                        <Link className='buttons_otr google_button'>
                                            <i class="ri-google-fill button_icon"></i>
                                            <p className='heading-sb button_text'>
                                                Login with Google
                                            </p>
                                        </Link>
                                        <Link className='buttons_otr facebook_button'>
                                            <i class="ri-facebook-circle-fill button_icon"></i>
                                            <p className='heading-sb button_text'>
                                                Login with Facebook
                                            </p>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login