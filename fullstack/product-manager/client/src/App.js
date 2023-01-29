import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import EditProduct from './views/EditProduct';
import Main from './views/Main';
import OneProduct from './views/oneProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<OneProduct />} path="/product/:id" />
        <Route element={<EditProduct />} path="/product/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
