import React from "react";
import { Link, useNavigate } from "react-router-dom";
import postService from "../../services/post.service";

const PostCard = ({ post, setPosts, posts }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    postService
      .getSingleEditPost(post)
      .then((response) => {
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
        const filteredPostList = posts.filter(
          (filteredPost) => filteredPost._id !== post._id
        );

        setPosts(filteredPostList);
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
        <div className="card-body m-3">
          <h3 className="card-title pb-2">Title: {post.title}</h3>
          <h6 className="card-text text-start px-3">
            Description: {post.description}
          </h6>
          <p className="card-text text-start px-3">Country: {post.country}</p>
          {/* <div className="card-text">City: {post.city}</div>
          <div className="card-text">Budget: {post.budget}</div>
          <div className="card-text muted">Posted by:{post.postBy}</div> */}
          <Link to={{ pathname: `/my-posts/details/${post._id}` }} state={post}>
            <button className="btn bg-warning m-1">More details</button>
          </Link>
          <Link to={{ pathname: `/my-posts/edit/${post._id}` }} state={post}>
            <button
              onClick={handleClick}
              type="submit"
              className="btn bg-light m-1"
            >
              Edit
            </button>
          </Link>
          <button
            type="submit"
            className="btn bg-danger text-light m-1"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
