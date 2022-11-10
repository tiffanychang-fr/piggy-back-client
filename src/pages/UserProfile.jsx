import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Personal Information</h1>

      <h2> Username: {user && user.username}</h2>
      <h2>Email: {user && user.email}</h2>
      <h2>City: {user && user.city}</h2>
      <h2>Country: {user && user.country}</h2>
      <h2>Phone: {user && user.phoneNumber}</h2>

      <Link to="/profile/edit">
        <button className="w-100 btn btn-primary btn-lg mt-5">
          Edit Profile
        </button>
      </Link>

      {/* <div className="col-md-5 col-lg-4 mt-5 mx-auto">
        <h1 className="mb-4">Personal Information</h1>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  value={user && user.username}
                  required
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                value={user && user.email}
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="+33123456789"
                value={user && user.phoneNumber}
                required
              />
              <div className="invalid-feedback">
                Please enter your phone number.
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder
                value={user && user.city}
                required
              />
              <div className="invalid-feedback">City required.</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder
                value={user && user.country}
                required
              />
              <div className="invalid-feedback">Country required.</div>
            </div>
          </div>

          <Link to="/profile/edit">
            <button className="w-100 btn btn-primary btn-lg mt-5">
              Edit Profile
            </button>
          </Link>
        </form>
      </div> */}
    </div>
  );
}

export default UserProfile;
