import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

function Login() {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(form)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/dashboard");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <h1 className="mt-5">Welcome !</h1>
      <main className="form-login w-100 m-auto">
        <form onSubmit={handleLoginSubmit}>
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
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            type="submit"
            className="w-100 mt-4 mb-3 btn btn-lg btn-warning"
          >
            Login
          </button>
        </form>
        <p>Don't have an account yet?</p>
        <Link to={"/signup"}>Sign Up</Link>
      </main>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
