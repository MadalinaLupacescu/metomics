// import React from 'react';
// import AddSampleForm from './components/AddSampleForm';

// function App() {
//   return (
//     <div>
//       <h1>RNA-seq Metadata Application</h1>
//       <AddSampleForm />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import TermForm from './components/TermForm';
import DaprmForm from './components/DaprmForm';
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState('TERM'); // Track the active form

  return (
    <div className="App">
      {/* Header Section */}
      <div className="header-container">
        <h1 className="header-title">OMICS Forms</h1>
        <div className="header-buttons">
          <button
            className={`btn btn-primary ${currentForm === 'TERM' ? 'active' : ''}`}
            onClick={() => setCurrentForm('TERM')}
          >
            TERM
          </button>
          <button
            className={`btn btn-primary ${currentForm === 'DAPRM' ? 'active' : ''}`}
            onClick={() => setCurrentForm('DAPRM')}
          >
            DAPRM
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-container">
        {currentForm === 'TERM' ? <TermForm /> : <DaprmForm />}
      </div>
    </div>
  );
}

export default App;
