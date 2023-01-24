import React, {useState} from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Api from './components/Api';

function App() {
  const [unit, setUnit] = useState("people");
  const [oneId, setOneId] = useState(1);
  return (
    <>
      <Form unit={unit} setUnit={setUnit} oneId={oneId} setOneId={setOneId} />
      <Routes>
        <Route path="/:category/:id" element={<Api oneId={oneId} setOneId={setOneId} />} />
      </Routes>
    </>
  );
}

export default App;
