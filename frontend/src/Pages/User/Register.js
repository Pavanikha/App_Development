import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../Assets/CSS/style.css';  // Make sure your CSS file path is correct
import v from '../../Assets/images/v1.mp4';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentID: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = 'Passwords do not match';
    if (!formData.studentID) formErrors.studentID = 'Student ID is required';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem('user', JSON.stringify(formData));
      alert('Registration successful!');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        studentID: '',
      });
      navigate('/login');  
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
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <span>{errors.username}</span>}
            </div>
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
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
              />
              {errors.studentID && <span>{errors.studentID}</span>}
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? 
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
