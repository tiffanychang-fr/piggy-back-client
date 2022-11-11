import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/Cards/PostCard";
import { AuthContext } from "../context/auth.context";
import postService from "../services/post.service";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService
      .getAllPosts(user)
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <div>
      <h1 className="mt-4">MY POSTS</h1>
      <div className="row justify-content-end text-center">
        <div className="col-md-3">
          <Link to="/my-posts/create">
            <button className="btn btn-lg btn-warning">➕ POST</button>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around mx-3 my-3">
          {posts.map((post) => {
            return (
              <PostCard
                post={post}
                key={post._id}
                setPosts={setPosts}
                posts={posts}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
