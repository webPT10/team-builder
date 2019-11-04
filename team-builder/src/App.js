import React, { useState } from 'react'; // added useState

import Form from './Components/Form'
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is. React.
        </p>
        <Form />
      </header>
    </div>
  );
}

export default App;
