import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Frano</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                             <NavLink className="nav-link" aria-current="page" to="/dashboard" activeClassName="active"> <i className='fa fa-dashboard'></i>Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/" activeClassName="active" exact = {true}>Login</NavLink>
                        </li>
                    
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Register" activeClassName="active">Register</NavLink>
                        </li>
                </ul>
                    <div style={{marginRight: 70}}>
                        <ul className='navbar-nav'>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className='fa fa-user circle'/>User 
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                     <li><NavLink className="dropdown-item" to="#">Logout</NavLink></li>
                                </ul>
                           </li>
                        </ul>
                    </div>
                
              </div>
          </div>
      </nav>

    //   <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
    //       <NavLink className="navbar-brand" to="/">Frano</NavLink>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //        <span className="navbar-toggler-icon "></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <NavLink className="nav-link active" aria-current="page" to="/dashboard"> <i className='fa fa-dashboard'></i>Dashboard</NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/">Login</NavLink>
    //           </li>
    //           {/* --------------- */}
              
    //           {/* --------------- */}
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/Register">Register</NavLink>
    //           </li>
              
    //        </ul>
    //        <div >
    //          <ul className="navbar-nav">
    //            <li class="nav-item dropdown">
    //               <NavLink class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                   Dropdown
    //               </NavLink>
    //               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    //                   <li><NavLink class="dropdown-item" to="/">Action</NavLink></li>
    //                   <li><NavLink class="dropdown-item" to="/">Another action</NavLink></li>
    //                   <li><hr class="dropdown-divider"/></li>
    //                   <li><NavLink class="dropdown-item" to="/">Something else here</NavLink></li>
    //                </ul>
    //             </li>
    //          </ul>
    //        </div>
    //      </div>
    //  </nav>
  )
}

export default Navbar;