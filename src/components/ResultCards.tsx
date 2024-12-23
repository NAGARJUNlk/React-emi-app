import React from 'react';

interface ResultsCardProps {
  emi: number;
  totalInterest: number;
  totalAmount: number;
}

const ResultsCard: React.FC<ResultsCardProps> = ({
  emi,
  totalInterest,
  totalAmount
}) => {
  return (
    <div className="w-full bg-white rounded-lg p-6 mt-4">
      <div className="text-center mb-6">
        <div className="text-sm text-gray-600">Your Monthly EMI</div>
        <div className="text-2xl font-bold text-blue-600">
          ₹{Math.round(emi).toLocaleString()}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Total Interest</div>
          <div className="font-semibold text-gray-900">
            ₹{Math.round(totalInterest).toLocaleString()}
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Total Amount</div>
          <div className="font-semibold text-gray-900">
            ₹{Math.round(totalAmount).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;