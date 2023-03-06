import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();

  const [dirty, setDirty] = useState({
    email: false,
    password: false
  });

  const [errors, setErrors] = useState({
    email: [],
    password: []
  });

  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    document.title = "Login";
  }, []);

  const validate = () => {
    let errorsData = {};

    //Email
    errorsData.email = [];
    // Email can't be blank
    if (!email) {
      errorsData.email.push(" Email can't be blank");
    }
    // Email Reggex
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email) {
      if (!validEmailRegex.test(email)) {
        errorsData.email.push("Enter a correct form of Email address!");
      }
    }

    //password
    errorsData.password = [];
    // password can't be blank
    if (!password) {
      errorsData.password.push(" Password can't be blank");
    }
    // password Reggex: password atleast 8 characters
    //which contain at least one numeric digit, one letter
    const validpasswordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
    if (password) {
      if (!validpasswordRegex.test(password)) {
        errorsData.password.push(
          " Enter a correct form of password which is at least 8 characters and contains at least one numeric digit and one letter!"
        );
      }
    }
    setErrors(errorsData);
  };
  useEffect(validate, [email], [password]);

  const onLoginClick = async () => {
    let dirtyData = dirty;
    Object.keys(dirty).forEach((element) => {
      dirtyData[element] = true;
    });
    setDirty(dirtyData);
    validate();
    if (isValid()) {
      let response = await fetch(
        `http://localhost:8000/users?email=${email}&password=${password}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let responseBody = await response.json();
        if (responseBody.length > 0) {
          usenavigate('/dashboard');
        } else {
          setLoginMessage(
            <span className="text-danger">
              Invalid Login, Please try again
            </span>
          );
        }
      } else {
        setLoginMessage(
          <span className="text-danger">unable connect to server</span>
        );
      }
    }
  };
  const isValid = () => {
    let valid = true;

    for (let element in errors) {
      if (errors[element].length > 0) {
        valid = false;
      }
    }
    return valid;
  };

  return (
    <div className="row">
      <div className="col-lo-5 col-md-7 mx-auto">
        <div className="card border-success shodow-lg my-2">
          <div className="card-header border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              Login
            </h4>
          </div>
          <div className="card-body border-bottom border-success">
            <div className="form-group mt-2">
              <label className="mb-1" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => {
                  setDirty({ ...dirty, [e.target.name]: true });
                  validate();
                }}
              />
              <div className="text-danger">
                {dirty["email"] && errors["email"][0] ? errors["email"] : ""}
              </div>
            </div>
            <div className="form-group mt-4">
              <label className="mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) => {
                  setDirty({ ...dirty, [e.target.name]: true });
                  validate();
                }}
              />
              <div className="text-danger">
                {dirty["password"] && errors["password"][0] ? errors["password"] : ""}
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <div className="m-1">{loginMessage}</div>
            <button
              className="btn btn-success m-2"
              onClick={onLoginClick}
            >Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
