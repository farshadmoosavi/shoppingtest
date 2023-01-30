
import './App.css';

import Login from './components/login';
import Register from './components/Register';
import NoMatchPage from './components/NoMatchPage';
import Dashboard from './components/Dashboard';


import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <div className='container-fluid'>
          <Routes>
            <Route path='/' exact element={<Login/>} />
            <Route path='/register' element ={<Register/>} />
            <Route path='/dashboard'element={<Dashboard/>}/>
            <Route path='*' element ={<NoMatchPage/>} />
          </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
