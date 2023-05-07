// import React, { useState } from 'react';
// import './AddContractForm.css';

// function AddContractForm({ onAddContract }) {
//   const [newServiceName, setNewServiceName] = useState('');
//   const [newServiceDescription, setNewServiceDescription] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     onAddContract(newServiceName, newServiceDescription);
//     setNewServiceName('');
//     setNewServiceDescription('');
//   };

//   return (
//     <form className="add-contract-form" onSubmit={handleSubmit}>
//     <div className="dashboard">
//       <h1>Comparator Testing Dashboard</h1>
//       <div className="form-row">
//         <div className="form-group">
//           <label htmlFor="new-service-name">Service Name:</label>
//           <input
//             type="text"
//             id="new-service-name"
//             className="form-input"
//             value={newServiceName}
//             onChange={e => setNewServiceName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="new-service-description">Service Description:</label>
//           <input
//             type="text"
//             id="new-service-description"
//             className="form-input"
//             value={newServiceDescription}
//             onChange={e => setNewServiceDescription(e.target.value)}
//           />
//         </div>
//       </div>
//       <button type="submit" className="form-submit-button">Add Contract</button>
//       </div>
//     </form>
//   );
// }

// export default AddContractForm;

import React, { useState } from 'react';
import './AddContractForm.css';

function AddContractForm({ onAddContract }) {
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceDescription, setNewServiceDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContract(newServiceName, newServiceDescription);
    setNewServiceName('');
    setNewServiceDescription('');
  };

  return (
    <form className="add-contract-form" onSubmit={handleSubmit}>
      <h1 className="add-contract-heading">Compare Contracts</h1>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="new-service-name" className="form-label">Service Name:</label>
          <input
            type="text"
            id="new-service-name"
            className="form-input"
            value={newServiceName}
            onChange={e => setNewServiceName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-service-description" className="form-label">Service Description:</label>
          <input
            type="text"
            id="new-service-description"
            className="form-input"
            value={newServiceDescription}
            onChange={e => setNewServiceDescription(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="form-submit-button">Compare Contracts</button>
    </form>
  );
}

export default AddContractForm;


