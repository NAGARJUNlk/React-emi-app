export interface EMIData {
    month: number;
    openingBalance: number;
    interestPaid: number;
    principalPaid: number;
    closingBalance: number;
  }
  
  export interface EMICalculatorInputsProps {
    loanAmount: number;
    interestRate: number;
    tenure: number;
    onLoanAmountChange: (value: number) => void;
    onInterestRateChange: (value: number) => void;
    onTenureChange: (value: number) => void;
  }
  
  export interface EMISummaryProps {
    loanAmount: number;
    totalInterest: number;
    emi: number;
  }
  
  export interface AmortizationTableProps {
    schedule: EMIData[];
  }