import './App.css';
import React from 'react';
import Login from './Login.js';
import Predict from './Predict.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/predict' element={<Predict/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
