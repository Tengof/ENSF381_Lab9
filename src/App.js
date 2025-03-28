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
          <Route path='/validate_login' element={<Login/>}/>
          <Route path='/predict_house_price' element={<Predict/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
