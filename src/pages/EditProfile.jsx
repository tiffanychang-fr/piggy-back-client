import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import profileService from "../services/profile.service";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { user, setUser, storeToken } = useContext(AuthContext);
  const [form, setForm] = useState(user);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    setErrorMessage("");
    // filipe recommends you reset the error state before the call
    // #Titos

    profileService
      .editProfile(form)
      .then((response) => {
        console.log(`LOOK HERE:`, response);
        //TODO: remove old jwt
        // set new JWT from the backend in the localStorage
        storeToken(response.data.authToken);
        setUser(response.data.user);
        navigate("/profile");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <div className="col-md-5 col-lg-4 mt-5 mx-auto">
        <h1 className="mb-5">Edit Profile</h1>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Username</label>
              <div className="input-group novalidate has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col-12">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Please enter your phone number.
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
              <div className="invalid-feedback">City required.</div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                name="country"
                value={form.country}
                onChange={handleChange}
              />
              <div className="invalid-feedback">Country required.</div>
            </div>
          </div>

          <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">
            Save Profile
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
