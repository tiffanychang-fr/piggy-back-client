import React from "react";
import { Link, useParams, useEffect, useContext } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import OfferCard from "./OfferCard";
import offerService from "../services/offer.service.js";

const PostDetail = () => {
  // const { user } = useContext(AuthContext);
  const { postId } = useParams();

  // useEffect(() => {
  //   offerService.getAllOffers(user).then().catch();
  // });

  const handleClick = () => {
    offerService
      .getOfferPage(postId)
      .then((response) => {
        console.log(`Response from the offer server:`, response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // An offer could be proposed upon a post
  const fakeOffers = [
    {
      _id: "imamafakeofferid",
      post: "iamafakepostid",
      sellerMessage:
        "Hello, I live in Paris 12, I am available to accompany you to see a doctor on Nov-20",
      price: 20,
      proposedBy: "iamafakeuserid",
      isConfirmed: false,
    },
    {
      _id: "imamafakeofferid2",
      post: "iamafakepostid2",
      sellerMessage:
        "Hello, I live in Vincennes, I can accompany you to the prefecture on Jan-15",
      price: 25,
      proposedBy: "iamafakeuserid2",
      isConfirmed: false,
    },
    {
      _id: "imamafakeofferid3",
      post: "iamafakepostid2",
      sellerMessage:
        "Hello, I live in Arcueil, I can help you to apply CPF in 94",
      price: 15,
      proposedBy: "iamafakeuserid3",
      isConfirmed: false,
    },
  ];

  return (
    <div>
      <h1>Post Details</h1>
      <p>This space is kept for tony to populate the post details✌️</p>
      <h1>👣</h1>
      <h1>My Offers</h1>
      <Link to={{ pathname: `/create-offer/${postId}` }}>
        <button className="btn btn-warning btn-lg mt-3" onClick={handleClick}>
          Make an offer !
        </button>
      </Link>
      <div className="container">
        <div className="row mt-3">
          {fakeOffers.map((offer) => (
            <OfferCard key={offer._id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
