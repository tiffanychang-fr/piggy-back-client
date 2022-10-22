import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

function Signup() {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    country: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(form)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        storeToken(response.data.authToken);
        authenticateUser();

        // navigate("/login");
        navigate("/dashboard");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
        />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default Signup;
