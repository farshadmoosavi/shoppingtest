
import './App.css';

import Login from './components/login';
import Register from './components/Register';
import NoMatchPage from './components/NoMatchPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { UserContext } from './UserContext';


function App() {

  return (
    // <UserContext.provider>
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
    // </UserContext.provider>
  );
}

export default App;
