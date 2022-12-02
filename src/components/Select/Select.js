import React from 'react'
import Form from 'react-bootstrap/Form'

import './Select.scss';

function Select(props) {
    return (
        <Form.Select className='Theme_input_white Theme_select' aria-label="Default select example">
            <option>{props.defaultText}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    )
}

export default Select