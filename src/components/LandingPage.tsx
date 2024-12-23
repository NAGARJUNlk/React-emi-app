
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/emi-calculator');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to EMI Calculator</h1>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Go to EMI Calculator
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
