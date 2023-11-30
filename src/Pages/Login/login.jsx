import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false); // State to handle warning message
  const [loginSuccess, setLoginSuccess] = useState(false); // State to handle login success message

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
    setShowWarning(false); // Hide warning when typing in the email field
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setShowWarning(false); // Hide warning when typing in the password field
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setShowWarning(true); // Show warning if either field is empty
      return; // Stop submission if fields are empty
    }

    // Simulating a successful login
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setEmail('');
      setPassword('');
      navigate('/'); // Redirect to home page after successful login
    }, 2000); // Change the timeout value as needed
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h2>SignIn & Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {showWarning && (
            <p className='warning-msg'>Please fill in both email and password fields.</p>
          )}
          {loginSuccess && (
            <p className='login-msg'>Login successful. Redirecting...</p>
          )}
          {!loginSuccess && (
            <button type="submit">Login</button>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
