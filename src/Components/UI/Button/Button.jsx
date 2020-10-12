import React from 'react';
import './Button.scss';

const Button = props => {
    return (
        <button className={`appButton ${props.className}`} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
