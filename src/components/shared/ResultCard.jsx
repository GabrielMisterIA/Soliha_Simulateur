import React from 'react';

const ResultCard = ({ title, amount, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-4 border-l-4 border-[#03628a]">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-semibold text-[#03628a]">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
        <div className="text-xl font-bold text-[#ed6f5d]">
          {amount.toLocaleString()} €
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
