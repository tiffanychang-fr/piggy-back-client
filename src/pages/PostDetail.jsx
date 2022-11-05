import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import OfferCard from "../components/Cards/OfferCard";
import offerService from "../services/offer.service.js";
import PostDetailCard from "../components/Cards/PostDetailCard";

const PostDetail = () => {
  const { user } = useContext(AuthContext);
  const { postId } = useParams();
  const postData = useLocation();
  const postByUserId = postData.state?.postBy;
  // console.log(postData.state);
  // console.log(postByUserId);
  const [allOffersByPost, setAllOffersByPost] = useState([]);

  // Render all offers of this post
  useEffect(() => {
    offerService
      .getAllOffersByPost(postId)
      .then((response) => {
        setAllOffersByPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [postId]);

  const handleClick = () => {
    offerService
      .getOfferPage(postId, user, postByUserId)
      .then((response) => {
        console.log(`Response from the offer server:`, response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Post Details</h1>
      <PostDetailCard postData={postData} />
      <h1>My Offers</h1>
      {console.log(allOffersByPost[0])}

      {/* Post owner cannot make an offer to his/ her own post*/}
      {/* {user._id !== postByUserId && (
        <Link to={{ pathname: `/create-offer/${postId}` }}>
          <button className="btn btn-warning btn-lg mt-3" onClick={handleClick}>
            Make an offer !
          </button>
        </Link>
      )} */}

      <Link to={{ pathname: `/create-offer/${postId}` }}>
        <button className="btn btn-warning btn-lg mt-3" onClick={handleClick}>
          Make an offer !
        </button>
      </Link>

      {/* show all the offers */}
      <div className="container">
        <div className="row mt-3">
          {allOffersByPost.map(
            (offer) =>
              offer.isAccepted === false && (
                <OfferCard
                  key={offer._id}
                  offer={offer}
                  allOffersByPost={allOffersByPost}
                  setAllOffersByPost={setAllOffersByPost}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
