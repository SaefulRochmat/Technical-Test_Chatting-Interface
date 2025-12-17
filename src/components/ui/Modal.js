import React from 'react';
import { X } from 'lucide-react';

/**
 * Modal Component
 * Full-screen modal for displaying media previews
 * 
 * @param {boolean} isOpen - Modal visibility state
 * @param {function} onClose - Callback to close modal
 * @param {ReactNode} children - Content to display in modal
 */
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75" 
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;