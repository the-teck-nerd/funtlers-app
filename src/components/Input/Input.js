import React from 'react'

import './Input.scss';

function Input(props) {
    return (
        <input className={props.InputClass} type={props.Inputype} name={props.InputName} placeholder={props.InputPlaceholder} />
    )
}

export default Input