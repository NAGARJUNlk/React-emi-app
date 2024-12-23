import React from 'react';

interface AmortizationTableProps {
  loanAmount: number;
  interestRate: number;
  tenure: number;
  emi: number;
}

interface AmortizationRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

const AmortizationTable: React.FC<AmortizationTableProps> = ({
  loanAmount,
  interestRate,
  tenure,
  emi
}) => {
  const calculateAmortizationSchedule = (): AmortizationRow[] => {
    const monthlyRate = interestRate / (12 * 100);
    let balance = loanAmount;
    const schedule: AmortizationRow[] = [];

    for (let month = 1; month <= tenure; month++) {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance = balance - principal;

      schedule.push({
        month,
        emi,
        principal,
        interest,
        balance: Math.max(0, balance)
      });
    }

    return schedule;
  };

  const schedule = calculateAmortizationSchedule();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Amortization Schedule</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMI</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schedule.map((row) => (
              <tr key={row.month} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.month}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{Math.round(row.emi).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{Math.round(row.principal).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{Math.round(row.interest).toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{Math.round(row.balance).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmortizationTable;