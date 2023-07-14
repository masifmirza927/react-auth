import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import { createContext, useContext, useState } from 'react';
import OnlyAuth from './components/OnlyAuth';
import { AuthContext } from './context/AuthContext';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";   
import Datatable from './pages/Datatable';
import Search from './pages/Search';
import InputField from './components/inputfield/InputField';

function App() {
const userContext = useContext(AuthContext);

  return (
      <div className="container">
        <Nav />
        <InputField />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={ <OnlyAuth> <Profile /> </OnlyAuth> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/datatable' element={<Datatable />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
  );
}

export default App;
