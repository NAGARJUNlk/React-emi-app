
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EMICalculator from './components/EMICalculator'; 
import LandingPage from './components/LandingPage'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
