import React, { useState } from 'react'; // added useState

import FormFields from './Components/FormFields';
import Forms from './Components/Forms';
import data from './data'

import './App.css';

function App() {
  const [user, setUser] = useState(data)

  const addNewUser = users => {
    setUser([...user, users])
  }

  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Team!</h1>
        <FormFields addNewUser={addNewUser} />
        <Forms userData={user} />
      </header>
    </div>
  );
}

export default App;
