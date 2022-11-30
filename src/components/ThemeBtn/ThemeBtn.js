import React from 'react'
import './ThemeBtn.scss';

function ThemeBtn(props) {
    return (
        <>
            <button className={props.BtnClass}>
                {props.BtnText}
            </button>
        </>
    )
}

export default ThemeBtn