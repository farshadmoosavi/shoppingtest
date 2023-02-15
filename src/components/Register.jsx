import React from "react";
import { useEffect, useState } from "react";

const Register = () => {
    const[state, setState] = useState({
        email: 'example@gmail.com',
        password: '',
        fullName: '',
        dateOfBirth: '',
        country: '',
        gender: '',
        recieveNewsLetters: false
    });
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
                        <div className="form-group form-row">
                            <label className="col lg-4">Email</label>
                                <input 
                                    name = "email"
                                    type="text" 
                                    className="form-control" 
                                    value={state.email} 
                                    onChange={(e) => setState(...state, e.target.name = e.target.value)}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;