import { Divider } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

const Register = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    fullName: "",
    dateOfBirth: "",
    country: "",
    gender: "",
    receiveNewsLetters: "",
  });
  const [countries, setCountries] = useState([
    { id: 0, countryName: "None" },
    { id: 1, countryName: "United States of America" },
    { id: 2, countryName: "Switzerland" },
    { id: 3, countryName: "Norway" },
    { id: 4, countryName: "Turkey" },
    { id: 5, countryName: "Britain" },
    { id: 6, countryName: "Iran" },
    { id: 7, countryName: "Germany" },
    { id: 8, countryName: "Japan" },
    { id: 9, countryName: "France" },
    { id: 10, countryName: "Brazil" },
    { id: 11, countryName: "Canada" },
  ]);
  const [errors, setErrors] = useState({
    email: [],
    password: [],
    fullName: [],
    dateOfBirth: [],
    country: [],
    gender: [],
    receiveNewsLetters: [],
  });

  const [dirty, setDirty] = useState({
    email: false,
    password: false,
    fullName: false,
    dateOfBirth: false,
    country: false,
    gender: false,
    receiveNewsLetters: false,
  });

  const [message, setMessage] = useState();

  const validate = () => {
    let errorsData = {};

    //Email
    errorsData.email = [];
    // Email can't be blank
    if (!state.email) {
      errorsData.email.push(" Email can't be blank");
    }
    // Email Reggex
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (state.email) {
      if (!validEmailRegex.test(state.email)) {
        errorsData.email.push("Enter a correct form of Email address!");
      }
    }

    //password
    errorsData.password = [];
    // password can't be blank
    if (!state.password) {
      errorsData.password.push(" Password can't be blank");
    }
    // password Reggex: password atleast 8 characters
    //which contain at least one numeric digit, one letter
    const validpasswordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
    if (state.password) {
      if (!validpasswordRegex.test(state.password)) {
        errorsData.password.push(
          " Enter a correct form of password which is at least 8 characters and contains at least one numeric digit and one letter!"
        );
      }
    }

    //fullName
    errorsData.fullName = [];
    // fullName can't be blank
    if (!state.fullName) {
      errorsData.fullName.push(" Full Name can't be blank");
    }

    //dateOfBirth
    errorsData.dateOfBirth = [];
    // dateOfBirth can't be blank
    if (!state.dateOfBirth) {
      errorsData.dateOfBirth.push(" DateOfBirth can't be blank");
    }

    //Gender
    errorsData.gender = [];
    // gender can't be blank
    if (!state.gender) {
      errorsData.gender.push(" Select a gender either male or female");
    }

    //country
    errorsData.country = [];
    // country can't be blank
    if (!state.country) {
      errorsData.country.push(" Select a country");
    }
    setErrors(errorsData);
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  useEffect(validate, [state]);

  const onRegisterClick = async () => {
    let dirtyData = dirty;
    Object.keys(dirty).forEach((element) => {
      dirtyData[element] = true;
    });
    // setDirty(dirtyData);

    validate();

    if (isValid()) {
      var body = {
        email: state.email,
        password: state.password,
        fullName: state.fullName,
        dateOfBirth: state.dateOfBirth,
        country: state.country,
        gender: state.gender,
        receiveNewsLetters: state.receiveNewsLetters,
      };

      let response = await fetch("http://localhost:8000/users", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response.body);

      if (response.ok) {
        setMessage(
          <span className="text-success">Successfully Registered</span>
        );
        props.history.replace('/dashboard');
      } else {
        setMessage(
          <span className="text-danger">Error in database connection</span>
        );
      }

      // setMessage(<span className="text-success">Success</span>)
    } else {
      setMessage(
        <span className="text-danger">Please note to the above errors</span>
      );
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
      <div className="col-lg-6 col-md-7 mx-auto">
        <div className="card border-primary shadow my-3">
          <div className="card-header border-bottom border-primary">
            <h4
              style={{ fontSize: "40px" }}
              className="text-primary text-center"
            >
              Register
            </h4>
            <ul className="text-danger">
              {Object.keys(errors).map((element) => {
                if (dirty[element]) {
                  return errors[element].map((err) => {
                    return (
                      <li key={err}>
                        {" "}
                        ERROR {dirty.key} :{err}
                      </li>
                    );
                  });
                } else {
                  return "";
                }
              })}
            </ul>
          </div>
          <div className="card-body border-primary">
            {/* email */}
            <div className="row mb-3">
              <label className="col-lg-4" htmlFor="email">
                Email
              </label>
              <div className="col-lg-8">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="form-control"
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  onBlur={(e) => {
                    setDirty({ ...dirty, [e.target.name]: true });
                    validate();
                  }}
                />
                <div className="text-danger">
                  {dirty["email"] && errors["email"][0] ? errors["email"] : ""}
                </div>
              </div>
            </div>

            {/* password */}
            <div className="row mb-3">
              <label className="col-lg-4" htmlFor="password">
                Password
              </label>
              <div className="col-lg-8">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  value={state.password}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  onBlur={(e) => {
                    setDirty({ ...dirty, [e.target.name]: true });
                    validate();
                  }}
                />
                <div className="text-danger">
                  {dirty["password"] && errors["password"][0]
                    ? errors["password"]
                    : ""}
                </div>
              </div>
            </div>

            {/* full name */}
            <div className="row mb-3">
              <label className="col lg-4" htmlFor="fullName">
                Full Name
              </label>
              <div className="col-lg-8">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="form-control"
                  value={state.fullName}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                  onBlur={(e) => {
                    setDirty({ ...dirty, [e.target.name]: true });
                    validate();
                  }}
                />
                <div className="text-danger">
                  {dirty["fullName"] && errors["fullName"][0]
                    ? errors["fullName"]
                    : ""}
                </div>
              </div>
            </div>

            {/* date of birth */}
            <div className="row mb-3">
              <label className="col lg-4" htmlFor="dateOfBirth">
                Date Of Birth
              </label>
              <div className="col-lg-8">
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  className="form-control"
                  value={state.dateOfBirth}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                />
                <div className="text-danger">
                  {dirty["dateOfBirth"] && errors["dateOfBirth"][0]
                    ? errors["dateOfBirth"]
                    : ""}
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="row mb-3">
              <label className="col-lg-4">Gender</label>
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    name="gender"
                    type="radio"
                    value="male"
                    id="male"
                    className="form-check-input"
                    checked={state.gender === "male" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label htmlFor="male" className="form-check-inline">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    name="gender"
                    type="radio"
                    value="female"
                    id="female"
                    className="form-check-input"
                    checked={state.gender === "female" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label htmlFor="female" className="form-check-inline">
                    Female
                  </label>
                </div>
                <div className="text-danger">
                  {dirty["gender"] && errors["gender"][0]
                    ? errors["gender"]
                    : ""}
                </div>
              </div>
            </div>

            {/* country */}
            <div className="row mb-3">
              <label className="col-lg-4" htmlFor="country">
                Country
              </label>
              <div className="col-lg-8">
                <select
                  id="country"
                  name="country"
                  className="form-control"
                  value={state.country}
                  onChange={(e) =>
                    setState({ ...state, [e.target.name]: e.target.value })
                  }
                >
                  {countries.map((res) => (
                    <option key={"countryItem" + res.id} vlaue={res.id}>
                      {res.countryName}
                    </option>
                  ))}
                </select>
                <div className="text-danger">
                  {dirty["country"] && errors["country"][0]
                    ? errors["country"]
                    : ""}
                </div>
              </div>
            </div>
            {/* receive NewsLetters */}
            <div className="row mb-3">
              <label className="col-lg-4"></label>
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    name="receiveNewsLetters"
                    type="checkbox"
                    value="true"
                    id="receiveNewsLetters"
                    className="form-check-input"
                    checked={state.receiveNewsLetters === "true" ? true : false}
                    onChange={(e) =>
                      setState({ ...state, [e.target.name]: e.target.value })
                    }
                  />
                  <label
                    htmlFor="receiveNewsLetters"
                    className="form-check-inline"
                  >
                    ReceiveNewsLetters
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/*footer*/}
          <div className="card-footer text-center">
            <div className="m-1">{message}</div>
            <div>
              <button className="btn btn-primary m-2" onClick={onRegisterClick}>
                Register
              </button>
            </div>
          </div>
          {/* end of footer */}
        </div>
      </div>
    </div>
  );
};

export default Register;
