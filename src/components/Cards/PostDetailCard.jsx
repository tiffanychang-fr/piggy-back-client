import React from "react";

const PostDetailCard = ({ postData }) => {
  console.log(`postData from postDetailCard:`, postData);
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-12 my-2">
          <div className="card bg-dark text-light pt-3 pb-5 px-5">
            <div className="card-body">
              <h1 className="card-title mb-5">
                Title: {postData.state?.title}
              </h1>
              <h5 className="card-text text-start mx-5">
                🫥Description: {postData.state?.description}
              </h5>
              <h5 className="card-text text-start mx-5">
                🚩City: {postData.state?.city}
              </h5>
              <h5 className="card-text text-start mx-5">
                🌎Country: {postData.state?.country}
              </h5>
              <h5 className="card-text text-start mx-5">
                🪙Budget: {postData.state?.budget}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailCard;
