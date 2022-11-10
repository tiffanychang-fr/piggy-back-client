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
      <h1 className="mt-5">Join community</h1>
      <main className="form-signup w-100 m-auto">
        <form onSubmit={handleSignupSubmit}>
          <h1 className="h5 mb-3 fw-normal">Create account</h1>
          <div className="form-floating">
            <input
              type="text"
              name="username"
              className="form-control"
              value={form.username}
              placeholder="Username"
              id="floatingInput"
              onChange={handleChange}
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              placeholder="Email address"
              id="floatingInput"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <h1 className="h5 my-3 fw-normal">Personal Information</h1>

          <div className="form-floating">
            <input
              type="text"
              name="city"
              className="form-control"
              value={form.city}
              placeholder="City"
              id="floatingInput"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">City</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="country"
              className="form-control"
              value={form.country}
              placeholder="Country"
              id="floatingInput"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Country</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              value={form.phoneNumber}
              placeholder="Phone Number"
              id="floatingInput"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <button
            type="submit"
            className="w-100 mt-4 mb-3 btn btn-lg btn-warning"
          >
            Signup
          </button>
        </form>
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </main>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Signup;
