// 
import React, { useState, useEffect } from 'react';
import './ContractDashboard.css';

function ContractDashboard() {
  const [contracts, setContracts] = useState([]);

  // Fetch contracts from API
  useEffect(() => {
    fetch('/api/contracts')
      .then(response => response.json())
      .then(data => setContracts(data.contracts))
      .catch(error => console.error(error));
  }, []);

  // Handler for "Run All Tests" button
  const handleRunAllTests = () => {
    fetch('/api/tests/run-all')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  // Handler for "View Reports" button
  const handleViewReports = () => {
    window.location.href = '/reports';
  };

  // Handler for "Add Contract" button
  const handleAddContract = () => {
    const newContract = {
      id: 4,
      serviceName: 'New Service',
      status: 'Pending',
      lastTested: '2023-04-09'
    };
    setContracts([...contracts, newContract]);
  };

  return (
    <div className="dashboard">
      <h1>Contract Testing Dashboard</h1>
      <div className="dashboard-buttons">
        <button onClick={handleRunAllTests}>Run All Tests</button>
        <button onClick={handleViewReports}>View Reports</button>
        <button onClick={handleAddContract}>Add Contract</button>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Contract ID</th>
            <th>Service Name</th>
            <th>Status</th>
            <th>Last Tested</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(contract => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.serviceName}</td>
              <td>{contract.status}</td>
              <td>{contract.lastTested}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContractDashboard;
