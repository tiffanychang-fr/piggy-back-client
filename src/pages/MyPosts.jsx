import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AllPosts from "./AllPosts";
// import { AuthContext } from "../context/auth.context";
import createOrderService from "../services/create-order.service";

const MyPosts = () => {
  // const { user } = useContext(AuthContext);
  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    createOrderService
      .getAllOrders()
      .then((result) => {
        console.log(`result from the myposts page`, result);
        setAllPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>My Posts page</h1>
      <Link to="/my-posts/create">
        <button>Create a post:</button>
      </Link>
      <AllPosts />
    </div>
  );
};

export default MyPosts;
