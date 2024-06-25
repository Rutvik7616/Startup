import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Register/register.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, cpassword } = formData;

    if (password !== cpassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className='bgimg'>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="container1">
          <div>
            <div className="heading">Sign Up</div>
            <form className="form" onSubmit={handleSubmit}>
              <input
                required
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                required
                className="input"
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                required
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                required
                className="input"
                type="password"
                name="cpassword"
                placeholder="Confirm-Password"
                value={formData.cpassword}
                onChange={handleChange}
              />
              {error && <div className="error-message">{error}</div>}
              <input className="login-button" type="submit" value="Sign Up" />
            </form>
            <div className="social-account-container1">
              <span className="title">
                If You Have Account Click Here <Link to='/login'>LOGIN</Link>
              </span>
            </div>
            <span className="agreement">
              <a href="/">Learn user license agreement</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
