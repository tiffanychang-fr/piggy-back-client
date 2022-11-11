import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      postService.getSinglePost(postId).then((response) => {
        console.log("response: ", response);
        setForm(response.data);
      });
    }
  }, [postId]);

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
      <div className="col-md-5 col-lg-4 mt-5 mx-auto">
        <h1 className="mb-4">Edit Post</h1>
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
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
