import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-10 my-5">
          <div className="card bg-dark text-light pt-5 pb-5 px-5">
            <div className="row">
              <div className="col-md-5">
                <img
                  src="./img/brand-logo.png"
                  alt="logo"
                  className="profile-img"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  {/* <h1 className="text-start">User Profile</h1> */}
                  <h3 className="text-start ">
                    👤 Username: {user && user.username}
                  </h3>
                  <h3 className="text-start ">
                    📧 Email: {user && user.email}
                  </h3>
                  <h3 className="text-start ">🏘️ City: {user && user.city}</h3>
                  <h3 className="text-start ">
                    👋 Country: {user && user.country}
                  </h3>
                  <h3 className="text-start ">
                    📞 Phone: {user && user.phoneNumber}
                  </h3>
                </div>
              </div>
            </div>
            <Link to="/profile/edit">
              <button className="btn btn-lg w-50 py-3 mt-3 bg-warning ">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
