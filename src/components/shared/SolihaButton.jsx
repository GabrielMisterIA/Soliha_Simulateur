import React from 'react';

const SolihaButton = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#ed6f5d] text-white rounded-xl px-6 py-2 hover:opacity-90 transition-opacity ${className}`}
    >
      {children}
    </button>
  );
};

export default SolihaButton;
