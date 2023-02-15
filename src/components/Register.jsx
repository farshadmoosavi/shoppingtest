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
    useEffect(() => {
        document.title = 'Register';
      },[])
    return (
        <div>
            Register
        </div>
    );
}

export default Register;