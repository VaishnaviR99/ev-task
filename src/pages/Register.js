import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "../styles/register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/tasks');
    } catch (error) {
      console.error("Registration Error:", error);
   
      if (typeof error === 'string') { // Check if error is already a string
        setError(error);
      } else if (error && error.message) {  // Check if error is an object with a message property
        setError(error.message);
      } else {
        setError("An error occurred during registration."); // Default error message
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div class="register-container">
    <div class="register-header">
      <h2 class="register-title">
        Create your account
      </h2>
    </div>

    <div class="register-form-container">
      <div class="register-form-box">
        {error && (
          <div class="error-message">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              class="form-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <label class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              class="form-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <label class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              class="form-input"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="register-button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default Register;