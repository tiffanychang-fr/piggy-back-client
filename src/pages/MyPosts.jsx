import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import { AuthContext } from "../context/auth.context";
import postService from "../services/post.service";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService
      .getAllPosts(user)
      .then((result) => {
        console.log(`result from the myposts page`, result);
        setPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return (
    <div>
      <h1>My Posts page</h1>
      <Link to="/my-posts/create">
        <button>Create a post:</button>
      </Link>
      <h3>🌵🎄🌲🌴🌱🌿🍀🎋🍃🍁🌷💐🥀</h3>
      <div className="container">
        <div className=" row justify-content-around mx-3 my-5">
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
