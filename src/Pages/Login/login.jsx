import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css';
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { email, password });
    setEmail('');
    setPassword('');
    navigate('/'); // Redirect to home page after successful login
  };

  return (
    
   <>
   <Header/>
     
   <div className='form-container'>
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
        <button type="submit">Login</button>
      </form>
    
    </div>
    <Footer/>
   </>
  );
};

export default Login;
