import React, { useState, useEffect } from 'react';
import './ContractDashboard.css';

function ContractDashboard() {
  const [contracts, setContracts] = useState([]);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceLocation, setNewServiceLocation] = useState('');

  // Fetch contracts from API
  useEffect(() => {
    fetch('/api/contracts')
      .then(response => response.json())
      .then(data => setContracts(data.contracts))
      .catch(error => console.error(error));
  }, []);

  // Handler for adding a new contract
  const handleAddContract = () => {
    const newContract = {
      id: contracts.length + 1,
      serviceName: newServiceName,
      location: newServiceLocation,
      
    };
    setContracts([...contracts, newContract]);
    setNewServiceName('');
    setNewServiceLocation('');
  };

  return (
    <div className="dashboard">
      <h1>Contract Testing Dashboard</h1>
      <div className="dashboard-form">
        <label htmlFor="new-service-name">Service Name:</label>
        <input
          type="text"
          id="new-service-name"
          value={newServiceName}
          onChange={e => setNewServiceName(e.target.value)}
        />
        <label htmlFor="new-service-location">Service Location:</label>
        <input
          type="text"
          id="new-service-location"
          value={newServiceLocation}
          onChange={e => setNewServiceLocation(e.target.value)}
        />
        <button onClick={handleAddContract}>Download Contract</button>
      </div>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Contract ID</th>
            <th>Service Name</th>
            <th>Service Location</th>
            
          </tr>
        </thead>
        <tbody>
          {contracts.map(contract => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.serviceName}</td>
              <td>{contract.location}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContractDashboard;
