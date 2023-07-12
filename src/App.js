import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import { createContext, useState } from 'react';

export const authContext = createContext();


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const data = {
    isLoggedIn, setIsLoggedIn
  }

  return (
    <authContext.Provider value={data}>
      <div className="container">
      {
        data.isLoggedIn ? <button onClick={ () => data.setIsLoggedIn(false)}>Logout</button> : <button onClick={ () => data.setIsLoggedIn(true)}>Login</button>
      }
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </authContext.Provider>

  );
}

export default App;
