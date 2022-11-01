import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import postService from "../services/post.service";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    postService
      .showAllPosts()
      .then((response) => {
        setAllPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <div className="container mt-3">
        <div className="row">
          {allPosts.map((post) => (
            <div className="col-md-4" key={post._id}>
              <div className="card bg-dark text-light p-2 my-2">
                <div className="card-body">
                  <h1>😎</h1>
                  <div className="card-title">{post.title}</div>
                  <div className="card-subtitle text-muted">
                    posted by {post.postBy.username}
                  </div>
                  <p className="card-text">
                    🤖Description: {post.description}
                    💰Budget: €{post.budget}
                  </p>
                </div>
                <Link
                  to={{ pathname: `/my-posts/details/${post._id}` }}
                  state={post}
                >
                  <button className="btn bg-warning mt-1 mb-4">
                    More details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
