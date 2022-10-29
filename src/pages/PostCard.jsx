import React from "react";
import { Link, useNavigate } from "react-router-dom";
import postService from "../services/post.service";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    postService
      .getSingleEditPost(post)
      .then((response) => {
        console.log(`Response from the editPost function:`, response);
        navigate(`/my-posts/edit/${post._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    postService
      .deletePost(post)
      .then((response) => {
        console.log(`handleDelete function is successfull`, response);
        navigate("/my-posts");
      })
      .catch((err) => {
        console.log(
          `oopsie there went someting wrong with the handle delete function`,
          err
        );
      });
  };
  return (
    <div className="col-md-4 mt-3">
      <div className="card bg-dark text-light">
        <div className="card-body">
          <div className="card-title">Title: {post.title}</div>
          <div className="card-text">Description: {post.description}</div>
          <div className="card-text">City: {post.city}</div>
          <div className="card-text">Country: {post.country}</div>
          <div className="card-text">Budget: {post.budget}</div>
          <div className="card-text muted">Posted by:{post.postBy}</div>
        </div>
        <Link to={{ pathname: `/my-posts/details/${post._id}` }} state={post}>
          <button>More details</button>
        </Link>
        <Link to={{ pathname: `/my-posts/edit/${post._id}` }} state={post}>
          <button onClick={handleClick} type="submit">
            Edit Post
          </button>
        </Link>
        <button type="submit" onClick={handleDelete}>
          Delete post
        </button>
      </div>
    </div>
  );
};

export default PostCard;
