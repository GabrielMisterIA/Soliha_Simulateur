import React from 'react';
import { useNavigate } from 'react-router-dom';
import SolihaButton from '../shared/SolihaButton';

const SimulatorCard = ({ title, icon: Icon, path, description }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
      <div className="bg-[#03628a] text-white p-4 rounded-full mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold text-[#03628a] mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <SolihaButton onClick={handleNavigate}>Simuler</SolihaButton>
    </div>
  );
};

export default SimulatorCard;
