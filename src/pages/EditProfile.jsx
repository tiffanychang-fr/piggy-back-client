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
      <h1>Edit Profile page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={form.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save changes</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default EditProfile;
