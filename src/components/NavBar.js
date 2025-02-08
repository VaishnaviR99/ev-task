import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "../styles/navbar.css"

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-content">
          <div class="navbar-brand-container">
            <Link to="/" class="navbar-brand">
              Task Manager
            </Link>
          </div>
          <div class="navbar-menu">
            {user ? (
              <div class="user-section">
                <span class="welcome-text">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  class="nav-button"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div class="auth-links">
                <Link
                  to="/login"
                  class="nav-link"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  class="nav-link"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;