import React from 'react'
import './ThemeBtn.scss';

function ThemeBtn(props) {
    return (
        <>
            <button onClick={props.onClick} className={props.BtnClass}>
                {props.BtnText}
            </button>
        </>
    )
}

export default ThemeBtn