import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const CreateAcc = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const navigate = useNavigate()

  const validateInputs = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "You must enter a first name";
    }

    if (!lastName) {
      newErrors.lastName = "You must enter a last name";
    }

    if (!email) {
      newErrors.email = "You must enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "You must enter a password";
    }
    if (/(?=.*\d)/.test(password)) {
      const divElement = document.querySelector('.req5');
      divElement.style.color = 'green';
    } else {
      newErrors.password = "";
      const divElement = document.querySelector('.req5');
      divElement.style.color = 'red';
    }
    if (/(?=.*[a-z])/.test(password)) {

      const divElement = document.querySelector('.req3');
      divElement.style.color = 'green';
    } else {
      newErrors.password = "";
      const divElement = document.querySelector('.req3');
      divElement.style.color = 'red';
    }
    if (/(?=.*[A-Z])/.test(password)) {

      const divElement = document.querySelector('.req2');
      divElement.style.color = 'green';
    } else {
      newErrors.password = "";
      const divElement = document.querySelector('.req2');
      divElement.style.color = 'red';
    }
    if (/(?=.*\W)/.test(password)) {

      const divElement = document.querySelector('.req4');
      divElement.style.color = 'green';
    } else {
      newErrors.password = "";
      const divElement = document.querySelector('.req4');
      divElement.style.color = 'red';
    }
    if (password.length > 8) {

      const divElement = document.querySelector('.req1');
      divElement.style.color = 'green';
    } else {
      newErrors.password = "";
      const divElement = document.querySelector('.req1');
      divElement.style.color = 'red';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "You must confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleKeyUp = (e) => {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
      setErrors((errors) => ({ ...errors, firstName: null }));
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
      setErrors((errors) => ({ ...errors, lastName: null }));
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
      setErrors((errors) => ({ ...errors, email: null }));
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
      setErrors((errors) => ({ ...errors, password: null }));
    } else if (e.target.id === "confirmPassword") {
      setConfirmPassword(e.target.value);
      setErrors((errors) => ({ ...errors, confirmPassword: null }));
    }
    validateInputs()
  };


  const handleCreateAccount = () => {
    const allIds = ["firstName", "lastName", "email", "password", "confirmPassword"]; // Replace with an array of all the input IDs
    const touchedState = allIds.reduce((acc, curr) => ({ ...acc, [curr]: true }), {});
    setTouched(touchedState);
    if (validateInputs()) {
      setErrors({});
      setTouched({});

      const confirmed = window.confirm('Sign In Sucessfully!!!');
      if (confirmed) {
        navigate('/')
      }
    } else {
      window.confirm('You did\'t complete the form.');

    }
  };

  const handleFocus = (e) => {
    setTouched((touched) => ({ ...touched, [e.target.id]: true }));
  };



  return (
    <div className="createPage">
      <div className="createCard">
        <div className="create-header">Create Account</div>
        <div className="input">
          <div className="wholeName">
            <div className="input-text"> First Name :</div>
            <input
              type="text"
              className="login-input"
              id="firstName"
              onKeyUp={handleKeyUp}
              onFocus={handleFocus}
            />
            {touched.firstName && errors.firstName && (
              <div className="error-message">{errors.firstName}</div>
            )}
          </div>
          <div className="wholeName">
            <div className="input-text"> Last Name :</div>
            <input
              type="text"
              className="login-input"
              id="lastName"
              onKeyUp={handleKeyUp}
              onFocus={handleFocus}
            />
            {touched.lastName && errors.lastName && (
              <div className="error-message">{errors.lastName}</div>
            )}
          </div>
          <div className="email">
            <div className="input-text"> Email :</div>
            <input
              type="text"
              className='login-input'
              id="email"
              onKeyUp={handleKeyUp}
              onFocus={handleFocus}
            />
            {touched.email && errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
          <div className='password'>
            <div className='input-text'> Password :</div>
            <input
              type="password"
              className='login-input'
              id="password"
              onKeyUp={handleKeyUp}
              onFocus={handleFocus}
            />
            <div className="requirement" style={{ color: "red" }}>
              <div className="req1"> 1. 8 or above characters </div>
              <div className="req2"> 2. Include upper case </div>
              <div className="req3"> 3. Include lower case </div>
              <div className="req4"> 4. Include special character </div>
              <div className="req5"> 5. Include one number</div>
            </div>
            {touched.password && errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <div className='password'>
            <div className='input-text'> Confirm Password :</div>
            <input
              type="password"
              className='login-input'
              id="confirmPassword"
              onKeyUp={handleKeyUp}
              onFocus={handleFocus}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <   div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>
        </div>
        <div className='create-btn'>
          <button className='create' onClick={handleCreateAccount}>Sign In</button>
        </div>
        <div className="create-account">
          <Link to="/">Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAcc;