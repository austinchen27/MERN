import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import PersonCard from './components/PersonCard';

var peopleArr =[
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith", "age":88, "hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore", "age":50, "hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith", "age":62, "hairColor":"Brown"}
]

function App() {
  return (
    <>
      {peopleArr.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      }
        
        )}
    </>
  );
}

export default App;
