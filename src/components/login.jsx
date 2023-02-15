import React, { useEffect, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
      document.title = 'Login';
    },[])
    return (
        <div className = 'row'>
            <div className="col-lo-5 col-md-7 mx-auto">
                <div className="card border-success shodow-lg my-2">
                    <div className="card-header border-bottom border-success">
                        <h4 style = {{fontSize : "40px"}} className="text-success text-center">
                            Login
                        </h4>
                    </div>
                    <div className ="card-body border-bottom border-success">
                        <div className="form-group mt-2">
                            <label className="mb-1" htmlFor="email">Email</label>
                            <input
                                autoComplete="off"
                                type = "text" 
                                className="form-control" 
                                id = "email" 
                                placeholder="Enter your Email"
                                name = "email"
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label className="mb-1" htmlFor="password">Password</label>
                            <input 
                                type = "password" 
                                className="form-control" 
                                id = "password" 
                                placeholder="Enter your Password"
                                name = "password"
                                value={password}
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login; 