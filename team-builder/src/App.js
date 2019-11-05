import React, { useState } from 'react'; // added useState

import FormFields from './Components/FormFields';
import Forms from './Components/Forms';
import data from './data'

import './App.css';

function App() {
  const [user, setUser] = useState(data)

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Team!</h1>
        <FormFields />
        <Forms userData={user}/>
      </header>
    </div>
  );
}

export default App;
