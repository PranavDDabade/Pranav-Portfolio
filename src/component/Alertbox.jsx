import React from 'react';
import './Alertbox.css';

function AlertBox({ message, type, onClose }) {
    return (
        <div className={`alert-box ${type}`}>
            <span className="alert-message">{message}</span>
            <button className="alert-close" onClick={onClose}>&times;</button>
        </div>
    );
}

export default AlertBox;
