import React from 'react';

const FormStepWrapper = ({ title, subtitle, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-[#03628a] mb-2">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default FormStepWrapper;
