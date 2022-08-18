import React from 'react';
import "../components/styles/modal.css"

const Modal = ({ contentModal, hide }) => {
    return (
        <div className="modal">
            <span className="text">{contentModal}</span>
            <span className="close-modal" onClick={hide} >X</span>
        </div>
    );
};

export default Modal;