import React from "react";
import { useEffect, useState } from "react";

const Register = () => {
    const[state, setState] = useState({
        email: '',
        password: '',
        fullName: '',
        dateOfBirth: '',
        country: '',
        gender: '',
        recieveNewsLetters: false
    });
    const[countries, setCountries] = useState([
        'United States of America',
        'Switzerland',
        'Norway',
        'Turkey',
        'Britain',
        'Iran',
        'Germany',
        'Japan',
        'France',
        'Brazil',
        'Canada'
    ])
    
    
    useEffect(() => {
        document.title = 'Register';
      },[])
    return (
        <div className="row">
            <div className="col-lg-6 col-md-7 mx-auto">
                <div className="card border-primary shadow my-3">
                    <div className="card-header border-bottom border-primary">
                        <h4 style={{fontSize :'40px'}} className='text-primary text-center'>Register</h4>
                    </div>
                    <div className="card-body border-primary">
                        
                        {/* email */}
                        <div className="form-group form-row my-2">
                            <label className="col lg-4" htmlFor="email">Email</label>
                                <input 
                                    id='email'
                                    name = "email"
                                    type="text" 
                                    className="form-control" 
                                    value={state.email} 
                                    onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                />
                        </div>

                        {/* password */}
                        <div className="form-group form-row my-2">
                            <label className="col lg-4" htmlFor="password">Password</label>
                                <input 
                                    id='password'
                                    name = "password"
                                    type="password" 
                                    className="form-control" 
                                    value={state.password} 
                                    onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                />
                        </div>

                        {/* full name */}
                        <div className="form-group form-row my-2">
                            <label className="col lg-4" htmlFor="fullName">Full Name</label>
                                <input 
                                    id='fullName'
                                    name = "fullName"
                                    type="text" 
                                    className="form-control" 
                                    value={state.fullName} 
                                    onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                />
                        </div>

                        {/* date of birth */}
                        <div className="form-group form-row my-2">
                            <label className="col lg-4" htmlFor="dateOfBirth">Date Of Birth</label>
                                <input 
                                    id='dateOfBirth'
                                    name = "dateOfBirth"
                                    type="date" 
                                    className="form-control" 
                                    value={state.dateOfBirth} 
                                    onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                />
                        </div>

                         {/* Gender */}
                         <div className="form-group form-row my-2">
                            <label className="col lg-4">Gender</label>
                            <div className="col lg-8">
                                <div className="form-check">
                                     <input 
                                          name = "gender"
                                          type="radio" 
                                          value='male'
                                          id='male'
                                          className="form-check-input" 
                                          checked={state.gender==='male'?true:false}
                                          onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                       />
                                       <label htmlFor="male" className="form-check-inline">Male</label>
                                </div>
                                <div className="form-check">
                                     <input 
                                          name = "gender"
                                          type="radio" 
                                          value='female'
                                          id='female'
                                          className="form-check-input" 
                                          checked={state.gender==='male'?true:false}
                                          onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                       />
                                       <label htmlFor="female" className="form-check-inline">Female</label>
                                </div>
                            </div>
                        </div>

                        {/* country */}
                        <div className="form-group form-row my-2">
                            <label className="col lg-4" htmlFor="country">Country</label>
                                <div className="col lg-8">
                                <select 
                                    id='dateOfBirth'
                                    name = "country"
                                    className="form-control" 
                                    value={countries} 
                                    onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                >
                                    {countries.map((res) => (
                                        <option key={res} vlaue={res}>{res}</option>
                                    ))}
                                </select>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;