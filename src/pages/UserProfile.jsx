import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile page</h1>
      <h2> Username: {user && user.username}</h2>
      <h2>Email: {user && user.email}</h2>
      <h2>City: {user && user.city}</h2>
      <h2>Country: {user && user.country}</h2>
      <h2>Phone: {user && user.phoneNumber}</h2>

      <Link to="/profile/edit">
        <button>Edit Profile</button>
      </Link>
    </div>
  );
}

export default UserProfile;
