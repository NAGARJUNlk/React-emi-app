import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import RangeInput from './RangeInputs';
import ResultsCard from './ResultCards';
import AmortizationTable from './AmortizationTable';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(12);
  const [emi, setEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const numberOfPayments = tenure;

    const emiAmount = 
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments)) /
      (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);

    const totalAmountPayable = emiAmount * numberOfPayments;
    const totalInterestPayable = totalAmountPayable - principal;

    setEMI(emiAmount);
    setTotalInterest(totalInterestPayable);
    setTotalAmount(totalAmountPayable);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: totalInterest },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-8">EMI Calculator</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <RangeInput
              label="Loan Amount"
              value={loanAmount}
              onChange={setLoanAmount}
              min={10000}
              max={1000000}
              step={10000}
              prefix="₹"
            />
            
            <RangeInput
              label="Interest Rate"
              value={interestRate}
              onChange={setInterestRate}
              min={5}
              max={25}
              step={0.1}
              suffix="%"
            />
            
            <RangeInput
              label="Tenure"
              value={tenure}
              onChange={setTenure}
              min={3}
              max={60}
              step={1}
              suffix="Months"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-32 relative">
            
      <PieChart width={200} height={100}>
        <Pie
          data={pieData}
          cx={100}
          cy={100}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell fill="#831843" />
          <Cell fill="#be185d" />
        </Pie>
        </PieChart>
            </div>
            
            <ResultsCard
              emi={emi}
              totalInterest={totalInterest}
              totalAmount={totalAmount}
            />
          </div>
        </div>
      </div>

      <AmortizationTable
        loanAmount={loanAmount}
        interestRate={interestRate}
        tenure={tenure}
        emi={emi}
      />
    </div>
  );
};

export default EMICalculator;