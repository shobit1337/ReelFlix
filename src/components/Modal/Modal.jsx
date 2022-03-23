import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './Modal.css';

const Modal = ({ outsideRef = null, setIsModalOpen = () => {}, children }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setIsModalOpen(false));
  return (
    <div className='modal' ref={ref}>
      <i
        className='fas fa-times modal-close'
        onClick={() => setIsModalOpen(false)}></i>

      <div className='modal-main'>
        {children}
        <Outlet />
      </div>
    </div>
  );
};

export default Modal;
