import React from 'react'
import { Link } from 'react-router-dom';
import InnerHeader from '../InnerHeader/InnerHeader';
import Input from '../Input/Input';
import ThemeBtn from '../ThemeBtn/ThemeBtn';


import './Register.scss';

function Register() {
    return (
        <div className='Register_page'>
            <InnerHeader
                HeaderHeading="Register"
                PageText="Register"
            />
            <section className='Register_main'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_form_otr'>
                            <div className='col_form_inr'>
                                <h3 className='heading-h3 form_heading'>
                                    Register to Funtlers
                                </h3>
                                <form className='form_main'>
                                    <div className='Input_otr'>
                                        <Input
                                            InputClass="Theme_input_white form_input"
                                            Inputype="fname"
                                            InputName="fname"
                                            InputPlaceholder="Enter Your First Name"
                                        />
                                    </div>
                                    <div className='Input_otr'>
                                        <Input
                                            InputClass="Theme_input_white form_input"
                                            Inputype="lname"
                                            InputName="lname"
                                            InputPlaceholder="Enter Your Last Name"
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
                                    <div className='Input_otr'>
                                        <Input
                                            InputClass="Theme_input_white form_input"
                                            Inputype="number"
                                            InputName="number"
                                            InputPlaceholder="Enter Your Number"
                                        />
                                    </div>
                                    <div className='Input_otr'>
                                        <Input
                                            InputClass="Theme_input_white form_input"
                                            Inputype="password"
                                            InputName="password"
                                            InputPlaceholder="Enter Your Password"
                                        />
                                    </div>
                                    <div className='Input_otr action_otr'>
                                        <ThemeBtn
                                            BtnClass="Theme_btn_primary form_btn"
                                            BtnText="Register"
                                        />
                                    </div>
                                    <div className='login_text_otr'>
                                        <Link to="/login" className='login_text heading-sb'>
                                            Login
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

export default Register