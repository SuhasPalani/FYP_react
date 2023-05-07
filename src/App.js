import React from 'react';
import ContractDashboard from './ContractDashboard';
import AddContractForm from './AddContractForm';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContractDashboard />} />
        <Route path="/add-contract" element={<AddContractForm />} />
      </Routes>
    </Router>
  );
}

export default App;
