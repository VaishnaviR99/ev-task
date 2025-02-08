import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "../styles/login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/tasks');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div class="login-container">
    <div class="login-header">
      <h2 class="login-title">
        Sign in to your account
      </h2>
    </div>

    <div class="login-form-container">
      <div class="login-form-box">
        {error && (
          <div class="error-message">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label class="form-label">
              Email address
            </label>
            <input
              type="email"
              required
              class="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label">
              Password
            </label>
            <input
              type="password"
              required
              class="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="submit-button"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default Login;