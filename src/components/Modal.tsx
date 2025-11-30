import React, { type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="bg-red-500 p-2 font-bold text-amber-50 absolute top-3 right-3 w-10 h-10 rounded-full"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
