import React from 'react';
import './Input.scss';

const Input = (props) => {
    const inputRef = React.createRef();
    const handleLabel = () => {
        inputRef.current.focus();
    }
    return (  
        <div className={props.wrapperClassName ? `WrapperInput ${props.wrapperClassName}` : `WrapperInput`}>
        <input 
            type={props.type}
            className="form-input"
            name={props.name}
            placeholder=" "
            value={props.value}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            readOnly={props.readOnly}
            id={props.id}
            ref={inputRef}
            inputMode={props.inputMode}
            autoComplete="none"
        /> 
        <label onClick={handleLabel} htmlFor={props.id} className="form-label">{props.label}</label>
            <span className={props.error? "errorMessage" : "errorEmpty"}>{props.error}</span>
  </div> 
  );
}
 
export default Input;