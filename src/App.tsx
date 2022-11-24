import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
