import React from 'react';
import { Outlet } from 'react-router-dom';
import './Modal.css';

const Modal = () => {
  return (
    <div className='modal'>
      <i className='fas fa-times modal-close'></i>

      <div className='modal-main'>
        <Outlet />
      </div>
    </div>
  );
};

export default Modal;
