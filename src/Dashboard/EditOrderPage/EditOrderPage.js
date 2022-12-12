import React from 'react'
import Input from '../../components/Input/Input';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';

import './EditOrderPage.scss';

function EditOrderPage() {
    return (
        <div className='edit_order_main'>
            <div className='heading_otr'>
                <p className='heading-lb heading_page'>
                    Order Edit
                </p>
            </div>
            <form className='edit_form_main'>
                <div className='input_main'>
                    <Input
                        label="Customer Name"
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="text"
                        InputPlaceholder="Customer Name"
                    />
                    <Input
                        label="Partner Name"
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="text"
                        InputPlaceholder="Partner Name"
                    />
                </div>
                <div className='input_main'>
                    <Input
                        label="Code"
                        InputClass="Theme_input_white form_input"
                        Inputype="number"
                        InputName="number"
                        InputPlaceholder="12345"
                    />
                    <Input
                        label="Activity Name"
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="text"
                        InputPlaceholder="Activity Name"
                    />
                </div>
                <div className='input_main'>
                    <Input
                        label="City"
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="text"
                        InputPlaceholder="Faisalabad"
                    />
                    <Input
                        label="Price"
                        InputClass="Theme_input_white form_input"
                        Inputype="text"
                        InputName="text"
                        InputPlaceholder="$12,46"
                    />
                </div>
                <div className='action_otr'>
                    <ThemeBtn
                        BtnClass="Theme_btn_primary save_btn"
                        BtnText="Save"
                    />
                </div>
            </form>
        </div>
    )
}

export default EditOrderPage