import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import offerService from "../services/offer.service";

const CreateOffer = () => {
  const { user } = useContext(AuthContext);
  const { postId } = useParams();
  const [form, setForm] = useState({
    sellerMessage: "",
    price: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    offerService
      .createOffer(user, postId, form)
      .then((response) => {
        navigate(`/my-posts/details/${postId}`);
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
      <h1 className="mt-5 mb-3">Make an Offer!</h1>
      <h1>😎</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-around">
          <label className="form-label col-md-1">
            Price:
            <input
              type="text"
              name="price"
              value={form.price}
              placeholder="20€"
              onChange={handleChange}
              className="form-control mt-1"
            />
          </label>
        </div>
        <div className="mb-3 row justify-content-around">
          <label className="form-label col-md-5">
            Seller Message:
            <textarea
              type="text"
              name="sellerMessage"
              value={form.sellerMessage}
              placeholder="Hello, I am Tiffany, I live in Paris 12, I am available to accompany you to see a doctor on Nov-20."
              onChange={handleChange}
              className="form-control mt-1"
              rows="4"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-lg btn-warning">
          Submit Offer!
        </button>
      </form>
    </div>
  );
};

export default CreateOffer;
