import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import '../Login/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        navigate('/home');
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
            <div className="heading">Sign In</div>
            <form className="form" onSubmit={handleSubmit}>
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
              <span className="forgot-password"><a href="/">Forgot Password?</a></span>
              {error && <div className="error-message">{error}</div>}
              <input className="login-button" type="submit" value="Sign In" />
            </form>
            <div className="social-account-container1">
              <span className="title">
                If You Don't Have Account <Link to="/registration">Register</Link>
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

export default Login;
