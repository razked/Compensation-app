import React from "react";
import "./Modal.scss";

const Modal = (props) => {

  let closeBtn = null;
  if(props.closeBtn) {
    closeBtn = <span className="closeBtn" onClick={props.close}>&times;</span>
  }
  return (
    <div className={`modal-wrapper ${props.className}`} onClick={props.close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
          {closeBtn}
          {props.children}
      </div>
    </div>
  );
};

export default Modal;
