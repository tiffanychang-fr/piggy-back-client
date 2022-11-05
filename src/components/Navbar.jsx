import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/all-posts">
        <button>POST</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/dashboard">
            <button>DASHBOARD</button>
          </Link>
          <button onClick={logOutUser}>LOGOUT</button>

          {/* <Link to="/profile">
            <button>Profile</button>
            <img
              src="https://picsum.photos/id/402/200/300"
              style={{ width: 50, height: 50, borderRadius: 25 }}
              alt="profile"
            />
          </Link> */}

          <span>{user && user.username}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>SIGNUP</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>LOGIN</button>{" "}
          </Link>
        </>
      )}
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    //   <div className="container">
    //     <a className="navbar-brand" href="#page-top">
    //       <img src="./img/navbar-logo.svg" alt="..." />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarResponsive"
    //       aria-controls="navbarResponsive"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       Menu
    //       <i className="fas fa-bars ms-1"></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //       <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link" href="/login">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/all-posts">
    //             Post
    //           </a>
    //         </li>
    //         {isLoggedIn && (
    //           <>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/dashboard">
    //                 Dashboard
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/logout" onClick={logOutUser}>
    //                 Logout
    //               </a>
    //             </li>
    //           </>
    //         )}

    //         {!isLoggedIn && (
    //           <>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/signup">
    //                 Signup
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a className="nav-link" href="/login">
    //                 Login
    //               </a>
    //             </li>
    //           </>
    //         )}

    //         <span>{user && user.username}</span>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
