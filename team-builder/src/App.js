import React, { useState } from 'react'; // added useState

import FormFields from './Components/FormFields';
import Forms from './Components/Forms';
import data from './data'

import './App.css';

function App() {
  const [users, setUsers] = useState(data)

  const addNewUser = newUser => { //what is this users tied too? 1:54min Dan video
    setUsers([...users, newUser])
  }

  return (
    <div className="App">
      <header className="App-header"> 
        <h1>Welcome to The Team!</h1>
        <FormFields addNewUser={addNewUser} />
        <Forms userData={users} />
      </header>
    </div>
  );
}

export default App;
