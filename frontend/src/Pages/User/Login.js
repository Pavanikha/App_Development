import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../Assets/CSS/style.css'; // Make sure your CSS file path is correct
import v from '../../Assets/images/v1.mp4';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        alert('Login successful!');
        navigate('/home'); // Redirect to home page
      } else {
        alert('Invalid email or password');
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="video-background">
      <video autoPlay muted loop id="background-video">
        <source src={v} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="center-container">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? 
            <Link to="/">Register</Link>
          </p><br/>
          <p>Are you Admin?<Link to="/adminlogin">Login Here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
