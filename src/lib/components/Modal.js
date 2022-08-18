import React from 'react';
import "../components/styles/modal.css"

const Modal = ({ contentModal, toogle }) => {
    return (
        <div className="modal">
            <span className="text">{contentModal}</span>
            <span className="close-modal" onClick={toogle} >X</span>
        </div>
    );
};

export default Modal;