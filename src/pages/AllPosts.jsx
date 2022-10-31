import React from "react";
import postService from "../services/post.service";

const AllPosts = () => {
  postService
    .showAllPosts()
    .then((response) => {
      console.log(
        `Hello from the showAllPosts function on the AllPosts page`,
        response
      );
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div>
      <h1>
        AllPosts page to show all the available posts without being a user
      </h1>
    </div>
  );
};

export default AllPosts;
