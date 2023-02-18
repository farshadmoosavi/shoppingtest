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
        recieveNewsLetters: ''
    });
    const[countries, setCountries] = useState([
        {id:1, countryName: 'United States of America'},
        {id:2, countryName: 'Switzerland'},
        {id:3, countryName: 'Norway'},
        {id:4, countryName: 'Turkey'},
        {id:5, countryName: 'Britain'},
        {id:5, countryName: 'Iran'},
        {id:6, countryName: 'Germany'},
        {id:6, countryName: 'Japan'},
        {id:7, countryName: 'France'},
        {id:8, countryName: 'Brazil'},
        {id:9, countryName: 'Canada'},
    ])
    const[errors,setErrors] = useState({
        email: [],
        password: [],
        fullName: [],
        dateOfBirth: [],
        country: [],
        gender: [],
        recieveNewsLetters: []
    });

    const[dirty, setDirty] = useState({
        email: false,
        password: false,
        fullName: false,
        dateOfBirth: false,
        country: false,
        gender: false,
        recieveNewsLetters: false
    });

    const[message, setMessage] = useState();

    const validate = () => {
        let errorsData = {};

        //Email
        errorsData.email = [];
        // Email can't be blank
        if(!state.email)
        {
            errorsData.email.push("Email can't be blank");
        }
        // Email Reggex
        const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(state.email)
        {
            if(!validEmailRegex.test(state))
            {
                errorsData.email.push("Enter a correct form of Email address!");
            }
        }

        //password
        errorsData.password = [];
        // Email can't be blank
        if(!state.password)
        {
            errorsData.password.push("password can't be blank");
        }
        // Email Reggex: password between 6 to 20 characters 
        //which contain at least one numeric digit, one uppercase and one lowercase letter
        const validpasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(state.password)
        {
            if(!validEmailRegex.test(state))
            {
                errorsData.password.push("Enter a correct form of password which is between 6 to 20 characters which contains at least one numeric digit, one uppercase and one lowercase letter!");
            }
        }

        //fullName
        errorsData.fullName = [];
        // fullName can't be blank
        if(!state.fullName)
        {
            errorsData.fullName.push("fullName can't be blank");
        }

        //dateOfBirth
        errorsData.dateOfBirth = [];
        // dateOfBirth can't be blank
        if(!state.dateOfBirth)
        {
            errorsData.dateOfBirth.push("dateOfBirth can't be blank");
        }

        //Gender
        errorsData.gender = [];
        // dateOfBirth can't be blank
        if(!state.gender)
        {
            errorsData.gender.push("select a country");
        }

        //country
        errorsData.country = [];
        // dateOfBirth can't be blank
        if(!state.country)
        {
            errorsData.gender.push("select a gender either male or female");
        }
        setErrors(errorsData);
    }

    useEffect(validate,[state])
    
    useEffect(() => {
        document.title = 'Register';
      },[])

    const onRegisterClick = () => {
        let dirtyData = dirty;
        Object.keys(dirty).forEach((element) =>{
            dirtyData[element] = true
        })
        setDirty(dirtyData);
    }

    return (
        <div className="row">
            <div className="col-lg-6 col-md-7 mx-auto">
                <div className="card border-primary shadow my-3">
                    <div className="card-header border-bottom border-primary">
                        <h4 style={{fontSize :'40px'}} className='text-primary text-center'>Register</h4>
                        <ul className="text-danger">
                            {Object.keys(errors).map((element) => {
                                if(dirty[element])
                                {return errors[element].map((err) =>{
                                    return <li key={err}>{err}</li>
                                })}else{
                                    return "";
                                }
                            })}
                        </ul>
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
                                    onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
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
                                    onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
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
                                    onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
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
                                    onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
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
                                          onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
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
                                          onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
                                       />
                                       <label htmlFor="female" className="form-check-inline">Female</label>
                                </div>
                            </div>
                        </div>

                        {/* country */}
                        <div className="form-group form-row my-2">
                            <label className="col lg-4" htmlFor="country">Country</label>
                                <select 
                                    id='dateOfBirth'
                                    name = "country"
                                    className="form-control" 
                                    value={state.countries} 
                                    onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
                                >
                                    {countries.map((res) => (
                                        <option key={res.id} vlaue={res.id}>{res.countryName}</option>
                                    ))}
                                </select>
                        </div>
                            {/* recieve NewsLetters */}
                         <div className="form-group form-row my-2">
                            <label className="col lg-4">Gender</label>
                            <div className="col lg-8">
                                <div className="form-check">
                                     <input 
                                          name = "recieveNewsLetters"
                                          type="checkbox" 
                                          value='true'
                                          id='recieveNewsLetters'
                                          className="form-check-input" 
                                          checked={state.recieveNewsLetters==='true'?true:false}
                                          onChange={(e) => setState({...state, [e.target.name] : e.target.value})}
                                       />
                                       <label htmlFor="recieveNewsLetters" className="form-check-inline">RecieveNewsLetters</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*footer*/}
                    <div className="card-footer text-center">
                        <div className="m-1">{message}</div>
                        <div>
                            <button 
                                className="btn btn-primary m-2"
                                onClick={onRegisterClick}
                            >Register</button>
                        </div>
                    </div>
                    {/* end of footer */}
                </div>
            </div>
        </div>
    );
}

export default Register;