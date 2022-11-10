import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import postService from "../services/post.service";

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

    postService
      .createPost(user, form)
      .then((response) => {
        console.log(`log of response.data from CreatePost.jsx:`, response.data);
        navigate("/my-posts");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <div className="col-md-5 col-lg-4 mt-5 mx-auto">
        <h1 className="mb-4">Create Post</h1>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Add a title"
              />
              <div className="invalid-feedback">Title required.</div>
            </div>

            <div className="col-12">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Add a description"
              />
              <div className="invalid-feedback">Description required.</div>
            </div>

            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Add a city"
              />
              <div className="invalid-feedback">City required.</div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Add a city"
              />
              <div className="invalid-feedback">Country required.</div>
            </div>

            <div className="col-12">
              <label className="form-label">Budget</label>
              <div className="input-group novalidate has-validation">
                <span className="input-group-text">€</span>
                <input
                  type="text"
                  className="form-control"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Please enter your budget.
                </div>
              </div>
            </div>
          </div>

          <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
