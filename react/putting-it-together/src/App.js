import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Black"} />
      <PersonCard firstName={"Smith"} lastName={"John"} age={"88"} hairColor={"Brown"} />
    </>
  );
}

export default App;
