import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src="./img/navbar-logo.svg" alt="..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <div className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/all-posts">
                POST
              </Link>
            </div>

            {isLoggedIn && (
              <>
                <div className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </div>
                <button onClick={logOutUser}>LOGOUT</button>
                <div className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </div>
                <span>{user && user.username}</span>
              </>
            )}

            {!isLoggedIn && (
              <>
                <div className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </div>
                <div className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
