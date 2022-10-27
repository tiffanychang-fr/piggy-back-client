import React from "react";
const PostCard = ({ post }) => {
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
      </div>
    </div>
  );
};

export default PostCard;
