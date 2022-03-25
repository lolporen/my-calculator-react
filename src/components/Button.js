import React from 'react';
import './Button.css'

const Button = (props) => {
    const spanClass = `span-${props.span ? props.span : 1}`
    const buttonValue = props.value
    const clickBtn = (e) => {
        props.responseEvent(buttonValue)
    }

    return (
        <button className={spanClass} onClick={clickBtn} data-testid="button">
            {buttonValue}
        </button>
    )
}

export default Button