import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import createOrderService from "../services/create-order.service";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    title: "",
    description: "",
    city: "",
    country: "",
    budget: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });

    createOrderService
      .createOrder(user, form)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/my-posts");
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      Create Post:
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Budget:
            <input
              type="number"
              name="budget"
              value={form.budget}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* <div className="form-group">
          <label>
            Posted by:
            <input
              type="text"
              name="postBy"
              value={form.postBy}
              onChange={handleChange}
            />
          </label>
        </div> */}
        <button type="submit">Submit post</button>
      </form>
    </div>
  );
};

export default CreatePost;
