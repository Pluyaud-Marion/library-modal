import React from 'react';
import "../components/styles/modal.css"

const Modal = ({ contentModal }) => {
    return (
        <div className="modal">
            <span className="text">{contentModal}</span>
            <span className="close-modal" >X</span>
        </div>
    );
};

export default Modal;