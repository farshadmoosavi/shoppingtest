
import './App.css';

import Login from './components/login';
import Register from './components/Register';
import NoMatchPage from './components/NoMatchPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { UserContext } from './UserContext';
import { useState } from 'react';


function App() {
const[user, setUser] = useState({
  isLoggedIn: false,
  currentUserId: null,
  currentUserName: null
});
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Navbar />
        <div className='container-fluid'>
          <Routes>
            <Route path='/' exact element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
