import React from 'react';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import OneForm from './components/OneForm';

function App() {
  const [todo, setToDo] = useState([]);
  return (
    <div>
      <OneForm setToDo={setToDo} todo={todo} />
      <List setToDo={setToDo} todo={todo} />
    </div>
  );
}

export default App;
