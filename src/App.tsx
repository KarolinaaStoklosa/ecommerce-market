import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from './helpers/firebaseConfig';
import {useDispatch} from 'react-redux';
import {setAuthState} from './redux/actions/authActions'

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //ustaw stan auth na true
      dispatch (setAuthState(true));
      // dispatch ( {type: 'SET_AUTH_STATE', payload:true})
    } else {
      dispatch (setAuthState(false))
      
    }
  })

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
