import React, { useState } from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";
import postService from "../services/post.service";

const EditPost = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    city: "",
    country: "",
    budget: 0,
  });

  const { postId } = useParams();
  console.log(postId);
  const data = useLocation();
  console.log(data);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`edited form of the post:`, { form });
    postService
      .editPost(postId, form)
      .then((response) => {
        console.log(`response from editPost:`, response);
        navigate("/my-posts");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1>EditPost</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={form.title}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={form.description}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Country:
            <input
              type="text"
              name="country"
              onChange={handleChange}
              value={form.country}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input
              type="text"
              name="city"
              onChange={handleChange}
              value={form.city}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Budget:
            <input
              type="number"
              name="budget"
              onChange={handleChange}
              value={form.budget}
            />
          </label>
        </div>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};

export default EditPost;
