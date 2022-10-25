import React from "react";
import { Link } from "react-router-dom";

function MyPosts() {
  return (
    <div>
      <h1>My Posts page</h1>
      <Link to="/my-posts/create">
        <button>Create a post:</button>
      </Link>
    </div>
  );
}

export default MyPosts;
