import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          <FaTimes className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal;