import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl p-8 max-w-lg w-full shadow-modal animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-gray-700 hover:text-neutral-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {title && (
          <h2 className="text-h2 text-neutral-black mb-4">{title}</h2>
        )}

        <div className="mb-6">
          {children}
        </div>

        {actions && (
          <div className="flex items-center justify-end gap-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
