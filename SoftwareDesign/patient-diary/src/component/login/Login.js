import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../diarycss.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    navigate('/calendar')
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='Login'>
      <div className='LoginCard'>
        <div className='Login-header'>Log In</div>
        <div className='input'>
          <div className='email'>
            <div className='input-text'> Email :</div>
            <input type="text" className='login-input' value={email} onChange={handleEmailChange} />
          </div>
          <div className='password'>
            <div className='input-text'> Password :</div>
            <input type="password" className='login-input' value={password} onChange={handlePasswordChange} />
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className='login-btn'>
          <button className='login' onClick={handleLogin}>Log In</button>
        </div>
        <div className='create-account'><Link to="/create">No account? Sign Up</Link></div>
      </div>
    </div>
  );
}

export default Login;
